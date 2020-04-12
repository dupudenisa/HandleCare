module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
      id: {
        type: Sequelize.NUMBER
      },
      comments: {
          type: Sequelize.STRING
      },
      
      Userid: {
          type: Sequelize.NUMBER
      }

      });

      return Comments;
      
    };
