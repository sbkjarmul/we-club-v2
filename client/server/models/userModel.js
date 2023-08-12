const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: [true, "Email already exists"],
      minLength: 3,
      maxLength: 200,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: 3,
      maxLength: 1024,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
