const mongoose = require('mongoose');
const EtudiantSchema = new mongoose.Schema({
    
}, {strict: false})

module.exports = mongoose.model("StudentModel", EtudiantSchema)