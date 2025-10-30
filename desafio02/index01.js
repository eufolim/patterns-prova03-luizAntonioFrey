console.log("Hello, World! 001");

class Company {
    showDetails() {
        throw new Error("Abstrato") 
    }
}

class Task extends Company {
    constructor(nome) {
        super();
        this.nome = nome;
    }

    showDetails(indent = "") {
        console.log(`${indent}Tarefa: ${this.nome}`);
    }
}

class Project extends Company {
    constructor(nome) {
        super();
        this.nome = nome;
        this.tasks = [];
    }

    add(task) {
        this.tasks.push(task);
    }

    showDetails(indent = "") {
        console.log(`${indent}Projeto: ${this.nome}`);
        this.tasks.forEach((tasks) => tasks.showDetails(indent + "    "));
    }
}

const p1 = new Project("Projeto Principal");
const p2 = new Project("Dependencia");

const t1 = new Task("desenvolver");
const t2 = new Task("resolver compatbilidade");
const t3 = new Task("installar");

p2.add(t3);
p2.add(t2);

p1.add(p2);
p1.add(t1);

p1.showDetails()