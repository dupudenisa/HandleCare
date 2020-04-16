const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const db = require("./app/models");
const routes = require("./app/routes");
const seed = require("./scripts/seed");

app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, './client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
  });
}
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