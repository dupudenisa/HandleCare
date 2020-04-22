var db = require("../app/models");

const seed = {
  addUser: function() {
    db.user.create({
      username: "all",
      password: "boo"
    }).then(this.healthdb);
  },

addPatient: function() {
  
  db.patients.create({
    name: "denisa",
    currentResident: "true",
    food: "50",
    sleep: "50",
    exersize: "70",
    communication: "50"

  });

  db.patients.create({
    name: "Sue",
    currentResident: "true",
    food: "100",
    sleep: "20",
    exersize: "80",
    communication: "100"

  });

  db.patients.create({
    name: "Bill",
    currentResident: "true",
    food: "80",
    sleep: "100",
    exersize: "20",
    communication: "50"

  });


}
}

module.exports = seed