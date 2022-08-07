const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { createError } = require("../error");

// signup
const signup = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = await User.create({
      ...req.body,
      password: hash,
    });

    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

// signin
const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });

    if (!user) {
      return next(createError(404, "user not found"));
    }

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) {
      return next(createError(400, "Please enter valid password"));
    }
  } catch (err) {
    next(err);
  }
};
const google = async (req, res) => {};
s;

module.exports = {
  signin,
  signup,
  google,
};
