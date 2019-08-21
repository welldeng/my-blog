const markd = require('marked')

module.exports = function (source) {
    return `export default ${JSON.stringify(markd(source))}`
};