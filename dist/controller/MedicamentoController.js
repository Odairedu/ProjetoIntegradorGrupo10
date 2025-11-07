"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicamentoController = MedicamentoController;
const MedicamentoService_1 = require("../service/MedicamentoService");
const server_1 = require("../server");
function MedicamentoController() {
    const service = new MedicamentoService_1.MedicamentoService();
    server_1.app.get("/medicamento", (req, res) => {
        const medicamento = service.getMedicamento();
        const medicamentoSemSenha = medicamento.map((medicamento) => ({
            id: medicamento.getId(),
            nome: medicamento.getNome(),
            dosagem: medicamento.getDosagem(),
            bula: medicamento.getBula(),
            informacoes: medicamento.getInformacoes(),
            estoque: medicamento.getEstoque(),
        }));
        res.json(medicamentoSemSenha);
    });
    server_1.app.post("/medicamento", (req, res) => {
        try {
            const dadosMedicamento = req.body;
            const novoMedicamento = service.createMedi(dadosMedicamento);
            res.status(201).json({
                status: "Medicamento atualizado com sucesso",
                id: novoMedicamento.getId(),
            });
        }
        catch (e) {
            return res.status(400).json({ erro: e.message });
        }
    });
    server_1.app.put("/medicamento/:id", (req, res) => {
        try {
            const { id } = req.params;
            const dados = req.body;
            const medicamentoAtualizado = service.atualizarMedicamento(id, dados);
            res.json({
                status: "Medicamento atualizado com sucesso",
                dados: {
                    id: medicamentoAtualizado.getId(),
                    nome: medicamentoAtualizado.getNome(),
                    dosagem: medicamentoAtualizado.getDosagem(),
                    bula: medicamentoAtualizado.getBula(),
                    informacoes: medicamentoAtualizado.getInformacoes(),
                    estoque: medicamentoAtualizado.getEstoque(),
                },
            });
        }
        catch (e) {
            return res.status(404).json({ erro: e.message });
        }
    });
    server_1.app.get("/medicamento/filtrar", (req, res) => {
        const { nome, dosagem, bula, informacoes, estoque } = req.query;
        // Filtro por nome (retorna lista)
        if (nome) {
            const medicamento = service.getMedicamentoByNome(nome);
            if (!medicamento) {
                return res.status(404).json({ mensagem: "Nenhum medicamento encontrado" });
            }
            const medicamentoSemSenha = medicamento.map((medicamento) => ({
                id: medicamento.getId(),
                nome: medicamento.getNome(),
                dosagem: medicamento.getDosagem(),
                bula: medicamento.getBula(),
                informacoes: medicamento.getInformacoes(),
                estoque: medicamento.getEstoque(),
            }));
            return res.status(200).json(medicamentoSemSenha);
        }
        // Filtrar por Dosagem (retorna lista)
        if (dosagem) {
            const medicamento = service.getMedicamentoByDosagem(dosagem);
            if (!medicamento) {
                return res.status(404).json({ mensagem: "Nenhum medicamento encontrado" });
            }
            const medicamentoSemSenha = medicamento.map((medicamento) => ({
                id: medicamento.getId(),
                nome: medicamento.getNome(),
                dosagem: medicamento.getDosagem(),
                bula: medicamento.getBula(),
                informacoes: medicamento.getInformacoes(),
                estoque: medicamento.getEstoque(),
            }));
            return res.status(200).json(medicamentoSemSenha);
        }
        // Filtro por bula (retorna lista)
        if (bula) {
            const medicamento = service.getMedicamentoByBula(bula);
            if (!medicamento) {
                return res.status(404).json({ mensagem: "Nenhum medicamento encontrado" });
            }
            const medicamentoSemSenha = medicamento.map((medicamento) => ({
                id: medicamento.getId(),
                nome: medicamento.getNome(),
                dosagem: medicamento.getDosagem(),
                bula: medicamento.getBula(),
                informacoes: medicamento.getInformacoes(),
                estoque: medicamento.getEstoque(),
            }));
            return res.status(200).json(medicamentoSemSenha);
        }
        // Filtro por informacoes (retorna lista)
        if (informacoes) {
            const medicamento = service.getMedicamentoByInformacoes(informacoes);
            if (!medicamento) {
                return res.status(404).json({ mensagem: "Nenhum medicamento encontrado" });
            }
            const medicamentoSemSenha = medicamento.map((medicamento) => ({
                id: medicamento.getId(),
                nome: medicamento.getNome(),
                dosagem: medicamento.getDosagem(),
                bula: medicamento.getBula(),
                informacoes: medicamento.getInformacoes(),
                estoque: medicamento.getEstoque(),
            }));
            return res.status(200).json(medicamentoSemSenha);
        }
        return res.status(400).json({
            mensagem: "Parâmetros de busca inválidos. Use: nome, dosagem, bula, informacoes ou estoque",
        });
    });
}
