const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const commentRoutes = require("./routes/comments");
const videoRoutes = require("./routes/videos");

const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      throw err;
    });
};

app.use("/api/users", userRoutes);

app.listen(8080, () => {
  connect();
  console.log("connected to server");
});
