var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WorkFlowMan', msg: 'Good day!' });
});

module.exports = router;
