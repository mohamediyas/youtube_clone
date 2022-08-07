const express = require("express");

const router = express.Router();

// create user

router.post("/signup");

// signin
router.post("/signin");

//google
router.post("/google");

module.exports = router;
