const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 

const API_KEY =process.env.REACT_APP_Mail_API_KEY;

sgMail.setApiKey(API_KEY);

app.use(cors()); 

// Define middleware here
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/community", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
}).then(() => console.log("MongoDB successfully connected"))
 .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

app.get('/send-email', (req,res) => {
    
  //Get Variables from query string in the search bar
  const { recipient, sender, topic, text } = req.query; 

  //Sendgrid Data Requirements
  const msg = {
      to: recipient, 
      from: sender,
      subject: topic,
      text: text,
  }

  //Send Email
  sgMail.send(msg)
  .then((msg) => console.log(text));
});

// Passport config
require("./config/passport")(passport);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB

app.use(routes);


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
