const mongoose = require('mongoose');
const coursSchema = new mongoose.Schema({
    designation : String,
    promotion : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PromModel"
    },
    
})

const promSchema = new mongoose.Schema({}, { strict: false });
mongoose.model("PromModel", promSchema);

module.exports = mongoose.model("CoursModel", coursSchema)