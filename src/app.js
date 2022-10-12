let mongoose = require('mongoose');
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let libroRoute = require('./routes/libro');
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(libroRoute)


mongoose.connect('mongodb+srv://diggiDB:diggiDB@cluster0.u9nepyx.mongodb.net/?retryWrites=true&w=majority',function(err){
    if(err){
        console.error('Can not connect:', err)
    }
    else{
        app.listen(3000, () => {
            console.log('Connected')
        })
    }
})