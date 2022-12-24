const { resolve } = require('path')

/** @description resolve path base project root */
const r = (...paths) => resolve(__dirname, ...paths)

module.exports = { r }
