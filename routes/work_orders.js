var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('work_orders', { title: 'Work Orders', msg: 'Good day!' });
});

module.exports = router;
