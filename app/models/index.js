
var env = process.env.NODE_ENV || "development";
const Sequelize = require("sequelize");
var config = require("../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    process.env.MY_PASS,
    config
  );
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.patients = require("./patient.model.js")(sequelize, Sequelize);
db.comments = require("./comments.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;