module.exports = (sequelize, DataTypes) => {
  
    const Comments = sequelize.define("comments", {

      comments: {
          type: DataTypes.STRING,
          description: DataTypes.TEXT,
          allowNull: false
      },
      
      Userid: {
          type: DataTypes.INTEGER
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
