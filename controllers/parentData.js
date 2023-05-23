const dataHandling = require('../Data/dataHandling');

const parentData = function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 1;
  
    // Sorting logic
    const sortedData = dataHandling.mergedData.sort((a, b) => a.id - b.id);
  
    const totalItems = sortedData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageTransactions = sortedData.slice(startIndex, endIndex);
    //storing response template
    const response = {
      page,
      pageSize,
      totalItems,
      totalPages,
      transactions: pageTransactions,
    };
    //sending JSON response
    res.json(response);
  };
module.exports=parentData;