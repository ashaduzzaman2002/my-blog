const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db");
const mongoose = require("mongoose");
const userModel = require("./models/User");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/users/create", async (req, res) => {
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
});

app.get("/users/all", async (req, res) => {
  const users = await userModel.find();
  res.json({ users });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

dbConnection();
app.listen(port, () => console.log(`Server is runnig on port ${port}`));
