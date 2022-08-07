const Video = require("../models/Video");

const addVideo = async (req, res, next) => {
  try {
    const newVideo = await Video.create({
      userId: req.user.id,
      ...req.body,
    });
  } catch (error) {}
};
const updateVideo = async (req, res, next) => {};
const getVideo = async (req, res, next) => {};
const deleteVideo = async (req, res, next) => {};

module.exports = {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
};
