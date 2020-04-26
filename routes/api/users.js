const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/signup");

router.route("/submitservice").post( (req, res) => {

  const userId = params;
  db.Service.create(body)
    .then(({ _id }) => db.User.findOneAndUpdate({_id:userId}, { $push: { services: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router
.route("/getvul")
.get(userController.finaAllVul);
router
  .route("/:id")
  .get(userController.findById);
  
router.route("/signup").post((req, res) => {
    // Form validation

    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    db.User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new db.User({
          name: req.body.name,
          email: req.body.email,
          suburb: req.body.suburb,
          phone: req.body.phone,
          password: req.body.password,
          userType: req.body.userType,
        });

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          });
        });
      }
    });
  });

router.route("/login").post((req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  db.User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 900, // 15 minutes in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              userType: user.userType,
              id: user.id,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});
module.exports = router;
