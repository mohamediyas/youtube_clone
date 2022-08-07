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
const signin = async (req, res,next) => {
  //   const salt = bcrypt.genSaltSync(10);
  //   const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const user = await User.findOne({ name: req.body.name });

    console.log(user);

    if (!user) {
      return next(createError(404, "user not found"))s;
    }
    // const newUser = await User.create({
    //   ...req.body,
    //   password: hash,
    // });

    // res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};
const google = async (req, res) => {};

module.exports = {
  signin,
  signup,
  google,
};
