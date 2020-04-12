module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {

      comments: {
          type: Sequelize.STRING
      },
      
      Userid: {
          type: Sequelize.INTEGER
      }

      });

      return Comments;
      
    };
