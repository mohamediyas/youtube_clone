const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.listen(8080, () => console.log("connected"));
