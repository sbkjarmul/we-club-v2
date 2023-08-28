// const User = require("../models/userModel");
// const { UserTable } = require("../../database/mongo/tables");
const db = require("../../database");

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { sleep } = require("../../utils");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const checkPassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // let isUserRegistered = await User.findOne({ email });
  let isUserRegistered = await db.users.findOne({ email });
  console.log(isUserRegistered);
  if (isUserRegistered) {
    res.status(400).json({ message: "User already exists" });
    throw new Error("User already exists");
  }

  if (!name || !email || !password) {
    res.status(400).json({ message: "Please fill all fields" });
    throw new Error("Please fill all fields");
  }

  if (!validator.isEmail(email)) {
    res.status(400).json({ message: "Please enter a valid email" });
    throw new Error("Please enter a valid email");
  }

  if (!validator.isStrongPassword(password)) {
    res.status(400).json({ message: "Please enter a strong password" });
    throw new Error("Please enter a strong password");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await db.users.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Please fill all fields" });
    throw new Error("Please fill all fields");
  }

  const user = await db.users.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "Invalid email or password" });
    throw new Error("Invalid email or password");
  }

  const isValidPassword = await checkPassword(password, user.password);

  if (!isValidPassword) {
    res.status(400).json({ message: "Invalid password" });
    throw new Error("Invalid password");
  }

  await sleep(2000);

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: createToken(user._id),
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await db.users.findMany({}).select("-password");
  res.status(200).json(users);
});

const findUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await UserTable.findById(userId);

  if (!user) {
    res.status(404).json({ message: "User not found" });
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

module.exports = { registerUser, loginUser, getAllUsers, findUser };
