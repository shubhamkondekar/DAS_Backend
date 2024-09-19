const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", authMiddleware, authController);
module.exports = router;
