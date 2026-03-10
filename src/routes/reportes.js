const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');
const usuarioController = require('../controllers/usuarioController');
const auth = require("../middlewares/auth")

// http://localhost:3000/api/routes/getAllReportes
// GET
router.get("/getAllReports", auth, reporteController.getReportes);

// POST
router.post("/createReports", auth, reporteController.createReportes);
router.post("/register", usuarioController.registerUsuario);
router.post("/login", usuarioController.loginUsuario);

module.exports = router;