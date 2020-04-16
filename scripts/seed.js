var db = require("../app/models");

const seed = {
  addUser: function() {
    db.User.create({
      username: "all",
      password: "boo"
    }).then(this.healthdb);
  },

addPatient: function() {
  db.patients.create({
    name: "denisa",
    currentResident: "true",
    food: "50",
    sleep: "100",
    exersize: "70",
    communication: "50"

  });

}
}

module.exports = seed