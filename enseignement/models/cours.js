const mongoose = require('mongoose');
const coursSchema = new mongoose.Schema({
    designation : String,
    promotion : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PromModel"
    },
    
})

module.exports = mongoose.model("CoursModel", coursSchema)