var Router = require('express')

var router = Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('products', { title: 'Product Types' })
})

module.exports = router
