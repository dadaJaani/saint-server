var express = require('express');
var router = express.Router();

// Get the index page
router.get('/', function(req, res, next) {
  res.send("Saint server is running");
});



module.exports = router;
