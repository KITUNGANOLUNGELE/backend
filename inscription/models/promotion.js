const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    designation : String,
})

module.exports = mongoose.model("PromModel", promotionSchema)