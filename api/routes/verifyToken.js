const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        console.error("Token verification error:", err); // Log error
        return res.status(403).json("Token is not valid!");
      }
      console.log("Decoded user:", user); // Log decoded user info
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log("User in verifyTokenAndAdmin:", req.user); // Log user info
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!"); // Corrected message
    }
  });
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log("User in verifyTokenAndAuthorization:", req.user); // Log user info
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!"); // Corrected message
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
