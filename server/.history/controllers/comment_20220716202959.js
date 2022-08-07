const Comment = require("../models/Comment");

const addComment = async (req, res, next) => {
  try {
    const savedComment = await Comment.create({
      ...req.body,
      userId: req.user.id,
    });
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const getComments = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addComment,
  getComments,
  deleteComment,
};
