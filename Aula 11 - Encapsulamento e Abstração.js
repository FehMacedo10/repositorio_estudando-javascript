//! AULA 11 - ENCAPSULAMENTO E ABSTRAÇÃO

//? 📚 O Que é Encapsulamento?
//* Encapsulamento: Controla como os dados de um objeto são acessados e modificados, protegendo sua integridade.

//? 🔍 Como Proteger Atributos no JavaScript?

//* Os atributos que começam com # são privados e só podem ser acessados dentro da própria classe.

//? Abstração: Esconde detalhes desnecessários do funcionamento interno e expõe apenas o que é essencial para o uso.


class Cofre {
    #senha; // Atributo privado

    constructor(senhaInicial) {
        this.#senha = senhaInicial;
    }

    alterarSenha(novaSenha) {
        this.#senha = novaSenha;
    }

    verificarSenha(senha) {
        return this.#senha === senha;
    }
}

const meuCofre = new Cofre("1234");
console.log(meuCofre.verificarSenha("1234")); // Saída: true
meuCofre.alterarSenha("5678");
console.log(meuCofre.verificarSenha("1234")); // Saída: false

class Conta {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const minhaConta = new Conta(1000);
minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo()); // Saída: 1500

class Carro {
    ligarMotor() {
        console.log("Motor ligado!");
    }

    dirigir() {
        console.log("Dirigindo...");
    }
}
//? 📌 Explicação:
//! O funcionamento interno do motor está "escondido". O usuário só interage com os métodos ligarMotor e dirigir.

const meuCarro = new Carro();
meuCarro.ligarMotor(); // Saída: Motor ligado!
meuCarro.dirigir();    // Saída: Dirigindo...


// 🔄 Encapsulamento e Abstração Juntos

class CaixaEletronico {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this.#saldo}`);
    }
}

const caixa = new CaixaEletronico(1000);
caixa.sacar(500);         // Saída: Saque de R$500 realizado com sucesso!
caixa.consultarSaldo();   // Saída: Saldo atual: R$500
caixa.sacar(600);         // Saída: Saldo insuficiente!

class GerenciadorDeTarefas {
    #tarefas;

    constructor() {
        this.#tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.#tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada!`);
    }

    listarTarefas() {
        console.log("Tarefas:");
        this.#tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }
}

const gerenciador = new GerenciadorDeTarefas();
gerenciador.adicionarTarefa("Estudar JavaScript");
gerenciador.listarTarefas(); // Saída: Tarefas: 1. Estudar JavaScript

class Usuario {
    #senha;

    constructor(senhaInicial) {
        this.#senha = senhaInicial;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual === this.#senha) {
            this.#senha = novaSenha;
            console.log("Senha alterada com sucesso!");
        } else {
            console.log("Senha atual incorreta!");
        }
    }
}

const usuario = new Usuario("1234");
usuario.alterarSenha("1234", "abcd");  // Saída: Senha alterada com sucesso!
usuario.alterarSenha("1234", "efgh");  // Saída: Senha atual incorreta!

//? 🛠️ Dicas Importantes
//* - **Encapsule Sempre que Possível:**
    //* Proteja os dados sensíveis e forneça métodos específicos para acessá-los.

//* Mantenha Simples:
    //* Use a abstração para esconder detalhes irrelevantes e expor apenas o que importa.

//! EXERCICIOS

// EXERCICIO 01
class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this.#saldo}`);
    }
}

const banco = new ContaBancaria(1000);
banco.sacar(500);         // Saída: Saque de R$500 realizado com sucesso!
banco.consultarSaldo();   // Saída: Saldo atual: R$500
banco.sacar(600);         // Saída: Saldo insuficiente!

// EXERCICIO 02
class User {
    #password;

    constructor(passwordInitial) {
        this.#password = passwordInitial;
    }

    updatepassword(passwordAtuality, newPassword) {
        if (passwordAtuality === this.#password) {
            this.#password = newPassword;
            console.log("Senha alterada com sucesso!");
        } else {
            console.log("Senha atual incorreta!");
        }
    }
}

const user = new User("1234");
user.updatepassword("1234", "abcd");  // Saída: Senha alterada com sucesso!
user.updatepassword("1234", "efgh");  // Saída: Senha atual incorreta!

// EXERCICIO 03
class ControleRemoto {
    #tvLigada;

    constructor() {
        this.#tvLigada = false;
    }

    ligar() {
        if (!this.#tvLigada) {
            this.#tvLigada = true;
            console.log("TV ligada!");
        } else {
            console.log("A TV já está ligada.");
        }
    }

    desligar() {
        if (this.#tvLigada) {
            this.#tvLigada = false;
            console.log("TV desligada!");
        } else {
            console.log("A TV já está desligada.");
        }
    }
}

const controle = new ControleRemoto();
controle.ligar();    // Saída: TV ligada!
controle.desligar(); // Saída: TV desligada!

// EXERCICIO 04
class CarrinhoDeCompras {
    #itens;

    constructor() {
        this.#itens = [];
    }

    adicionarItem(item) {
        this.#itens.push(item); // Adiciona o item ao array
        console.log(`Item "${item}" adicionado ao carrinho!`);
    }

    removerItem(item) {
        const index = this.#itens.indexOf(item); // Busca o item no array
        if (index > -1) {// Verifica se o item foi encontrado
            this.#itens.splice(index, 1); // Remove o item do array
            console.log(`Item "${item}" removido do carrinho!`);
        } else {
            console.log(`Item "${item}" não encontrado no carrinho!`);
        }
    }

    listarItens() {
        console.log("Itens no carrinho:");
        this.#itens.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`); // Exibe o item
        });
    }
}

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem("Maçã");
carrinho.adicionarItem("Banana");
carrinho.listarItens(); // Saída: 1. Maçã 2. Banana
carrinho.removerItem("Maçã");
carrinho.listarItens(); // Saída: 1. Banana