import { Funcionario } from "../model/Funcionario";

export class FuncionarioService {
  lista: Funcionario[] = [];

  public createUser(funcionario: {
    nome: string;
    email: string;
    senha: string;
    cargo: string;
  }): Funcionario {
    const funcionarioCreated = Funcionario.create(
      funcionario.nome,
      funcionario.email,
      funcionario.senha,
      funcionario.cargo
    );
    this.lista.push(funcionarioCreated);
    return funcionarioCreated;
  }
  public autenticar(email: string, senha: string): Funcionario {
    const funcionario = this.lista.find(
      (funcionario) => funcionario.getEmail() === email
    );
    if (!funcionario || !funcionario.verifyPassword(senha)) {
      throw new Error("Email ou senha inválidos");
    }
    return funcionario;
  }

  public getFuncionarios(): Funcionario[] {
    return this.lista;
  }

  public getFuncionarioByNome(nome: string): Funcionario | undefined {
    return this.lista.find((funcionario) => funcionario.getNome() === nome);
  }

  public getFuncionarioByCargo(cargo: string): Funcionario | undefined {
    return this.lista.find((funcionario) => funcionario.getCargo() === cargo);
  }

  public getFuncionarioByEmail(email: string): Funcionario | undefined {
    return this.lista.find((funcionario) => funcionario.getEmail() === email);
  }

  public updateUser(
    email: string,
    dados: {
      nome?: string;
      email?: string;
      senha?: string;
      cargo?: string;
    }
  ): Funcionario {
    const funcionario = this.getFuncionarioByEmail(email);

    if (!funcionario) {
      throw new Error("Funcionário não encontrado");
    }

    if (dados.nome) funcionario.setNome(dados.nome);
    if (dados.email) funcionario.setEmail(dados.email);
    if (dados.senha) funcionario.setSenha(dados.senha);
    if (dados.cargo) funcionario.setCargo(dados.cargo);

    return funcionario;
  }
}
