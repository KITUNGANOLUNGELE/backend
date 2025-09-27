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

const inscriptionSchema = new mongoose.Schema({}, { strict: false });
mongoose.model("InscriptionModel", inscriptionSchema);

const coursSchema = new mongoose.Schema({}, { strict: false });
mongoose.model("ICoursModel", coursSchema);


module.exports = mongoose.model("CoteModel", coteSchema)