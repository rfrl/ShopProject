import { Component, OnInit} from '@angular/core'
import { NgModule } from '@angular/core'

import { Produto } from "../produto"
import { ProdutoService } from "../produto.service"
<<<<<<< HEAD
import { PedidoService } from '../pedido.service';
=======
>>>>>>> ef43df5f5dab6839a4f23998d79ee68e902ff6d1

@Component ({
    selector: 'pedido',
    templateUrl: './pedido.component.html',
    styleUrls: ['./pedido.component.css']
})

export class PedidoComponent implements OnInit {
<<<<<<< HEAD
    constructor(private produtoService: ProdutoService, private pedidoService: PedidoService){}

    produtos: Produto[];
    ;

    addLista(produto: Produto){
        this.pedidoService.addLista(produto);
    }
=======
    constructor(private produtoService: ProdutoService){}

    produtos: Produto[];

    atualizarProduto(produto: Produto){
        this.produtoService.atualizar(produto);
    }

>>>>>>> ef43df5f5dab6839a4f23998d79ee68e902ff6d1
    ngOnInit(): void{
        this.produtoService.getProdutos()
         .then(produtos => this.produtos = produtos)
         .catch(erro => alert(erro));
   }
    
}