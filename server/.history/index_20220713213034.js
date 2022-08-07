const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

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

app.listen(8080, () => console.log("connected"));
