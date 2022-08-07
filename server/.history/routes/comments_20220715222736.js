const express = require("express");
const { addComment, deleteComment } = require("../controllers/comment");
const { verifyToken } = require("../verifyToken");

const router = express.Router();

// router.get("/test");
router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", verifyToken, getComments);

module.exports = router;
