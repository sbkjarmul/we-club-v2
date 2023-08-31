const db = require("../../database");
const express = require("express");

const UserService = require("./user.service");
const UserController = require("./user.controller");
const UserRepository = require("./user.repository");

const userRepository = new UserRepository(db.users);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/find/:id", userController.getUser);
router.get("/", userController.getAllUsers);

module.exports = router;
