import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Produto } from '../Produto/produto';
import { ProdutoService } from '../Produto/produto.service';

@Component({
  selector: 'compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
   constructor(private produtoService: ProdutoService) {}

   listaProdutos: Produto[] = [];

   comprarProduto(produto: Produto): void {
   }
   ngOnInit(): void {
     this.listaProdutos = this.produtoService.getProdutos();
  }

}