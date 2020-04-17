const router = require("express").Router();
const userRoutes = require("./users");

// User routes
router.use("/signup", userRoutes);

module.exports = router;