const express = require("express");
const {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
} = require("../controllers/video");
const { verifyToken } = require("../verifyToken");

const router = express.Router();

// router.get("/test");

// create video

router.post("/", verifyToken, addVideo);
router.put("/", verifyToken, updateVideo);
router.delete("/", verifyToken, deleteVideo);
router.get("/", verifyToken, getVideo);

module.exports = router;
