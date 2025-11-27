console.log("Hello, World! 002");
console.log("Segregação de interface");

interface funcionario {
    nome: string
    salario() : void; 
}

interface comissionavel {
    gerarComissao() : void;
}

class vendedor implements funcionario, comissionavel {
    nome: string;
    constructor(nome : string){
        this.nome = nome
    }
    salario(): void { 
        console.log(this.nome +" recebe salario")
    }
    gerarComissao(): void {
        console.log(this.nome +" recebe comição")
    }
} 

class recepcionista implements funcionario {
    nome: string;
    constructor(nome : string){
        this.nome = nome
    }
    salario(): void {
        console.log(this.nome +" recebe salario")
    }
}

const vendedor1 = new vendedor("vendedor");
const recepcionista1 = new recepcionista("recepcionista");

vendedor1.salario();
vendedor1.gerarComissao();
recepcionista1.salario();