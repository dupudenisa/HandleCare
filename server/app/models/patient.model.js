module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      currentResident: {
        type: Sequelize.BOOLEAN
      },
      
      food: {
        type: Sequelize.STRING
      },
      sleep_cycle: {
        type: Sequelize.STRING
      },
      exersize: {
        type: Sequelize.STRING
      },
      communication: {
        type: Sequelize.STRING
      },
      outdoor_events: {
        type: Sequelize.STRING
      },
      patientinfo_id: {
        type: Sequelize.INTEGER
      }

    });
  
    return Patient;
  };