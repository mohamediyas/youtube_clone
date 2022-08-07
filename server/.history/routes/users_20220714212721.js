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

router.put("/sub/:id", subscribe);

// unsuscribe

router.put("/unsub/:id", unsubscribe);

// like

router.put("/like/:videoId", like);

//unlike

router.put("/dislike/:videoId", dislike);

module.exports = router;
