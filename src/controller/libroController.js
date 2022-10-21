const { Controller } = require('express-toolkit')
const { libroModel } = require('../models/libroModel.js')

const myController = new Controller({
  model: libroModel,
  name: 'libro'
})
module.exports = myController