const { createError } = require("../error");
const User = require("../models/User");

const updateUser = async (req, res, next) => {
  if (req.params.id == req.user.id) {
    console.log(req.params.id, req.user.id);
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.status(200).send(updateUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can update only your account"));
  }
};
const deleteUser = async (req, res, next) => {
  if (req.params.id == req.user.id) {
    console.log(req.params.id, req.user.id);
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).send("User deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can delete only your account"));
  }
};
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
  s;
};
const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: {
        subscribedUsers: req.params.id,
      },
    });

    await User.findByIdAndUpdate(
      req.params.id,
      {
        $inc: {
          subscribers: 1,
        },
      },
      { new: true }
    );

    res.status(200).json("Subscribtion success");
  } catch (error) {
    next(error);
  }
};
const unsubscribe = async (req, res, next) => {
  try {
    await User.findById(req.user.id, {
      $pull: {
        subscribedUsers: req.params.id,
      },
    });

    await User.findByIdAndUpdate(
      req.params.id,
      {
        $inc: {
          subscribers: -1,
        },
      },
      { new: true }
    );

    res.status(200).json("UnSubscribtion success");
  } catch (error) {
    next(error);
  }
};
const like = async (req, res, next) => {};
const dislike = async (req, res, next) => {};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  unsubscribe,
  like,
  dislike,
  subscribe,
};
