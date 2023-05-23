const dataHandling = require('../Data/dataHandling');


const childData = function (req, res) {
    const parentId = parseInt(req.params.parentId);
    // Filter the child Merged data to get the corresponding children data based on parentId
    const childrenData = dataHandling.childMergedData.filter(transaction => transaction.parentId === parentId);
  
    // Sort the children data by ID
    childrenData.sort((a, b) => a.id - b.id);
  
    res.json(childrenData);
  };
module.exports = childData;
