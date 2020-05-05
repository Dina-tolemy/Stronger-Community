const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))

      .catch((err) => res.status(422).json(err));
  },
  finaAllVul: function (req, res) {
    db.User.find({ userType: "getHelp" })
      .then((dbmodel) => res.json(dbmodel))
      .catch((err) => res.status(422).json(err));
  },
};
