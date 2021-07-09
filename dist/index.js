
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bsctestswap-2-sdk-v2.cjs.production.min.js')
} else {
  module.exports = require('./bsctestswap-2-sdk-v2.cjs.development.js')
}
