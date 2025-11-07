"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Funcionario {
    id;
    nome;
    senha;
    email;
    cargo;
    constructor(id, nome, senha, email, cargo) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.email = email;
        this.cargo = cargo;
    }
    static create(nome, senha, email, cargo) {
        const id = crypto.randomUUID();
        const hashedPassword = bcryptjs_1.default.hashSync(senha);
        return new Funcionario(id, nome, email, hashedPassword, cargo);
    }
    verifyPassword(senha) {
        return bcryptjs_1.default.compareSync(senha, this.senha);
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getEmail() {
        return this.email;
    }
    getSenha() {
        return this.senha;
    }
    getCargo() {
        return this.cargo;
    }
    // Setters
    setNome(nome) {
        this.nome = nome;
    }
    setEmail(email) {
        this.email = email;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
    setSenha(senha) {
        const hashedPassword = bcryptjs_1.default.hashSync(senha);
        this.senha = hashedPassword;
    }
}
exports.Funcionario = Funcionario;
