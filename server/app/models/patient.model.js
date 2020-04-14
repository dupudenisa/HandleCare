module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
      name: {
        type: Sequelize.STRING,
        description: Sequelize.TEXT,
          allowNull: true
      },
      currentResident: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      
      food: {
        type: Sequelize.STRING,
        description: Sequelize.TEXT,
          allowNull: true
      },
      sleep: {
        type: Sequelize.STRING,
        description: Sequelize.TEXT,
          allowNull: true
      },
      exersize: {
        type: Sequelize.STRING,
        description: Sequelize.TEXT,
          allowNull: true
      },
      communication: {
        type: Sequelize.STRING,
        description: Sequelize.TEXT,
          allowNull: true
      },
      patientinfo_id: {
        type: Sequelize.INTEGER,
        description: Sequelize.TEXT,
          allowNull: true
      }

    });
  
    return Patient;
  };