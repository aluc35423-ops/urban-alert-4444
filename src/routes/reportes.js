const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');
const auth = require("../middlewares/auth")

// http://localhost:3000/api/routes/getAllReportes
// GET
routes.get("/getAllReports", auth, reporteController.getReportes);

// POST
routes.post("/createReports", auth, reporteController.createReportes);

module.exports = router;

//emay y password cifrado