const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

const router = express.Router();

//POST ->login for user
router.post("/login", loginController);

//POST ->register for user
router.post("/register", registerController);
module.exports = router;
