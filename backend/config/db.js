const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
