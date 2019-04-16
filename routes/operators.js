var Router = require('express')

var router = Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('operators', { title: 'Operators' })
})

module.exports = router
