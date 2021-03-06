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
      token: generateToken(user._id),
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
  // fetch email and password from the login form
  const { email, password } = req.body;
  // console.log(req.body);
  // check for user email from DB
  const user = await User.findOne({ email });
  // check for valid user and (password with hashed password)
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @ GET currently logged in user
// @route /api/users/me
// @access private
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 30,
  });
};

module.exports = { registerUser, loginUser, getMe };
