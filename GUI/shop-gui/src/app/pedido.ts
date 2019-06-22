import { Cliente } from './cliente'
import { Produto } from './produto'

export class Pedido{
    cliente: Cliente = new Cliente();
    produtos: Produto[];

    constructor(){
        this.clean();
    }

    setCliente(cliente:Cliente){
        this.cliente=cliente;
    }

    setProdutos(produtos: Produto[]){
        this.produtos=produtos;
    }

    clean():void{
        this.cliente.clean();
        this.produtos = [];
    }

    copyFrom(pedido:Pedido):void{
        this.cliente=pedido.cliente.clone();
        this.produtos=pedido.produtos;
    }

}