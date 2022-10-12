let mongoose = require('mongoose');

let libroSchema = new mongoose.Schema({
    titolo: String,
    autore: String
})
module.exports = mongoose.model('libro', libroSchema)