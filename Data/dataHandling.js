//required dependencies
const fs = require('fs');
const path = require('path');

//set absolute path for both Parent.json and Child.json
const parentJsonPath = path.join(__dirname, 'Parent.json');
const childJsonPath = path.join(__dirname, 'Child.json');

// Read the data from the first JSON file
const rawData1 = fs.readFileSync(parentJsonPath);
const jsonData1 = JSON.parse(rawData1);
const data1 = jsonData1.data || [];

// Read the data from the second JSON file
const rawData2 = fs.readFileSync(childJsonPath);
const jsonData2 = JSON.parse(rawData2);
const data2 = jsonData2.data || [];

// Merge the data based on the parent ID and collect required vars
const mergedData = data1.map(transaction1 => {
  const matchedTransactions = data2.filter(transaction2 => transaction2.parentId === transaction1.id);
  const totalAmountPaid = matchedTransactions.reduce((sum, transaction) => sum + transaction.paidAmount, 0);
  return {
    //returning entire data from parent.json and only selective aggregate data from child.json
    ...transaction1,
    totalPaidAmount: totalAmountPaid // Update the property name to totalPaidAmount
  };
});
//merge data from both databases and collect required vars
const childMergedData = data2.map(transaction1 => {
  const matchedTransactions = data1.filter(transaction2 => transaction2.id === transaction1.parentId);
  if (matchedTransactions.length > 0) {
    const totalAmount = matchedTransactions[0].totalAmount;
    const sender = matchedTransactions[0].sender;
    const receiver = matchedTransactions[0].receiver;

    return {
      //returning entire transaction info from child.json and only required info from parent.json
      ...transaction1,
      totalAmount: totalAmount,
      sender: sender,
      receiver: receiver
    };
  }

  // If no matching transaction is found, return the original transaction1 object
  return transaction1;
});

module.exports = { mergedData, childMergedData };
