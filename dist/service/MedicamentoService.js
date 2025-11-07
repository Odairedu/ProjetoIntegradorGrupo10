"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicamentoService = void 0;
const Medicamento_1 = require("../model/Medicamento");
class MedicamentoService {
    lista = [];
    createMedi(medicamento) {
        const medicamentoCreated = Medicamento_1.Medicamento.create(medicamento.nome, medicamento.dosagem, medicamento.bula, medicamento.informacoes, medicamento.estoque);
        this.lista.push(medicamentoCreated);
        return medicamentoCreated;
    }
    getMedicamento() {
        return this.lista;
    }
    getMedicamentoByNome(nome) {
        return this.lista.filter((medicamento) => medicamento.getNome() === nome);
    }
    getMedicamentoByDosagem(dosagem) {
        return this.lista.filter((medicamento) => medicamento.getDosagem() === dosagem);
    }
    getMedicamentoByBula(bula) {
        return this.lista.filter((medicamento) => medicamento.getBula() === bula);
    }
    getMedicamentoByInformacoes(informacoes) {
        return this.lista.filter((medicamento) => medicamento.getInformacoes() === informacoes);
    }
    getMedicamentoByEstoque(estoque) {
        return this.lista.filter((medicamento) => medicamento.getEstoque() === estoque);
    }
    atualizarMedicamento(id, dados) {
        const medicamento = this.lista.find((m) => m.getId() === id);
        if (!medicamento) {
            throw new Error("Medicamento não encontrado");
        }
        if (dados.nome !== undefined) {
            medicamento.setNome(dados.nome);
        }
        if (dados.dosagem !== undefined) {
            medicamento.setDosagem(dados.dosagem);
        }
        if (dados.bula !== undefined) {
            medicamento.setBula(dados.bula);
        }
        if (dados.informacoes !== undefined) {
            medicamento.setInformacoes(dados.informacoes);
        }
        if (dados.estoque !== undefined) {
            medicamento.setEstoque(dados.estoque);
        }
        return medicamento;
    }
}
exports.MedicamentoService = MedicamentoService;
