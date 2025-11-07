"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicamento = void 0;
class Medicamento {
    id;
    nome;
    dosagem;
    bula;
    informacoes;
    estoque;
    informaçoes;
    constructor(id, nome, dosagem, bula, informacoes, estoque) {
        this.id = id;
        this.nome = nome;
        this.dosagem = dosagem;
        this.bula = bula;
        this.informacoes = informacoes;
        this.estoque = estoque;
    }
    static create(nome, dosagem, bula, informacoes, estoque) {
        const id = crypto.randomUUID();
        return new Medicamento(id, nome, dosagem, bula, informacoes, estoque);
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getDosagem() {
        return this.dosagem;
    }
    getBula() {
        return this.bula;
    }
    getInformacoes() {
        return this.informacoes;
    }
    getEstoque() {
        return this.estoque;
    }
    setNome(nome) {
        if (!nome)
            throw new Error("Nome obrigatório");
        this.nome = nome;
    }
    setDosagem(dosagem) {
        if (!dosagem)
            throw new Error("Dosagem obrigatório");
        this.dosagem = dosagem;
    }
    setBula(bula) {
        if (!bula)
            throw new Error("Bula obrigatório");
        this.bula = bula;
    }
    setInformacoes(informacoes) {
        if (!informacoes)
            throw new Error("Informações obrigatórias");
        this.informacoes = informacoes;
    }
    setEstoque(estoque) {
        if (!estoque)
            throw new Error("Estoque oobrigatório");
        this.estoque = estoque;
    }
}
exports.Medicamento = Medicamento;
