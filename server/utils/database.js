const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
    console.log("connection failed");
    process.exit(0);
  }
};
module.exports = connectDb;
