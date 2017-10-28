'use strict'

const Router = require('express').Router
const Analyser = require('../../../../analyser/analyser')
const errors = require('../../../../analyser/errors')

let analyserApi = Router()

analyserApi.get('/analyse', (req, res) => {
  try {
    let url = req.query.url
    let analyser = new Analyser(url)
    analyser.analyse().then((analysis) => {
      return res.json(analysis)
    }).catch((err) => {
      if (err instanceof errors.InvalidContentError ||
          err instanceof errors.UnreachableUrlError) {
        let e = {
          error: {
            name: err.name,
            message: err.message
          }
        }

        if (err.status) {
          e.error.status = err.status
        }

        return res.status(400).json(e)
      } else {
        console.log(err)
        return res.status(500).send()
      }
    })
  } catch(err) {
    if (err instanceof errors.InvalidUrlError) {
      let e = {
        error: {
          name: err.name,
          message: err.message
        }
      }
    
      return res.status(400).json(e)
    } else {
      console.log(err)
      return res.status(500).send()
    }
  }
})

module.exports = analyserApi
