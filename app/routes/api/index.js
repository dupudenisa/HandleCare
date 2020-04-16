const router = require("express").Router();
const patientRoutes = require("./patient.routes");

// Book routes
router.use("/patients", patientRoutes);

module.exports = router;
