var Users = require("../models/user");
const router = require("express").Router();

router.post("/api/users", ({body}, res) => {
    Users.create(body)
      .then(dbuser => {
        res.json(dbuser);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  module.exports = router;
  