import bcrypt from "bcryptjs";

export class Funcionario {
  constructor(
    private id: string,
    private nome: string,
    private senha: string,
    private email: string,
    private cargo: string
  ) {
  }

  static create(nome: string, senha: string, email: string, cargo: string) {
    const id = crypto.randomUUID();
    const hashedPassword = bcrypt.hashSync(senha);
    return new Funcionario(id, nome, email, hashedPassword, cargo);
  }

  verifyPassword(senha: string): boolean {
    return bcrypt.compareSync(senha, this.senha);
  }

  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }
  getSenha(): string {
    return this.senha;
  }
  getCargo(): string {
    return this.cargo;
  }
  // Setters

  setNome(nome: string): void {
    this.nome = nome;
  }

  setEmail(email: string): void {
    this.email = email;
  }
  setCargo(cargo: string): void {
    this.cargo = cargo;
  }
  setSenha(senha: string): void {
    const hashedPassword = bcrypt.hashSync(senha);
    this.senha = hashedPassword;
  }
}
