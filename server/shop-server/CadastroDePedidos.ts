import { Pedido } from '../../gui/shop-gui/src/app/pedido';
import { Produto } from '../../gui/shop-gui/src/app/produto';

<<<<<<< HEAD
export class CadastroDePedidos {
  pedidos: Pedido[] = []

  criar(pedido: Pedido): Pedido {
    this.pedidos.push(pedido);
    return pedido;
  }

  getPedidos(): Pedido[] {
    return this.pedidos;
=======
export class CadastroDeProdutos {
  produtos: Produto[] = [];

  criar(produto: Produto): Produto {
    var result = null;
    if (this.nomeNaoCadastrado(produto.nome)) {
      result = new Produto();
      result.copyFrom(produto);
      this.produtos.push(result);
    }
    return result;
  }

  nomeNaoCadastrado(nome: string): boolean {
     return !this.produtos.find(p => p.nome == nome);
  }

  atualizar(produto: Produto): Produto {
    var result: Produto = this.produtos.find(p => p.nome == produto.nome);
    if (result) result.copyFrom(produto);
    return result;
  }

  getProdutos(): Produto[] {
    return this.produtos;
>>>>>>> ef43df5f5dab6839a4f23998d79ee68e902ff6d1
  }
}