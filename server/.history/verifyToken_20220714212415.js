const jwt = require("jsonwebtoken");
const { createError } = require("./error");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
};

module.exports = {
  verifyToken,
};
