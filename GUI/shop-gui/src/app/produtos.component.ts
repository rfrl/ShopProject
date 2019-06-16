import {Component, OnInit} from '@angular/core'
import { NgModule } from '@angular/core'

import { Produto } from './produto'
import { ProdutoService } from './produto.service'

@Component({
    selector: 'app-root',
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {
    constructor (private produtoService: ProdutoService){}

    produto: Produto = new Produto();
    produtos: Produto[] = [];

    criarProduto(p: Produto): void{
      this.produtoService.criar(p)
      .then(ab => {
         if (ab) {
            this.produtos.push(ab);
            this.produto = new Produto();
         }
      })
      .catch(erro => alert(erro));
    }

    ngOnInit(): void{
      this.produtoService.getProdutos()
      .then(as => this.produtos = as)
      .catch(erro => alert(erro));
    }

}