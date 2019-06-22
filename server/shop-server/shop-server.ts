import express = require('express');
import bodyParser = require("body-parser");

import {Produto} from '../../gui/shop-gui/src/app/produto';
import {CadastroDeProdutos} from './cadastroDeProdutos';
<<<<<<< HEAD
import {CadastroDePedidos} from './cadastroDePedidos';
import {Pedido} from '../../gui/shop-gui/src/app/pedido';
import { Cliente } from '../../gui/shop-gui/src/app/cliente';

=======
>>>>>>> ef43df5f5dab6839a4f23998d79ee68e902ff6d1

var app = express();

var estoque: CadastroDeProdutos = new CadastroDeProdutos();
<<<<<<< HEAD
var pedidos: CadastroDePedidos = new CadastroDePedidos();
var lista: CadastroDeProdutos = new CadastroDeProdutos();
=======
>>>>>>> ef43df5f5dab6839a4f23998d79ee68e902ff6d1

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/produtos', function (req, res) {  
    console.log('GET /produtos: ' + req)
    res.send(JSON.stringify(estoque.getProdutos()));
})

<<<<<<< HEAD
app.post('/produtos', function (req: express.Request, res: express.Response) {
  var produto: Produto = <Produto> req.body;
=======
app.post('/produto', function (req: express.Request, res: express.Response) {
  var produto: Produto = <Produto> req.body; //verificar se é mesmo Aluno!
>>>>>>> ef43df5f5dab6839a4f23998d79ee68e902ff6d1
  produto = estoque.criar(produto);
  if (produto) {
    res.send({"success": "O produto foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O produto não pode ser cadastrado"});
  }
})

<<<<<<< HEAD
app.get('/pedidos', function (req, res) {  
  console.log('GET /pedidos: ' + req)
  res.send(JSON.stringify(pedidos.getPedidos()));
})

app.post('/pedidos', function (req: express.Request, res: express.Response) {
  var cliente: Cliente = <Cliente>req.body;
  var pedido: Pedido = new Pedido();
  pedido.setCliente(cliente);
  pedido.setProdutos(lista.getProdutos());
  pedido = pedidos.criar(pedido);
  lista = new CadastroDeProdutos();
  if (pedido) {
    res.send({"success": "O pedido foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O pedido não pode ser cadastrado"});
  }
})

app.get('/lista', function (req, res) {  
  console.log('GET /lista: ' + req)
  res.send(JSON.stringify(lista.getProdutos()));
})

app.post('/lista', function (req: express.Request, res: express.Response) {
var produto: Produto = <Produto> req.body;
produto = lista.criar(produto);
if (produto) {
  res.send({"success": "O produto foi adicionado ao carrinho com sucesso"});
} else {
  res.send({"failure": "O produto não pode ser adicionado ao carrinho"});
}
})


app.listen(3000, function () {
  console.log('Shop-app listening on port 3000!')
=======

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
>>>>>>> ef43df5f5dab6839a4f23998d79ee68e902ff6d1
})

export { app }