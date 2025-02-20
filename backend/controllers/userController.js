import { create, findOne } from "../projeto/backend/models/userModel";

export async function registerUser(req, res) {
    const { name, email, password } = req.body;
    try {
        const user = await create({ name, email, password });
        res.json({ message: "Usuário cadastrado com sucesso!", user });
    } catch (err) {
        res.status(400).json({
            message: "Erro ao cadastrar usuário",
            error: err,
        });
    }
}

export async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await findOne({ email, password });
        if (!user)
            return res.status(401).json({ message: "Credenciais inválidas" });
        res.json({ message: "Login bem-sucedido!", user });
    } catch (err) {
        res.status(500).json({ message: "Erro no login", error: err });
    }
}
