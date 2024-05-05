const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const userUpdate = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    console.log("User is not authorized to make changes");
    res.status(401).json({ message: "You can update only your account" });
  }
};
const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted");
      } catch (error) {
        res.status(500).json("User canot be deleted");
      }
    } catch (error) {
      res.status(404).json("User not found");
    }
  } else {
    console.log("User is not authorized to make changes");
    res.status(401).json({ message: "You can update only your account" });
  }
};

module.exports = { userUpdate, deleteUser };
