const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const db = require("./app/models");
const routes = require("./app/routes");

var seed = require("./scripts/seed");

app.use(cors());


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// require("./app/routes/patient.routes")(app);
// require("./app/routes/comments.routes")(app);
// require("./app/routes/user.routes")(app);


// set port, listen for requests

app.use(routes);
//require("./app/routes/patient.routes")(app);

db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and Resync DB");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}) ;

function runSeeds() {
  seed.addPatient();
}
function seedTime() {
  setTimeout(runSeeds, 3000);
}
seedTime();