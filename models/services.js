const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: String,
    body: String

});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
