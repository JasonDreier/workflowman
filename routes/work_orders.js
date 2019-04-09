var express = require('express');
var router = express.Router();

var wo = [
 {
     number: 'AZ123',
     product_type: '4oz Amber Glass',
     output: 20
 }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('work_orders', { title: 'Work Orders', msg: 'Good day!', work_orders = wo });
});

module.exports = router;
