const mongoose = require("mongoose");

const SimulationSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // OBRIGATÓRIO
        tipoImovel: { type: String, required: true, trim: true }, // OBRIGATÓRIO
        valorImovel: { type: Number, required: true, min: 0 }, // OBRIGATÓRIO
        localizacao: { type: String, required: true, trim: true }, // OBRIGATÓRIO
        rendaBruta: { type: Number, min: 0 }, // NÃO OBRIGATÓRIO
        score: { type: Number, min: 300, max: 850 }, // NÃO OBRIGATÓRIO
        etapa: { type: Number, default: 1, min: 1, max: 4 } // OBRIGATÓRIO COM DEFAULT
    },
    { timestamps: true } // Adiciona `createdAt` e `updatedAt`
);

module.exports = mongoose.model("Simulation", SimulationSchema);