import { Injectable } from '@angular/core';

import { Produto } from './produto';

@Injectable()
export class ProdutoService {
  produtos: Produto[] = [];

  adicionar(produto: Produto): Produto {
    produto = produto.clone();
    this.produtos.push(produto);
    return produto;
  }

  getProdutos(): Produto[] {
    var resp: Produto[] = [];
    for (let a of this.produtos) {
      resp.push(a.clone());
    }
    return resp;
  }
}