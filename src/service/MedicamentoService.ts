import { Medicamento } from "../model/Medicamento";

export class MedicamentoService {
  lista: Medicamento[] = [];

  constructor() {
    this.inicializarMedicamentosPredefinidos();
  }

  private inicializarMedicamentosPredefinidos() {
    // Lista de medicamentos pré-cadastrados
    const medicamentosPredefinidos = [
      {
        nome: "Espironolactona",
        principioAtivo: "Espironolactona",
        comercial: "Aldactone, Diacqua",
        apresentacao: "Comprimidos de 25mg, 50mg ou 100mg",
        quantidade: 320,
        quantidadeMaxima: 500,
        conservacao: "Temperatura ambiente (15°C a 30°C). Proteger da umidade e da luz.",
        diluicao: "Uso oral: não necessita diluição.",
        doseUsual: "Hipertensão: 25-50mg/dia; Insuficiência cardíaca: 25-100mg/dia",
        efeitosColaterais: "Hipercalemia, náusea, vômito, sonolência"
      },
      {
        nome: "Lorazepam",
        principioAtivo: "Lorazepam",
        comercial: "Lorax, Lorapeze",
        apresentacao: "Comprimidos de 1mg e 2mg; Solução 2mg/mL",
        quantidade: 85,
        quantidadeMaxima: 300,
        conservacao: "Temperatura ambiente. Proteger da luz.",
        diluicao: "Diluir em SF 0,9% ou glicose 5%.",
        doseUsual: "Ansiedade oral: 1-3mg/dia",
        efeitosColaterais: "Sonolência, tontura, confusão mental"
      },
      {
        nome: "Enoxaparina Sódica",
        principioAtivo: "Enoxaparina sódica",
        comercial: "Clexane, Versa",
        apresentacao: "Seringas prontas: 20mg, 40mg, 60mg",
        quantidade: 450,
        quantidadeMaxima: 600,
        conservacao: "Temperatura ambiente. Não refrigerar.",
        diluicao: "Não diluir. Administrar SC no abdome.",
        doseUsual: "Profilaxia: 20-40mg SC 1x/dia",
        efeitosColaterais: "Hemorragia, trombocitopenia"
      },
      {
        nome: "Gentamicina",
        principioAtivo: "Gentamicina",
        comercial: "Garamicina",
        apresentacao: "Solução 40mg/mL",
        quantidade: 210,
        quantidadeMaxima: 400,
        conservacao: "15°C-30°C. Proteger da luz.",
        diluicao: "IV: diluir em 100mL SF 0,9%.",
        doseUsual: "3-5mg/kg/dia divididos 8/8h",
        efeitosColaterais: "Nefrotoxicidade, ototoxicidade"
      },
      {
        nome: "Suxametônio",
        principioAtivo: "Succinilcolina",
        comercial: "Anectine",
        apresentacao: "Solução 100mg/5mL",
        quantidade: 180,
        quantidadeMaxima: 250,
        conservacao: "Refrigerado 2°C-8°C.",
        diluicao: "Sem diluição IV ou diluir em SF 0,9%.",
        doseUsual: "IV: 0,6-1mg/kg",
        efeitosColaterais: "Apneia, bradicardia, hipercalemia"
      },
      {
        nome: "Amiodarona",
        principioAtivo: "Amiodarona",
        comercial: "Ancoron",
        apresentacao: "Comprimidos 200mg; Solução 50mg/mL",
        quantidade: 95,
        quantidadeMaxima: 300,
        conservacao: "Temperatura ambiente. Proteger da luz.",
        diluicao: "Diluir em 250mL SG 5%.",
        doseUsual: "VO: 600-800mg/dia",
        efeitosColaterais: "Bradicardia, hipotensão"
      },
      {
        nome: "Cloreto de Potássio",
        principioAtivo: "Cloreto de potássio",
        comercial: "KCl",
        apresentacao: "Solução 10%, 15%",
        quantidade: 520,
        quantidadeMaxima: 600,
        conservacao: "Temperatura ambiente. Não congelar.",
        diluicao: "NUNCA sem diluição! Diluir em SG 5%.",
        doseUsual: "20-40mEq/dia",
        efeitosColaterais: "Hipercalemia, náusea"
      },
      {
        nome: "Anfotericina B",
        principioAtivo: "Anfotericina B",
        comercial: "Fungizon",
        apresentacao: "Pó 50mg/frasco",
        quantidade: 145,
        quantidadeMaxima: 300,
        conservacao: "Refrigerado 2°C-8°C.",
        diluicao: "Diluir em SG 5%. Nunca SF 0,9%.",
        doseUsual: "0,25-1mg/kg/dia IV",
        efeitosColaterais: "Febre, nefrotoxicidade"
      },
      {
        nome: "Dexmedetomidina",
        principioAtivo: "Dexmedetomidina",
        comercial: "Precedex",
        apresentacao: "Solução 100mcg/mL",
        quantidade: 380,
        quantidadeMaxima: 500,
        conservacao: "15°C-30°C. Proteger da luz.",
        diluicao: "Diluir em SF 0,9% para 4mcg/mL.",
        doseUsual: "0,2-0,7mcg/kg/h",
        efeitosColaterais: "Bradicardia, hipotensão"
      },
      {
        nome: "Nitroglicerina",
        principioAtivo: "Trinitrato de glicerila",
        comercial: "Tridil",
        apresentacao: "Solução 5mg/mL",
        quantidade: 290,
        quantidadeMaxima: 400,
        conservacao: "15°C-30°C. Proteger da luz.",
        diluicao: "Diluir em SG 5% (100μg/mL).",
        doseUsual: "Inicial: 5μg/min",
        efeitosColaterais: "Cefaleia, hipotensão"
      }
    ];

    // Adicionar cada medicamento à lista
    medicamentosPredefinidos.forEach((med) => {
      // Criar bula básica
      const bula = `Medicamento: ${med.nome}\nPrincípio Ativo: ${med.principioAtivo}\nNome Comercial: ${med.comercial}\nApresentação: ${med.apresentacao}\n\nConservação: ${med.conservacao}\nDiluição: ${med.diluicao}\nDose Usual: ${med.doseUsual}\n\nEfeitos Colaterais: ${med.efeitosColaterais}`;

      // Criar string de informações detalhadas
      const informacoes = `Princípio Ativo: ${med.principioAtivo}\nNome Comercial: ${med.comercial}\nApresentação: ${med.apresentacao}\nConservação: ${med.conservacao}\nDiluição: ${med.diluicao}\nDose Usual: ${med.doseUsual}\nEfeitos Colaterais: ${med.efeitosColaterais}`;

      // Criar medicamento usando o método createMedi
      this.createMedi({
        nome: med.nome,
        dosagem: med.doseUsual,
        bula: bula,
        informacoes: informacoes,
        estoque: med.quantidade,
        quantidadeMax: med.quantidadeMaxima
      });
    });
  }

  createMedi(medicamento: {
    nome: string;
    dosagem: string;
    bula: string;
    informacoes: string;
    estoque: number;
    quantidadeMax: number;
  }): Medicamento {
    const medicamentoCreated = Medicamento.create(
      medicamento.nome,
      medicamento.dosagem,
      medicamento.bula,
      medicamento.informacoes,
      medicamento.estoque,
      medicamento.quantidadeMax
    );
    this.lista.push(medicamentoCreated);
    return medicamentoCreated;
  }

  getMedicamento(): Medicamento[] {
    return this.lista;
  }

  getMedicamentoByNome(nome: string): Medicamento[] | undefined {
    return this.lista.filter((medicamento) => medicamento.getNome() === nome);
  }

  getMedicamentoByDosagem(dosagem: string): Medicamento[] | undefined {
    return this.lista.filter((medicamento) => medicamento.getDosagem() === dosagem);
  }
  getMedicamentoByBula(bula: string): Medicamento[] | undefined {
    return this.lista.filter((medicamento) => medicamento.getBula() === bula);
  }
  getMedicamentoByInformacoes(informacoes: string): Medicamento[] | undefined {
    return this.lista.filter((medicamento) => medicamento.getInformacoes() === informacoes);
  }
   getMedicamentoByEstoque(estoque: number): Medicamento[]  | undefined {
    return this.lista.filter((medicamento) => medicamento.getEstoque() === estoque);
   
    
  }

  atualizarMedicamento(
    id: string,
    dados: {
    
      nome?: string;
      dosagem?: string;
      bula?: string;
      informacoes?: string;
      estoque?: number;
      quantidadeMax?: number;
    }
  ): Medicamento {
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
    if (dados.quantidadeMax !== undefined) {
      medicamento.setQuantidadeMax(dados.quantidadeMax)
    }
    return medicamento;
  }
}
