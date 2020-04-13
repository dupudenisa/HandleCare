module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define("patient", {
      name: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
          allowNull: true
      },
      age: {
        type: DataTypes.STRING
      },
      currentResident: {
        type: DataTypes.BOOLEAN
      },
      
      food: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
          allowNull: true
      },
      sleep_cycle: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
          allowNull: true
      },
      exersize: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
          allowNull: true
      },
      communication: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
          allowNull: true
      },
      outdoor_events: {
        type: DataTypes.STRING,
        description: DataTypes.TEXT,
          allowNull: true
      },
      patientinfo_id: {
        type: DataTypes.INTEGER,
        description: DataTypes.TEXT,
          allowNull: true
      }

    });
  
    return Patient;
  };