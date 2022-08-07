const express = require("express");
const {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  trent,
  addViews,
  random,
  subs,
} = require("../controllers/video");
const { verifyToken } = require("../verifyToken");

const router = express.Router();

// router.get("/test");

// create video

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addViews);
router.get("/trent", trent);
router.get("/random", random);
router.get("/sub", subs);

module.exports = router;
