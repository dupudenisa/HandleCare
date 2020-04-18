/*
    /api/patients: GET, POST, DELETE
    /api/patients/:id: GET, PUT, DELETE
    /api/patients/currentResident: GET
*/

const patients = require("../../controllers/patient.controller.js");
const router = require("express").Router();

// Matches with "/api/patients"
router.route("/")
    .get(patients.findAll)
    .post(patients.create);

// Matches with "/api/patients/:id"
router
    .route("/:id")
    .get(patients.findOne)
    .put(patients.update)
    .delete(patients.delete);

router
    .route("/:name")
    .get(patients.findByName)

module.exports = router;