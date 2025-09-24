const mongoose = require('mongoose');
const coteSchema = new mongoose.Schema({
    annee : Number,
    points :  Number,
    max : Number,
    inscription: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "InscriptionModel"
    },
    cours : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "CoursModel"
    },
    
})

module.exports = mongoose.model("CoteModel", coteSchema)