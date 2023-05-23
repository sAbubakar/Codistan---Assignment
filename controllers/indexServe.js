const path = require('path')

const index = function (req, res) {
    const indexPath = path.join(__dirname, '..', 'index.html');
    res.sendFile(indexPath);
  };
module.exports = index;