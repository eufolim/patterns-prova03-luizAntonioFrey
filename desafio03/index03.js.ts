console.log("Hello, World! 003");
console.log("Criador (Creator)");

class sales {
    valor : number
    constructor(valor : number) {
        this.valor = valor
    }
    venda() {
        console.log("venda no valor de "+ this.valor)
    }
}

class register {
    vendas : Array<sales>
    constructor() {
        this.vendas = new Array<sales>
    }
    registrarVenda(valor : number) {
        this.vendas.push(new sales(valor))
    }
    reportarVendas() {
        this.vendas.forEach(element => {
            element.venda();
        }); 
    }
}

const register1 = new register();

register1.registrarVenda(16.99);
register1.registrarVenda(29.99);

register1.reportarVendas();