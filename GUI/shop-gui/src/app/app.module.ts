import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent} from './produtos.component';
import { ComprasComponent} from './compras.component';
import { ProdutoService} from './produto.service'

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ComprasComponent
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
      }
    ]),
    AppRoutingModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
