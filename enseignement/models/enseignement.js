const mongoose = require('mongoose');
const enseigneSchema = new mongoose.Schema({
    designation : String,
    cours : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "CoursModel"
    },
    enseignant : {
          type : mongoose.Schema.Types.ObjectId,
        ref : "EnseignantModel"
    }
    
})

module.exports = mongoose.model("EnseignementModel", enseigneSchema)