export class Produto {
  nome: string;
  preco: string;
  telefone: string;
  imagem: string;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.preco = "";
    this.telefone = "";
    this.imagem= "";
  }

  clone(): Produto {
    var produto: Produto = new Produto();
    produto.copyFrom(this);
    return produto;
  }

  copyFrom(from: Produto): void {
    this.nome = from.nome;
    this.preco = from.preco;
    this.telefone = from.telefone;
    this.imagem= from.imagem;
  }
}