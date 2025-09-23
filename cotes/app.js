const exspress = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = exspress()
const mongoose = require('mongoose');
const coteRouter = require('./routes/cote')
const cors = require('cors');


mongoose.connect('mongodb://host.docker.internal:27017/ecole',{
    dbName : "ecole"
}).then(el=>{console.log('connected to the database')})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'))

//routes

const corsOptions = {
  origin: ["http://localhost:9000"], // Autoriser seulement ces domaines
  methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
  allowedHeaders: ["Content-Type", "Authorization"], // Headers autorisés
  credentials: true // Autoriser l'envoi de cookies
};

app.use(cors(corsOptions));

app.use((req,resp,next)=>{
    if(req.method == "OPTIONS"){
        return resp.status(200).end()
    }
    next();
})

app.use('/cote', coteRouter)


module.exports = app