var wo = [
  {
    number: 'AZ123',
    productType: '4oz Amber Glass',
    output: 20,
    startDate: '03/1/2019'
  }
]

var productTypes = [
  {
    key: 1,
    name: '4oz Amber Glass'
  },
  {
    key: 2,
    name: '12oz Oval Bottle'
  }
]

exports.getWorkOrders = function () {
  return wo
}

exports.getProductTypes = function () {
  return productTypes
}
