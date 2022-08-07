const mongoose = require("mongoose");
const User = require("../models/User");

// signup
const signup = async (req, res) => {
  console.log(req.body);

  //   try {
  //     const newUser = User.create(req.body);
  //   } catch (err) {}
};
const signin = async (req, res) => {};
const google = async (req, res) => {};

module.exports = {
  signin,
  signup,
  google,
};
