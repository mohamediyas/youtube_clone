const mongoose = require("mongoose");
const User = require("../models/User");

// signup
const signup = async (req, res) => {
  try {
    const newUser = User.create();
  } catch (err) {}
};
const signin = async (req, res) => {};
const google = async (req, res) => {};

module.exports = {
  signin,
  signup,
  google,
};
