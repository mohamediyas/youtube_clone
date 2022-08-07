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
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", getVideo);
router.get("/trent", getVideo);
router.get("/random", getVideo);

module.exports = router;
