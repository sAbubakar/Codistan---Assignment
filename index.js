const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = 3000;

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});