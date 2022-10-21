let mongoose = require('mongoose');
const Schema = mongoose.Schema

let libroSchema = new Schema({
    titolo: String,
    autore: String
})
const libroModel = mongoose.model('Libro', libroSchema, 'libri')
module.exports = { libroSchema, libroModel }
/* module.exports = mongoose.model('libro', libroSchema) */