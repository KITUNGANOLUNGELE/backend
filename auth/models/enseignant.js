const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
}, {strict: false})

module.exports = mongoose.model("EnseignantModel", StudentSchema)

