// Create web server

var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.send('Comments home page');
});

// GET comments page.
router.get('/list', function(req, res) {
  res.send('Comments list page');
});

module.exports = router;