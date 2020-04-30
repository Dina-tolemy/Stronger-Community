const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/signup");

//post route for the vul to submit a service
router.route("/submitservice/:id").post((req, res) => {
  const userId = req.params.id;
  db.Service.create(req.body)
    .then(({ _id }) =>
      db.User.findOneAndUpdate(
        { _id: userId },
        { $push: { services: _id } },
        { new: true }
      )
    )
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

//put route for the helper to check true to a serivce he is welling to do ..
router.route("/checkservice").put((req, res) => {
  //const serviceId = req.params.id;
  const serviceId = req.body._id;
  db.Service.findOneAndUpdate(
    { _id: serviceId },
    { $set: { isChecked: true } },
    { new: true }
  )
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});
//get route for the vull to see all of the services he asked for
router.route("/getMyServices/:id").get((req, res) => {
  db.User.find({ _id: req.params.id })
    .populate("services")
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});
//delete his own service after it's been checked to true
router.route("/deleteservice").delete((req, res) => {
  const serviceId = req.body.id;
  db.Service.find({ _id: serviceId })
    .populate("user")
    .then((dbModel) => dbModel.remove())
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});
//get route to search for users in one suburb
router.route("/search/suburbsearch").get((req, res) => {
  
  const userSuburb = req.body.suburb;
  console.log(req.query);
  db.User.find({suburb: userSuburb})
    .populate("services")
    .then((dbUser) => res.json(dbUser))
  //  .then(console.log(res))
    .catch((err) => console.log(err));
});

//get route to get all the vull with their required services
router.route("/Helper").get((req, res) => {
  db.User.find({ userType: "getHelp" })
    .populate("services")
    .then((dbUser) => {
      res.json(dbUser);
    })
    .then(console.log(res))
    .catch((err) => {
      res.json(err);
    });
});

router.route("/getvul").get(userController.finaAllVul);
router.route("/:id").get(userController.findById);

//sign up route
router.route("/signup").post((req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  db.User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return alert("This Email already exists, try another one");
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
            expiresIn: 31536000, // year in seconds
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
