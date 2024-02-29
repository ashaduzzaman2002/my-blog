const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];

    if (!token) return res.status(404).json({ message: "Token not found" });

    const decoded = await jwt.verify(token, process.env.JWT_SECRECT);
    console.log(decoded);

    if (!decoded) return res.status(404).json({ message: "Unauthorized" });

    const user = await userModel.findById(decoded?.userId).select("-password");

    if (!user) return res.status(404).json({ message: "Unauthorized" });

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

module.exports = authMiddleware;
