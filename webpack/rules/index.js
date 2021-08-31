const fileRule = require("./file-rule"),
    babelRule = require("./babel-rule"),
    styleRule = require("./style-rule")

module.exports = [
    fileRule,
    babelRule,
    styleRule
]
