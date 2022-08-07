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
