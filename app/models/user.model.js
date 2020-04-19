var bcrypt = require("bcryptjs");

module.exports = function (sequelize, Sequelize) {
  const User = sequelize.define("User", {

    username: {
      type: Sequelize.STRING,
      description: Sequelize.TEXT,
      allowNull: false

    },

    password: {
      type: Sequelize.STRING,
      description: Sequelize.TEXT,
      allowNull: false

    }

  });

  User.prototype.validPassword = function (pass) {
    return bcrypt.compareSync(pass, this.password);
  };

  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = function (models) {
    User.hasMany(models.comments, { onDelete: "cascade" });
    User.hasMany(models.patient, { onDelete: "cascade" });
  };

  return User;

};


