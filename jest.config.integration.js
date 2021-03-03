// jest.config.integration.js
var config = require('./jest.config')
config.testRegex = "integration.spec\\.js$" //Overriding testRegex option
console.log('RUNNING INTEGRATION TESTS')
module.exports = config