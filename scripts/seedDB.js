const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/community"
);

const usersSeed=[{

    name:"dina",
    email:"dina@gmail.com",
    suburb:"chatswood",
    phone:"23456778",
    password:"dina123",
    userType:"vul"

},{
    name:"lina",
    email:"lina@gmail.com",
    suburb:"cbd",
    phone:"26778",
    password:"lina123",
    userType:"vul"

},{
    name:"tina",
    email:"tina@gmail.com",
    suburb:"chatswood",
    phone:"254556778",
    password:"lina123",
    userType:"helper"

}

];
db.User.remove({})
.then(() => db.User.collection.insertMany(usersSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
