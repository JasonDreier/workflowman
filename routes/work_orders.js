var Router = require('express')
var dal = require('../dal')

var router = Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('work_orders', { title: 'Work Orders', workOrders: dal.getWorkOrders() })
})

module.exports = router
