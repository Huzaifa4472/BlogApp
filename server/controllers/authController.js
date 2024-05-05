const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const home = (req, res) => {
  try {
    res.status(200).json("Hello");
  } catch (error) {}
};
const login = async (req, res) => {
  try {
    const { password, username, ...others } = req.body;
    const user = await User.findOne({ username });
    !user && res.status(400).json("Invalid username");
    const validatePass = await bcrypt.compare(password, user.password);
    !validatePass && res.status(400).json("Invalid password");

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);

    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const saltAround = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, saltAround);

    const newUser = await User.create({ username, email, password: hashPass });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
module.exports = { home, register, login };
