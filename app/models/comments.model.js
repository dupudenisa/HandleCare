module.exports = (sequelize, Sequelize) => {
  
    const Comments = sequelize.define("comments", {

      comments: {
          type: Sequelize.STRING,
          description: Sequelize.TEXT,
          allowNull: false
      },
      
      Userid: {
          type: Sequelize.INTEGER
      }

      });

      Comments.associate = function(models) {
        Comment.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };

      return Comments;
      
    };
