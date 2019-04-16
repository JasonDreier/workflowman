var Router = require('express')
var dal = require('../dal')

var router = Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('new_work_orders', { title: 'New Work Orders', productTypes: dal.getProductTypes() })
})

router.post('/', function (req, res) {
  console.log(req.body.title)
  console.log(req.body.description)
  // todo: Need to actually save the data
  res.redirect('/work_orders')
})

module.exports = router
