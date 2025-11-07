export class Medicamento {
  constructor(
    private id: string,
    private nome: string,
    private dosagem: string,
    private bula: string,
    private informacoes: string,
    private estoque: number,
    private quantidadeMax: number
  ) {
  }

  static create(
    nome: string,
    dosagem: string,
    bula: string,
    informacoes: string,
    estoque: number,
    quantidadeMax: number
  ) {
    const id = crypto.randomUUID();
    return new Medicamento(id, nome, dosagem, bula, informacoes, estoque, quantidadeMax);
  }

  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getDosagem(): string {
    return this.dosagem;
  }

  getBula(): string {
    return this.bula;
  }

  getInformacoes(): string {
    return this.informacoes;
  }
  getEstoque(): number {
    return this.estoque
  }
  getQuantidadeMax(): number {
    return this.quantidadeMax;
  }
  setNome(nome: string): void {
    if (!nome) throw new Error("Nome obrigatório");
    this.nome = nome;
  }

  setDosagem(dosagem: string): void {
    if (!dosagem) throw new Error("Dosagem obrigatória");
    this.dosagem = dosagem;
  }

  setBula(bula: string): void {
    if (!bula) throw new Error("Bula obrigatória");
    this.bula = bula;
  }

  setInformacoes(informacoes: string): void {
    if (!informacoes) throw new Error("Informações obrigatórias");
    this.informacoes = informacoes;
  }
  setEstoque(estoque: number): void{
    if(estoque === undefined || estoque === null) throw new Error("Estoque obrigatório"); 
    this.estoque = estoque;
  }
  setQuantidadeMax(quantidadeMax: number): void {
    if (!quantidadeMax) throw new Error("Quantidade máxima obrigatória");
    this.quantidadeMax = quantidadeMax;
  }

}
