var db = require("./models");

const seed = {
  addUser: function() {
    db.User.create({
      username: "all",
      password: "boo"
    }).then(this.healthdb);
  }}