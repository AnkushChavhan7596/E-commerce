const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SEC_KEY, { expiresIn: "3d" });
};

// ###########################################################################
// get login
const get_login = async (req, res) => {
  res.send("Hello from the login route !!");
};

// ###########################################################################
// get login
const post_login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.json({ user: {...user,token}, token: token, msg : "Login Successful !!" });

  } catch (error) {
    res.json({ msg: error.message, error : true });
  }
};

// ###########################################################################
// get register
const get_register = async (req, res) => {
  res.send("Hello from the register route");
};

// ###########################################################################
// get register
const post_register = async (req, res) => {
  const { name, email, mobile, password, cPassword } = req.body;

  try {
    const user = await userModel.signup(
      name,
      email,
      mobile,
      password,
      cPassword
    );

    // create a token
    const token = createToken(user._id);

    res.json({
      user: user,
      token: token,
      msg: "User registered sucessfully !!",
    });
  } catch (error) {
    res.json({ msg: error.message, error: true });
  }
};

module.exports = {
  get_login,
  post_login,
  get_register,
  post_register,
};
