const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  unsubscribe,
  like,
  dislike,
  subscribe,
} = require("../controllers/user");
const { verifyToken } = require("../verifyToken");

const router = express.Router();

// router.get("/test");

// update user

router.put("/:id", verifyToken, updateUser);

// delete

router.delete("/:id", verifyToken, deleteUser);

// getuser
router.get("/find/:id", getUser);

// /subscribe

router.put("/sub/:id", verifyToken, subscribe);

// unsuscribe

router.put("/unsub/:id", verifyToken, unsubscribe);

// like

router.put("/like/:videoId", verifyToken, like);

//unlike

router.put("/dislike/:videoId", verifyToken, dislike);

module.exports = router;
