const { validationResult } = require("express-validator");
const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(404)
        .json({ success: false, message: errors.array()[0]?.msg });
    }

    const existingUser = await userModel.findOne({ email });
    console.log(existingUser);

    if (existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User register successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Email not registered" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credential" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRECT);

    res
      .status(200)
      .json({ success: true, message: "Login successfull", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = req.user

    res.json({message: 'Details fetched', success: true, user})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

exports.getAllUser = async (req, res) => {
  const users = await userModel.find();
  res.json({ users });
};
