import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendasComponent } from './Produto/vendas.component';
import { ProdutoService } from './Produto/produto.service';
import { ComprasComponent } from './Compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    VendasComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'vendas',
        component: VendasComponent
      },
      {
        path: 'compras',
        component: ComprasComponent
      }
    ])
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
