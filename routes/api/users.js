const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/signup"
router.route("/")
  .post(userController.create);

/*router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);*/

module.exports = router;