const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
} = require("./user.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:id", getUser);
router.get("/", getAllUsers);

module.exports = router;
