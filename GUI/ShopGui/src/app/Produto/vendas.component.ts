import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Produto } from './produto';

import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
   constructor(private produtoService: ProdutoService) {}

   produtoAtual: Produto = new Produto();
   listaProdutos: Produto[];

   criarProduto(a: Produto): void {
            this.listaProdutos.push(a);
            this.produtoAtual = new Produto;
   }

   removerProduto(a: Produto): void{
      
   }
}