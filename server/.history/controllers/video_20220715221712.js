const User = require("../models/User");
const Video = require("../models/Video");

const addVideo = async (req, res, next) => {
  try {
    const newVideo = await Video.create({
      userId: req.user.id,
      ...req.body,
    });

    res.status(200).json(newVideo);
  } catch (error) {
    next(error);
  }
};
const updateVideo = async (req, res, next) => {
  try {
    const newVideo = await Video.findById(req.params.id);

    if (!newVideo) {
      return next(createError(404, "video not found"));
    }

    if (req.user.id == newVideo.userId) {
      const updateVideo = await Video.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json(updateVideo);
    } else {
      return next(createError(403, "You can update only your video"));
    }
  } catch (error) {
    next(error);
  }
};
const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);

    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};
const deleteVideo = async (req, res, next) => {
  try {
    const newVideo = await Video.findById(req.params.id);

    if (!newVideo) {
      return next(createError(404, "video not found"));
    }

    if (req.user.id == newVideo.userId) {
      await Video.findOneAndDelete(req.params.id);

      res.status(200).json("video deleted");
    } else {
      return next(createError(403, "You can delete only your video"));
    }
  } catch (error) {
    next(error);
  }
};

const addViews = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: {
        views: 1,
      },
    });

    res.status(200).json("The views has been added");
  } catch (error) {
    next(error);
  }
};

const random = async (req, res, next) => {
  try {
    const video = await Video.aggregate([
      {
        $sample: {
          size: 40,
        },
      },
    ]);

    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

const trent = async (req, res, next) => {
  try {
    const video = await Video.find().sort({ views: -1 });

    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

const subs = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    const subscribedChannel = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannel.map((chennalId) => {
        return Video.find({
          userId: chennalId,
        });
      })
    );

    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (error) {
    next(error);
  }
};

const tags = async (req, res, next) => {
  try {
    const tags = req.query.tags.split(",");

    const video = await Video.find({
      tags: {
        $in: tags,
      },
    }).limit(20);

    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

const search = async (req, res, next) => {
  try {
    const query = req.query.tags;

    const video = await Video.find({
      title: {
        $regex: query,
        $option: "i",
      },
    }).limit(40);

    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addViews,
  subs,
  random,
  trent,
  tags,
  search,
};
