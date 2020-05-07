const {resolve} = require('path');
const {path: PROJECT_ROOT} = require('app-root-path');

console.log(PROJECT_ROOT)

exports.PROJECT_ROOT = PROJECT_ROOT
exports.SOURSE_DIRECTORY = resolve(PROJECT_ROOT, './src')
exports.BUILD_DIRECTORY = resolve(PROJECT_ROOT, './dist');
exports.HOST = 'localhost';
exports.PORT = 3000;