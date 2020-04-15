module.exports = app => {

    /*
        /api/patients: GET, POST, DELETE
        /api/patients/:id: GET, PUT, DELETE
        /api/patients/currentResident: GET
    */

    const patients = require("../controllers/patient.controller.js");
    
  
    var router = require("express").Router();
  
    // Create a new Patient
    router.post("/", patients.create);
  
    // Retrieve all patients
    router.get("/", patients.findAll);
  
    // Retrieve all currentResident patients
    router.get("/:currentResident", patients.findAllcurrentResident);
  
    // Retrieve a single Patient with id
    router.get("/:id", patients.findOne);
  
    // Update a Patient with id
    router.put("/:id", patients.update);
  
    // Delete a Patient with id
    router.delete("/:id", patients.delete);
  
    //delete all  Patient
    router.delete("/", patients.deleteAll);
  
    app.use('/api/patients', router);
   
  


  };

