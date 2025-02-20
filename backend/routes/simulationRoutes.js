const express = require("express");
const { createSimulation, getSimulations } = require(""../projeto/backend/controllers/simulationController");

const router = express.Router();

router.post("/", createSimulation);
router.get("/", getSimulations);

module.exports = router;
