// @desc register users
// @route POST /api/users
// @access private
const registerUser = (req, res) => {
  res.json({ message: "register user" });
};

// @desc login a user
// @router POST /api/users/login
// @access private
const loginUser = (req, res) => {
  res.json({ message: "Login a user" });
};

// @ GET currently logged in user
// @route /api/users/me
// @access private
const getMe = (req, res) => {
  res.json({ message: "User data displayed" });
};

module.exports = { registerUser, loginUser, getMe };
