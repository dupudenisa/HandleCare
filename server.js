const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const db = require("./app/models");
const routes = require("./app/routes");
const seed = require("./scripts/seed");
const session = require("express-session");
const passport = require("passport");
const cookiePerser = require("cookie-parser");

app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: true })
);

app.use(cookiePerser());
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

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