import { Component, OnInit} from '@angular/core'
import { NgModule } from '@angular/core'

import { Produto } from "../produto"
import { PedidoService } from '../pedido.service';
import { Cliente } from '../cliente';

@Component ({
    selector: 'finalizar',
    templateUrl: './finalizar.component.html',
    styleUrls: ['./finalizar.component.css']
})

export class FinalizarComponent implements OnInit {
    constructor(private pedidoService: PedidoService){}

    lista: Produto[];
    cliente:Cliente;

    criarPedido(cliente){
        if(this.cliente.nome==""){
            alert("Você precisa informar um nome!!");
        }else if(this.cliente.email=="" && this.cliente.telefone==""){
            alert("Você precisa informar ao menos uma forma de contato")
        }else if(this.lista.length==0){
            alert("O carrinho de compras está vazio")
        }else{
            this.pedidoService.criarPedido(cliente);
            this.cliente = new Cliente();
            this.lista = [];
        }
    }

    ngOnInit(): void{
        this.pedidoService.getLista()
         .then(lista => this.lista = lista)
         .catch(erro => alert(erro));
         this.cliente = new Cliente
   }
    
}