const db = require("../../database");
const asyncHandler = require("express-async-handler");
const UserService = require("./user.service");
const UserRepository = require("./user.repository");

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await this.userService.registerUser({
      name,
      email,
      password,
    });

    res.status(200).json(user);
  });

  loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await this.userService.loginUser({ email, password });

    res.status(200).json(user);
  });

  getAllUsers = asyncHandler(async (req, res) => {
    const users = await this.userService.getAllUsers();

    res.status(200).json(users);
  });

  getUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await this.userService.getUser(userId);

    res.status(200).json(user);
  });
}

console.log(db.users);

module.exports = new UserController(
  new UserService(new UserRepository(db.users))
);
