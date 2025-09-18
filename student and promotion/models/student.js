const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    nom : String,
    postnom : String,
    email : String,
    phone : String,
    promotion : {
        ref : 'PromModel',
        type : mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model("StudentModel", StudentSchema)

