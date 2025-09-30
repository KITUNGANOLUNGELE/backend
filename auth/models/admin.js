const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email : String,
    mdp : String
})

module.exports = mongoose.model("AdminModel", adminSchema)
