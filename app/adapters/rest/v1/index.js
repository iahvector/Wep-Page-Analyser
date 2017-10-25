'use strict'

let Router = require('express').Router
let analysisApi = require('./analysis/analysis_api')

let v1Api = Router()
v1Api.use(analysisApi)

module.exports = v1Api

