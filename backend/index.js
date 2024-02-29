const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db");
const cors = require("cors");

const userRouter = require("./routes/user.routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRouter);

app.get("/", (req, res) => res.send("Hello"));

dbConnection();
app.listen(port, () => console.log(`Server is runnig on port ${port}`));
