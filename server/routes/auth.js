const express = require("express");
const { signup, signin, google } = require("../controllers/auth");

const router = express.Router();

// create user

router.post("/signup", signup);

// signin
router.post("/signin", signin);

//google
router.post("/google", google);

module.exports = router;
