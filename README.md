# express-service-health

express middleware to provide a simple health check endpoint for a service

----
<a href="https://nodei.co/npm/express-service-health/"><img src="https://nodei.co/npm/express-service-health.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/express-service-health.svg?branch=master)](https://travis-ci.org/joaquimserafim/express-service-health)[![Coverage Status](https://coveralls.io/repos/github/joaquimserafim/express-service-health/badge.svg)](https://coveralls.io/github/joaquimserafim/express-service-health)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/express-service-health/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.x.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/express-service-health/blob/master/package.json#L42)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
`const health = require('express-service-health')`

`health(express.Router[, endpoint])`

`health` is the default value for the endpoint


### example

```js
const health = require('express-service-health)
const express = require('express')

const service = express()

const router = express.Router()

router.get(
    '/hello-world',
    (req, res) => { res.send('hello world') }
)

service.use(serviceHealth(express.Router))
service.use('/', router)

request('some uri')
  .get('/health')
  .end((err, res) => {
    // err
    // res.statusCode or res.status = 200
    // res.body = { uptime: `uptime value` }
  })
```


#### ISC License (ISC)
