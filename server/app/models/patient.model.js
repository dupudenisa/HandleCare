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
      }
    });
  
    return Patient;
  };