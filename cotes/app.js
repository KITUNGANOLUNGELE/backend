const exspress = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = exspress()
const mongoose = require('mongoose');
const coteRouter = require('./routes/cote')

mongoose.connect('mongodb://127.0.0.1:27017',{
    dbName : "ecole"
}).then(el=>{console.log('connected to the database')})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'))

//routes

app.use('/cote', coteRouter)


module.exports = app