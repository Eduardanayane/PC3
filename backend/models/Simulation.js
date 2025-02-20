const mongoose = require("mongoose");

const SimulationSchema = new mongoose.Schema({
  pessoa: { type: String, required: true },
  tipoImovel: { type: String, required: true },
  valorImovel: { type: Number, required: true },
  localizacao: { type: String, required: true },
  rendaBruta: Number,
  score: Number,
  dataNascimento: String,
  etapa: { type: Number, default: 1 },
});

const Simulation = mongoose.model("Simulation", SimulationSchema);

module.exports = Simulation;
