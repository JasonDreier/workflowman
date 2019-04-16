var Router = require('express')

var router = Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('history_work_orders', { title: 'History Work Orders' })
})

module.exports = router
