module.exports = function (sequelize, Sequelize) {
    const User = sequelize.define("User", {

        name: {
            type: Sequelize.STRING,
        },

        username: {
            type: Sequelize.STRING,
           
        },

        password: {
            type: Sequelize.STRING,
            
        }

    });

        return User;

};

   
