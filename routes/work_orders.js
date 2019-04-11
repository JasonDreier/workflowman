var Router = require('express')
var getWorkOrders = require('../dal')

var router = Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('work_orders', { title: 'Work Orders', msg: 'Good day!', workOrders: getWorkOrders() })
})

module.exports = router
