const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db");
const userModel = require("./models/User");

const userRouter = require("./routes/user.routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

dbConnection();
app.listen(port, () => console.log(`Server is runnig on port ${port}`));
