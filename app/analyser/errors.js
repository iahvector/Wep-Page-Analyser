'use strict'

class InvalidUrlError extends Error {
  constructor(url, ...params) {
    super(`Invalid URL: ${url}`, ...params)
    this.name = 'InvalidUrlError'
  }
}

class InvalidContentError extends Error {
  constructor(url, ...params) {
    super(`URL does not contain valid HTML: ${url}`, ...params)
    this.name = 'InvalidContentError'
  }
}

class UnreachableUrlError extends Error {
  constructor(url, status, ...params) {
    super(`The URL cannot be reached: ${url}, Status: ${status}`, ...params)
    this.name = 'UnreachableUrlError'
    this.status = status
  }
}

module.exports = {
  InvalidUrlError: InvalidUrlError,
  InvalidContentError: InvalidContentError,
  UnreachableUrlError: UnreachableUrlError
}
