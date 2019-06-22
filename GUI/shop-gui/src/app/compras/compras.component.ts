import { Component, OnInit} from '@angular/core'
import { NgModule } from '@angular/core'

import { Pedido } from "../pedido"
import { PedidoService } from "../pedido.service"

@Component ({
    selector: 'compras',
    templateUrl: './compras.component.html',
    styleUrls: ['./compras.component.css']
})

export class ComprasComponent implements OnInit {
    constructor(private pedidoService: PedidoService){}

    pedidos: Pedido[];

    ngOnInit(): void{
        this.pedidoService.getPedidos()
         .then(pedidos => this.pedidos = pedidos)
         .catch(erro => alert(erro));
   }
    
}