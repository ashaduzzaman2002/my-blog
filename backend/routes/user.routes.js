const express = require("express");
const userModel = require("../models/User");
const { registerUser, getAllUser, loginUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", registerUser);
router.post('/login', loginUser)
router.get("/all", getAllUser);

module.exports = router;
