const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    nom : String,
    postnom : String,
    email : String,
    phone : String,
    mdp : String,
})

module.exports = mongoose.model("EnseignantModel", StudentSchema)

