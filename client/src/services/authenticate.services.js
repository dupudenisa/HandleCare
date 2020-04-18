const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");



router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
    res.json({
      user: req.user,
      loggedIn: true
    });
  });
  
  
  router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
    res.json("User logged out successfully");
  });