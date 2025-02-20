require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.status(200).json({ message: "🚀 API rodando com sucesso!" });
});

const PORT = process.env.PORT || 4000;

console.log("MONGO_URI carregado:", process.env.MONGO_URI);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

app.listen(PORT, () =>
    console.log(`Backend rodando em http://localhost:${PORT}`),
);

// Rota 1: Criar simulação (Etapa 1 - Dados do Imóvel)
app.post("/simulations/step1", async (req, res) => {
    console.log("Recebendo dados na Etapa 1:", req.body);

    const { pessoa, tipoImovel, valorImovel, localizacao } = req.body;

    if (!pessoa || !tipoImovel || !valorImovel || !localizacao) {
        console.log("Erro: Dados faltando na Etapa 1");
        return res
            .status(400)
            .json({ message: "Todos os campos são obrigatórios!" });
    }

    try {
        const simulation = new Simulation({
            pessoa,
            tipoImovel,
            valorImovel,
            localizacao,
        });

        await simulation.save();

        console.log("Simulação criada e salva no MongoDB:", simulation);
        res.json({
            message: "Dados do imóvel registrados com sucesso!",
            simulation,
        });
    } catch (error) {
        console.error("Erro ao salvar a simulação:", error);
        res.status(500).json({ message: "Erro ao salvar a simulação", error });
    }
});

// Rota 2: Criar simulação (Etapa 2 - Dados Pessoais)
app.post("/simulations/step2/:simulationId", (req, res) => {
    console.log("Recebendo dados na Etapa 2:", req.body); // Log dos dados recebidos

    const { simulationId } = req.params;
    const { rendaBruta, score, dataNascimento } = req.body;

    const simulation = simulations.find(
        (sim) => sim.id === parseInt(simulationId),
    );

    if (!simulation) {
        console.log("Simulação não encontrada na Etapa 2");
        return res.status(404).json({ message: "Simulação não encontrada!" });
    }

    if (!rendaBruta || !dataNascimento) {
        console.log("Erro: Campos obrigatórios ausentes na Etapa 2");
        return res
            .status(400)
            .json({ message: "Todos os campos são obrigatórios!" });
    }

    simulation.rendaBruta = rendaBruta;
    simulation.score = score;
    simulation.dataNascimento = dataNascimento;
    simulation.etapa = 2;

    console.log("Dados pessoais atualizados:", simulation);
    res.json({
        message: "Dados pessoais registrados com sucesso!",
        simulation,
    });
});

// Rota 3: Obter todas as simulações
app.get("/simulations", (req, res) => {
    res.json(simulations);
});

// Rota 4: Obter simulação por ID
app.get("/simulations/:simulationId", (req, res) => {
    const { simulationId } = req.params;
    const simulation = simulations.find(
        (sim) => sim.id === parseInt(simulationId),
    );

    if (!simulation) {
        return res.status(404).json({ message: "Simulação não encontrada!" });
    }

    res.json(simulation);
});

// Rota 5: Finalizar simulação (Etapa 3 - Confirmação)
app.post("/simulations/finalize/:simulationId", (req, res) => {
    console.log(`Finalizando simulação ID ${req.params.simulationId}`); // Log de finalização

    const { simulationId } = req.params;
    const simulation = simulations.find(
        (sim) => sim.id === parseInt(simulationId),
    );

    if (!simulation) {
        console.log("Simulação não encontrada para finalizar");
        return res.status(404).json({ message: "Simulação não encontrada!" });
    }

    simulation.etapa = 3;
    console.log("Simulação finalizada:", simulation);
    res.json({ message: "Simulação finalizada!", simulation });
});

// Rota 6: Obter resultado da simulação (Etapa 4 - Resultado)
app.get("/simulations/result/:simulationId", (req, res) => {
    const { simulationId } = req.params;
    const simulation = simulations.find(
        (sim) => sim.id === parseInt(simulationId),
    );

    if (!simulation) {
        return res.status(404).json({ message: "Simulação não encontrada!" });
    }

    if (simulation.etapa !== 3) {
        return res
            .status(400)
            .json({ message: "A simulação não foi finalizada ainda." });
    }

    res.json({ message: "Resultado da simulação", simulation });
});

// Rota 7: Refazer simulação
app.post("/simulations/reset/:simulationId", (req, res) => {
    const { simulationId } = req.params;
    const simulationIndex = simulations.findIndex(
        (sim) => sim.id === parseInt(simulationId),
    );

    if (simulationIndex === -1) {
        return res.status(404).json({ message: "Simulação não encontrada!" });
    }

    simulations[simulationIndex] = { id: simulationId, etapa: 1 };
    res.json({ message: "Simulação reiniciada com sucesso!" });
});
