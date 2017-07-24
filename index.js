/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = serviceHealth

function serviceHealth (router, endpoint = 'health') {
  return router().get('/' + endpoint, handler)
}

function handler (req, res) {
  res.status(200).json({ uptime: process.uptime() })
}
