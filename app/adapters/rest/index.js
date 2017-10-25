'use strict'

let Router = require('express').Router
let v1Api = require('./v1/index')

let restApi = Router()

restApi.use('/v1', v1Api)

module.exports = restApi
