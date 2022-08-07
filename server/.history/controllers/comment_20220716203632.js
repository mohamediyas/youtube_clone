const { createError } = require("../error");
const Comment = require("../models/Comment");
const Video = require("../models/Video");

const addComment = async (req, res, next) => {
  try {
    const savedComment = await Comment.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);

    const video = await Video.findById(req.params.id);

    if (req.user.id == comment.userId || req.user.id == video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("The comment has been deleted");

    }else{
        next(createError(403,"You can delete any your comment!")
    }
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
