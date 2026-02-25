const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');
const authController = require('../controllers/authController');
const auth = require("../middlewares/auth")
const createJWT = require("../helpers/createJWT");

// http://localhost:3000/api/routes/getAllReportes
// GET
router.get("/getAllReports", auth, reporteController.getReportes);

// POST
router.post("/createReports", auth, reporteController.createReportes);

router.post("/login", authController.login);

module.exports = router;