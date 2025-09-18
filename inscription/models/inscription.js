const mongoose = require('mongoose');

const InscriptionSchema = new mongoose.Schema({
    annee : Number,
    etudiant : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "StudentModel"
    },
    promotion : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PromModel"
    }
})

module.exports = mongoose.model("InscriptionModel", InscriptionSchema)

