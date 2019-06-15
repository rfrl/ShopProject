import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Produto } from './produto';

import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent  implements OnInit {
   constructor(private produtoService: ProdutoService) {}

   produtoAtual: Produto = new Produto();
   listaProdutos: Produto[] = [];

   criarProduto(a: Produto): void {
            this.listaProdutos.push(a);
            this.produtoService.adicionar(a);
            this.produtoAtual = new Produto;
   }

   removerProduto(a: Produto): void{
      
   }
   ngOnInit(): void {
      this.listaProdutos = this.produtoService.getProdutos(); 
  }

getProdutos(): Produto[]{
   var resp: Produto[] = [];
    for(let x of this.listaProdutos){
      resp.push(x.clone());
   }
   return resp;
  }
}