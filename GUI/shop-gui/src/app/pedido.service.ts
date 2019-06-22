
import { Pedido } from './pedido';
import {Produto } from './produto';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { from } from 'rxjs';
import { Cliente } from './cliente';

@Injectable()
export class PedidoService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private shopURL = 'http://localhost:3000';

    constructor(private http: Http) { }

   criarPedido(cliente: Cliente): Promise<Cliente> {
      return this.http.post(this.shopURL + "/pedidos",JSON.stringify(cliente), {headers: this.headers})
            .toPromise()
            .then(res => {
              if (res.json().success) {return cliente;} else {return null;}
            })
            .catch(this.tratarErro);
   }

   getPedidos(): Promise<Pedido[]> {
      return this.http.get(this.shopURL + "/pedidos")
               .toPromise()
               .then(res => res.json() as Pedido[])
               .catch(this.tratarErro);
   }

   addLista(produto: Produto): Promise<Produto> {
      return this.http.post(this.shopURL + "/lista",JSON.stringify(produto), {headers: this.headers})
              .toPromise()
              .then(res => {
                 if (res.json().success) {return produto;} else {return null;}
              })
              .catch(this.tratarErro);
   }
   
   getLista(): Promise<Produto[]> {
         return this.http.get(this.shopURL + "/lista")
                  .toPromise()
                  .then(res => res.json() as Produto[])
                  .catch(this.tratarErro);
         }

   private tratarErro(erro: any): Promise<any>{
      console.error('Acesso mal sucedido ao serviço de pedidos',erro);
      return Promise.reject(erro.message || erro);
   }
}