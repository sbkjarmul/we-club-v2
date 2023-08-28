const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  findUser,
  getAllUsers,
} = require("./user.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:id", findUser);
router.get("/", getAllUsers);

module.exports = router;
