import { Pedido } from '../../gui/shop-gui/src/app/pedido';
import { Produto } from '../../gui/shop-gui/src/app/produto';

export class CadastroDePedidos {
  pedidos: Pedido[] = []

  criar(pedido: Pedido): Pedido {
    this.pedidos.push(pedido);
    return pedido;
  }

  getPedidos(): Pedido[] {
    return this.pedidos;
  }
}