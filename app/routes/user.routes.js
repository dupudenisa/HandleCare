module.exports = app => {

    const user = require("../controllers/user.controller.js.js");

    var router = require("express").Router();

    //create a new user
    router.post("/", user.create);

    //retrieve all users
    router.get("/", user.findAll);

    router.delete("/:id", user.delete);

    //delete all  Patient
    router.delete("/", user.deleteAll);

    app.use('/api/user', router);

};