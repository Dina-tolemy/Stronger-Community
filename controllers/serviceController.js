const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Service.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findByID: function(req,res){

    db.Service.findById(req.params.id)
    .populate("user")
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
  }
};
