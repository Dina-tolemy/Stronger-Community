const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: String,
    details: String,
    isChecked:{type:Boolean,default:false}

});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
