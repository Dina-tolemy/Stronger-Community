const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/signup"
router.route("/")
   .get(userController.findAll)
  .post(userController.create);
  
  
module.exports = router;