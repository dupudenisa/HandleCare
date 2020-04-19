
var passport = require("../../config/passport")

const user = require("../../controllers/user.controller.js");

var router = require("express").Router();


router.route("/signup")
    .post(user.create)

router.route("/signin")
    .post(passport.authenticate("local"), user.signIn)

router.route("/logout")
    .post(user.logout)

router.route("/")
    .get(user.findAll)

module.exports = router;
