/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const { describe, it, before }  = require('mocha')
const request                   = require('supertest')
const express                   = require('express')

const serviceHealth = require('./')

const service = express()

describe('health service', function () {

  before(function (done) {
    const router = express.Router()

    router.get(
      '/notfound',
      (req, res) => { res.status(404) }
    )

    service.use(serviceHealth(express.Router))
    service.use('/', router)

    done()
  })

  it('should return successful with 200 and a payload', function (done) {
    request(service)
      .get('/health')
      .expect(200, done)
  })
})
