const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { use } = require("express/lib/router");

// @desc register users
// @route POST /api/users
// @access private
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // check all fields are filled
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // check if user was created successfully
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc login a user
// @router POST /api/users/login
// @access private
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login a user" });
});

// @ GET currently logged in user
// @route /api/users/me
// @access private
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data displayed" });
});

module.exports = { registerUser, loginUser, getMe };
