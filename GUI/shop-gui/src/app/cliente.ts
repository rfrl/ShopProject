export class Cliente{
    nome: string;
    telefone: String;
    email: string;

    constructor(){
        this.clean();
    }

    clean():void{
        this.nome="";
        this.telefone="";
        this.email="";
    }

    clone():Cliente{
        var cliente:Cliente = new Cliente;
        cliente.copyFrom(this);        
        return cliente;
    }

    copyFrom(cliente):void{
        this.nome=cliente.nome;
        this.telefone=cliente.telefone;
        this.email=cliente.email;        
    }
}