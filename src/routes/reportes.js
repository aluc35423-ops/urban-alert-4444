const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

// http://localhost:3000/api/routes/getAllReportes
// GET
routes.get("/getAllReports", reporteController.getReportes);

// POST
routes.post("/createReports", reporteController.createReportes);

module.exports = router;