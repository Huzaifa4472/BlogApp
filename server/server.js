require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const ConnectDb = require("./utils/database");
const PORT = 5000;

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

ConnectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server running");
  });
});
