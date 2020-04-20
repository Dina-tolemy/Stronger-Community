const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");
//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const validateLoginInput = require("../../validation/login");

// Matches with "/api/signup"
router.route("/")
   .get(userController.findAll)
  .post(userController.create);
  
  
  router.route("/login")
  .post((req, res) => {
    // Form validation
  
    const { errors, isValid } = validateLoginInput(req.body);
  
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    // Find user by email
   db.User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  
      // Check password
     // (password, user.password).then(isMatch => {
       // if (isMatch) {
          if(password===user.password){
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
                userType:user.userType,
                id:user.id
              });
            }
          );
        }
         else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
    });
  });
module.exports = router;