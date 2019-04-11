var express = require('express');
var dal = require('../dal');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('work_orders', { title: 'Work Orders', msg: 'Good day!', workOrders: dal.getWorkOrders() });
});

module.exports = router;
