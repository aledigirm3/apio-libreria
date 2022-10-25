const { Controller } = require('express-toolkit')
const { libroModel } = require('../models/libroModel.js')

const myController = new Controller({
  model: libroModel,
  name: 'libro'
})
myController.registerHook('pre:find', (req, res, next) => {
        req.query.titolo = new RegExp(req.query.titolo, 'i')
  next()
}) 
module.exports = myController