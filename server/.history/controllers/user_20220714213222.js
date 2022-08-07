const User = require("../models/User");

const updateUser = async (req, res, next) => {
  try {
    if (req.params.id === req.user.id) {
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.status(200).send(updateUser);
    } else {
      return next(403, "You can update only your account");
    }
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {};
const getUser = async (req, res, next) => {};
const subscribe = async (req, res, next) => {};
const unsubscribe = async (req, res, next) => {};
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
