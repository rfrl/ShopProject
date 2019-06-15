import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendasComponent } from './Produto/vendas.component';
import { ProdutoService } from './Produto/produto.service';

@NgModule({
  declarations: [
    AppComponent,
    VendasComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'vendas',
        component: VendasComponent
      }
    ])
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
