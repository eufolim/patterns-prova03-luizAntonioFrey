console.log("Hello, World! 001");
console.log("Substituição de Liskov");

class estudante {
    constructor(nome) {
        this.nome = nome
    }

    estudar() {
        console.log(this.nome + " está estudando")
    }
}

class estudanteFundamental extends estudante{
    recuperacao() {
        console.log(this.nome + " ficou de recuperação")
    }
}

class estudanteGraduacao extends estudante {
    N1() {
        console.log(this.nome + " ficou na n-1")
    }
}

const estudante1 = new estudante("aluno1")
const estudante2 = new estudanteFundamental("aluno2")
const estudante3 = new estudanteGraduacao("aluno3")

estudante1.estudar();
estudante2.estudar();
estudante3.estudar();

estudante2.recuperacao();

estudante3.N1();
