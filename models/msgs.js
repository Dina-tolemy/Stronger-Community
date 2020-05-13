const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    
    body: String,

});

const Msg = mongoose.model("Msg", msgSchema);

module.exports = Msg;