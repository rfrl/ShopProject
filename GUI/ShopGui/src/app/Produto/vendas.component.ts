import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
   constructor() {}

   produtoAtual: Produto = new Produto();
   listaProdutos: Produto[];

   criarProduto(a: Produto): void {
            this.listaProdutos.push(a);
            this.produtoAtual = new Produto;
   }

   removerProduto(a: Produto): void{
      
   }
}