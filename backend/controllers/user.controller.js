const userModel = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(newUser);
    await newUser.save();
    res.json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

exports.getAllUser = async (req, res) => {
  const users = await userModel.find();
  res.json({ users });
};
