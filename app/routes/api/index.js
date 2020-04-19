const router = require("express").Router();
const patientRoutes = require("./patient.routes");
const userRoutes = require("./user.routes")

// Book routes
router.use("/patients", patientRoutes);
router.use("/user", userRoutes);

module.exports = router;
