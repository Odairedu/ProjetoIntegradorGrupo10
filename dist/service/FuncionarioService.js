"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioService = void 0;
const Funcionario_1 = require("../model/Funcionario");
class FuncionarioService {
    lista = [];
    createUser(funcionario) {
        const funcionarioCreated = Funcionario_1.Funcionario.create(funcionario.nome, funcionario.email, funcionario.senha, funcionario.cargo);
        this.lista.push(funcionarioCreated);
        return funcionarioCreated;
    }
    autenticar(email, senha) {
        const funcionario = this.lista.find((funcionario) => funcionario.getEmail() === email);
        if (!funcionario || !funcionario.verifyPassword(senha)) {
            throw new Error("Email ou senha inválidos");
        }
        return funcionario;
    }
    getFuncionarios() {
        return this.lista;
    }
    getFuncionarioByNome(nome) {
        return this.lista.find((funcionario) => funcionario.getNome() === nome);
    }
    getFuncionarioByCargo(cargo) {
        return this.lista.find((funcionario) => funcionario.getCargo() === cargo);
    }
    getFuncionarioByEmail(email) {
        return this.lista.find((funcionario) => funcionario.getEmail() === email);
    }
    updateUser(email, dados) {
        const funcionario = this.getFuncionarioByEmail(email);
        if (!funcionario) {
            throw new Error("Funcionário não encontrado");
        }
        if (dados.nome)
            funcionario.setNome(dados.nome);
        if (dados.email)
            funcionario.setEmail(dados.email);
        if (dados.senha)
            funcionario.setSenha(dados.senha);
        if (dados.cargo)
            funcionario.setCargo(dados.cargo);
        return funcionario;
    }
}
exports.FuncionarioService = FuncionarioService;
