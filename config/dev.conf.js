'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.conf')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})