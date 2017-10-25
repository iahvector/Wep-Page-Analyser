'use strict'

const agent = require('superagent')
const { groupByLimit } = require('async')
const cheerio = require('cheerio')
const errors = require('./errors')
const { URL } = require('url')

const DOCTYPE_REGEX = /^<!doctype html[^>]*>/i
const HTML_DOCTYPES = {
  'HTML 5': /^<!doctype html>$/i,
  'HTML 4.01': /HTML 4.01/i,
  'XHTML 1.0': /XHTML 1.0/i,
  'XHTML 1.1': /XHTML 1.1/i,
  'XHTML Basic 1.1': /XHTML Basic 1.1/i
}


class Analyser {
  constructor(url) {
    try {
      this.url = new URL(url)
    } catch (e) {
      throw new errors.InvalidUrlError(url)
    }
  }

  loadPage() {
    return new Promise((resolve, reject) => {
      agent.get(this.url.href).then((res) => {
        if (res.type !== 'text/html') {
          return reject(new errors.InvalidContentError(url))
        }

        this.page_body = res.text.trim()
        this.$ = cheerio.load(this.page_body)
        resolve(this.page_body)
      }).catch((err) => {
        return reject(new errors.UnreachableUrlError(url, err.status))
      })
    })
  }

  getHtmlVersion() {
    let match = this.page_body.match(DOCTYPE_REGEX)
    if (match == null) {
      return 'unknown'
    }

    let doctype = match[0]

    let version = null
    for (let key in HTML_DOCTYPES) {
      if (HTML_DOCTYPES[key].test(doctype)) {
        version = key
        break;
      }
    }

    if (version == null) {
      return 'unknown'
    }

    return version
  }

  getTitle() {
    return this.$('title').text()
  }

  hasLoginForm() {
    return this.$('input[type=password]').length > 0
  }

  getHeadingsCount() {
    return {
      h1: this.$('h1').length,
      h2: this.$('h2').length,
      h3: this.$('h3').length,
      h4: this.$('h4').length,
      h5: this.$('h5').length,
      h6: this.$('h6').length,
    }
  }

  getLinksCount() {
    return new Promise((resolve, reject) => {
      let count = {
        all: 0,
        internal: 0,
        external: 0,
        inaccessible: 0
      }

      let links = this.$('a')

      if (links.length == 0) {
        return count
      }

      count.all = links.length
      let full_urls = []

      for (let i = 0; i < links.length; i++) {
        let link = links[i].attribs.href.trim()
        if (link.startsWith('#')) {
          count.internal++

          if (this.$(link).length == 0) {
            count.inaccessible++
          }
        } else if (link.startsWith('/')) {
          count.internal++
          let url = new URL(link, this.url.origin)
          full_urls.push(url)
        } else if (link.startsWith(this.url.origin)) {
          count.internal++
          full_urls.push(link)
        } else {
          count.external++
          full_urls.push(link)
        }
      }

      groupByLimit(full_urls, 10, (link, callback) => {
        agent.get(link).buffer(false).then((res) => {
          callback(null, 'accessible')
        }).catch((err) => {
          callback(null, 'inaccessible')
        })
      }, (err, res) => {
        if (err) {
          return reject(err)
        }
        
        if (res.inaccessible) {
          count.inaccessible = res.inaccessible.length
        }

        resolve(count)    
      })
    })
  }

  analyse() {
    return new Promise((resolve, reject) => {
      this.loadPage().then((page_body) => {
        this.getLinksCount().then((linksCount) => {
          let analysis = {
            htmlVersion: this.getHtmlVersion(),
            title: this.getTitle(),
            headings: this.getHeadingsCount(),
            hasLoginForm: this.hasLoginForm(),
            linksCount: linksCount
          }

          return resolve(analysis)
        }).catch((err) => {
          reject(err)
        })
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

module.exports = Analyser
