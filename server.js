const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");

// Define middleware here
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//const db = require("./config/keys").mongoURI;
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
// Serve up static assets (usually on heroku)

//mongoose
 // .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
 // .then(() => console.log("MongoDB successfully connected"))
 // .catch((err) => console.log(err));

 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/community", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
}).then(() => console.log("MongoDB successfully connected"))
 .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

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
