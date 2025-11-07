"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioController = FuncionarioController;
const server_1 = require("../server");
const FuncionarioService_1 = require("../service/FuncionarioService");
function FuncionarioController() {
    const service = new FuncionarioService_1.FuncionarioService();
    server_1.app.get("/funcionarios/ver", (req, res) => {
        const funcionario = service.getFuncionarios();
        const funcionarioSemSenha = funcionario.map((funcionario) => ({
            id: funcionario.getId(),
            nome: funcionario.getNome(),
            email: funcionario.getEmail(),
            cargo: funcionario.getCargo(),
        }));
        res.json(funcionarioSemSenha);
    });
    server_1.app.post("/funcionarios/cadastro", (req, res) => {
        try {
            const dadosfuncionario = req.body;
            const novofuncionario = service.createUser(dadosfuncionario);
            res.status(201).json({
                status: "Funcionario criado com sucesso",
                id: novofuncionario.getId(),
            });
        }
        catch (e) {
            return res.status(400).json({ erro: e.message });
        }
    });
    server_1.app.put("/funcionarios/:email", (req, res) => {
        try {
            const { email } = req.params;
            const dados = req.body;
            const funcionarioAtualizado = service.updateUser(email, dados);
            res.json({
                status: "Funcionario atualizado com sucesso",
                dados: {
                    id: funcionarioAtualizado.getId(),
                    nome: funcionarioAtualizado.getNome(),
                    email: funcionarioAtualizado.getEmail(),
                    cargo: funcionarioAtualizado.getCargo(),
                },
            });
        }
        catch (e) {
            return res.status(404).json({ erro: e.message });
        }
    });
    server_1.app.post("/funcionarios/autenticacao", (req, res) => {
        try {
            const { email, senha } = req.body;
            const funcionario = service.autenticar(email, senha);
            res.json({
                status: "Autenticado com sucesso",
                dados: {
                    id: funcionario.getId(),
                    nome: funcionario.getNome(),
                    email: funcionario.getEmail(),
                    cargo: funcionario.getCargo(),
                },
            });
        }
        catch (e) {
            return res.status(401).json({ erro: e.message || "Não autorizado" });
        }
    });
}
