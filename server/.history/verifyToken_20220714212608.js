const jwt = require("jsonwebtoken");
const { createError } = require("./error");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Token are not valid"));
    }

    req.user = user;
  });
};

module.exports = {
  verifyToken,
};
