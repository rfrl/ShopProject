import { Component, OnInit} from '@angular/core'
import { NgModule } from '@angular/core'

import { Produto } from "../produto"
import { ProdutoService } from "../produto.service"

@Component ({
    selector: 'compras',
    templateUrl: './compras.component.html',
    styleUrls: ['./compras.component.css']
})

export class ComprasComponent implements OnInit {
    constructor(private produtoService: ProdutoService){}

    produtos: Produto[];

    atualizarProduto(produto: Produto){
        this.produtoService.atualizar(produto);
    }

    ngOnInit(): void{
        this.produtoService.getProdutos()
         .then(produtos => this.produtos = produtos)
         .catch(erro => alert(erro));
   }
    
}