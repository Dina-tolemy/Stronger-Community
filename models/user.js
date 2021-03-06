const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  suburb: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  password: { type: String, required: true },
  password2:{type:String},
  userType: { type: String },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service"
    }
  ],
  msgs:[
    {
      type: Schema.Types.ObjectId,
      ref: "Msg"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
