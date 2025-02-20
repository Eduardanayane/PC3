const Simulation = require("../projeto/backend/models/userModel");

exports.createSimulation = async (req, res) => {
    try {
        const simulation = await Simulation.create(req.body);
        res.status(201).json({ message: "Simulação salva com sucesso!", simulation });
    } catch (error) {
        res.status(400).json({ message: "Erro ao criar simulação", error });
    }
};

exports.getSimulations = async (req, res) => {
    try {
        const simulations = await Simulation.find();
        res.status(200).json(simulations);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar simulações", error });
    }
};
