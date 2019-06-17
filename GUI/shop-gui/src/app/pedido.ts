import { Cliente } from './cliente'
import { Produto } from './produto'

export class Pedido{
    cliente: Cliente = new Cliente();
    produtos: Produto[];

    constructor(){
        this.clean();
    }

    clean():void{
        this.cliente.clean();
        this.produtos = [];
    }
}