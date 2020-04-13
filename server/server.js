const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and Resync DB");
}) ;

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Health application." });
});

require("./app/routes/patient.routes")(app);
require("./app/routes/comments.routes")(app);
require("./app/routes/user.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});