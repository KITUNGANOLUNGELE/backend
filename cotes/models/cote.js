const mongoose = require('mongoose');
const coteSchema = new mongoose.Schema({
    annee: Number,
    points: Number,
    max: Number,
    inscription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InscriptionModel"
    },
    cours: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CoursModel"
    },

})

const inscriptionSchema = new mongoose.Schema({
    etudiant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudentModel"
    }
}, { strict: false });
mongoose.model("InscriptionModel", inscriptionSchema);

const coursSchema = new mongoose.Schema({}, { strict: false });
mongoose.model("CoursModel", coursSchema);

const etudiantschema = new mongoose.Schema({}, { strict: false });
mongoose.model("StudentModel", etudiantschema);



module.exports = mongoose.model("CoteModel", coteSchema)