const path = require('path')

module.exports = (dir) => {
    return path.join(path.dirname(require.main.filename), ...dir)
}