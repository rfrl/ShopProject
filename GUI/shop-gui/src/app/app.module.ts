import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent} from './produtos/produtos.component';
import { ComprasComponent} from './compras/compras.component';
import { PedidoComponent} from './pedidos/pedido.component';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { ProdutoService} from './produto.service'

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ComprasComponent,
    PedidoComponent,
    FinalizarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'Compras',
        component: ComprasComponent
      },
      {
        path: 'Produtos',
        component: ProdutosComponent
      },
      {
        path: 'Pedidos',
        component: PedidoComponent
      },
      {
        path: 'Finalizar',
        component: FinalizarComponent
      }
    ]),
    AppRoutingModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
