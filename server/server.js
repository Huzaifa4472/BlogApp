require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const ConnectDb = require("./utils/database");
const PORT = 5000;

app.use(express.json());
app.use("/api/auth", userRoute);

ConnectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server running");
  });
});
