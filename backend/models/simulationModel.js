const mongoose = require("mongoose");

const SimulationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        tipoImovel: { type: String, required: true, trim: true },
        valorImovel: { type: Number, required: true, min: 0 },
        localizacao: { type: String, required: true, trim: true },
        rendaBruta: { type: Number, min: 0 },
        score: { type: Number, min: 300, max: 850 },
        etapa: { type: Number, default: 1, min: 1, max: 4 },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Simulation", SimulationSchema);
