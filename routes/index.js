//required dependencies
const express = require('express');
const index = require('../controllers/indexServe');
const childServe = require('../controllers/childServe');
const parentData = require('../controllers/parentData');
const childData = require('../controllers/childData');
const router = express.Router();

// API endpoint for serving main HTML
router.get('/', index);
//API endpoint for serving data obtained from Childs
router.get('/child/:ParentID', childServe);
// API endpoint for fetching paginated and sorted parent data
router.get('/api/transactions', parentData);
// API endpoint for fetching sorted child data
router.get('/api/transactions/:parentId/children', childData);

module.exports = router;