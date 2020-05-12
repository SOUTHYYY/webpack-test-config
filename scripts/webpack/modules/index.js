const {loadDevCss, loadProdCss} = require('./css')

exports.loadDevCss = loadDevCss
exports.loadProdCss = loadProdCss
exports.loadJavaScript = require('./javascript')
exports.loadImages = require('./images')
exports.loadSvg = require('./svg')
exports.loadFonts = require('./fonts')
exports.setupHtml =  require('./assets')
