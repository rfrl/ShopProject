import { Component, OnInit} from '@angular/core'
import { NgModule } from '@angular/core'

import { Produto } from "../produto"
import { ProdutoService } from "../produto.service"
import { PedidoService } from '../pedido.service';

@Component ({
    selector: 'pedido',
    templateUrl: './pedido.component.html',
    styleUrls: ['./pedido.component.css']
})

export class PedidoComponent implements OnInit {
    constructor(private produtoService: ProdutoService, private pedidoService: PedidoService){}

    produtos: Produto[];
    ;

    addLista(produto: Produto){
        this.pedidoService.addLista(produto);
    }
  
    ngOnInit(): void{
        this.produtoService.getProdutos()
         .then(produtos => this.produtos = produtos)
         .catch(erro => alert(erro));
   }
    
}
