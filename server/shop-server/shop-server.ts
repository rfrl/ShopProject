import express = require('express');
import bodyParser = require("body-parser");

import {Produto} from '../../gui/shop-gui/src/app/produto';
import {CadastroDeProdutos} from './cadastroDeProdutos';

var app = express();

var estoque: CadastroDeProdutos = new CadastroDeProdutos();

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

app.post('/produto', function (req: express.Request, res: express.Response) {
  var produto: Produto = <Produto> req.body; //verificar se é mesmo Aluno!
  produto = estoque.criar(produto);
  if (produto) {
    res.send({"success": "O produto foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O produto não pode ser cadastrado"});
  }
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

export { app }