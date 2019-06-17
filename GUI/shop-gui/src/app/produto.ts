export class Produto{
    nome: string;
    preco: Number;
    img: string;
    quantidade: Number;

    constructor(){
        this.clean();
    }

    clean():void{
        this.nome="";
        this.preco=0.00;
        this.img="";
        this.quantidade=0;
    }

    clone():Produto{
        var produto:Produto = new Produto;
        produto.copyFrom(this);        
        return produto;
    }

    copyFrom(produto:Produto):void{
        this.nome=produto.nome;
        this.preco=produto.preco;
        this.img=produto.img;
        this.quantidade=produto.quantidade;
    }
}