const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const commentRoutes = require("./routes/comments");
const videoRoutes = require("./routes/videos");
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");

const app = express();

// middleware

app.use(express.json());
app.use(cookieParser());

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

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  return res.status(status).json({
    success: false,
    status: status,
    message,
  });
});

app.listen(8080, () => {
  connect();
  console.log("connected to server");
});
