// jest.config.integration.js
var config = require('./jest.config')
config.testRegex = "unit.spec\\.js$" //Overriding testRegex option
console.log('RUNNING UNIT TESTS')
module.exports = config