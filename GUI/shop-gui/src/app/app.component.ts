import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private produtoService: ProdutoService){}
  produto = new Produto();
  produtos: Produto[] = [];

  criarProduto(p: Produto): void{
    if(this.produtoService.criar(p)){
      this.produtos.push(p);
      this.produto = new Produto();
    }else{
      this.produto.nome="";
      alert("Já existe um produto com esse nome cadastrado no sistema");
    }
  }

}
