//! CLASSES E OBJETOS

//? O Que São Classes e Objetos?
//* Classe: É o "molde" ou "modelo" que define as características (atributos) e comportamentos (métodos) de um objeto.
//* Objeto: É a instância de uma classe, ou seja, algo criado a partir do molde.

//* Classe: Carro (com atributos como marca, modelo e cor, e métodos como acelerar e frear).
//* Objeto: Um carro específico, como "Toyota Corolla branco".


//? 🔄 Atributos e Métodos**

//* - **Atributos:** São as características do objeto.
//* - **Métodos:** São as funções dentro da classe que representam ações.

class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca; // Atributo
        this.modelo = modelo;
        this.cor = cor;
    }

    acelerar() { // Método
        console.log(`${this.marca} - ${this.modelo} está acelerando`)
    }
}

const carro1 = new Carro("Toyota", "Corolla", "Branco");
console.log(carro1);
console.log(carro1.marca); 
carro1.acelerar(); // Saída: Toyota - Corolla está acelerando

const carro2 = new Carro("Honda", "Civic", "Preto");
console.log(carro2);
console.log(carro2.modelo);
carro2.acelerar();

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("Felipe", 25);
pessoa1.apresentar(); // Saída: Olá, meu nome é Felipe e tenho 25 anos.

class Animal {
    constructor(nome, especie) {
        this.nome = nome;  // Atributo
        this.especie = especie;
    }

    fazerSom() { // Método
        console.log(`${this.nome} está fazendo um som!`);
    }
}

const cachorro = new Animal("Rex", "Cachorro");
cachorro.fazerSom(); // Saída: Rex está fazendo um som! 

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes() {
        console.log(`${this.nome} custa R$${this.preco}.`);
    }
}

const produto1 = new Produto("Celular", 1500);
produto1.exibirDetalhes(); // Saída: Celular custa R$1500.

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
      return this.largura * this.altura;
    }
}

const retangulo = new Retangulo(5, 10);
console.log(`Área: ${retangulo.calcularArea()}`); // Saída: Área: 50

class BancoDeDados {
    constructor() {
        this.dados = [];
    }

    adicionar(dado) {
        this.dados.push(dado);
        console.log("Dado adicionado!");
    }

    listar() {
        console.log(this.dados);
    }
}

const bd = new BancoDeDados();
bd.adicionar("Cliente 1");
bd.listar(); // Saída: ["Cliente 1"]

//! EXERCÍCIOS

// EXERCICIO 01
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    indicarUmLivro() {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`);
    }
}

const livro = new Livro("The Walking Dead", "Robert Kirkman", "2003");
livro.indicarUmLivro() // Saída: Livro: The Walking Dead, Autor: Robert Kirkman, Ano: 2003

// EXERCÍCIO 02
class ContaBancaria {
    constructor(saldo, valor) {
        this.saldo = saldo;
        this.valor = valor;
    }

    depositar() {
        this.saldo += this.valor;
        console.log(`Saldo Disponível após Depósito: ${this.saldo}`);
    }

    saque() {
        this.saldo -= this.valor;
        console.log(`Saldo Disponível após Saque: ${this.saldo}`);
    }
}

const conta = new ContaBancaria(1000, 200);
console.log(`Saldo Disponível: ${conta.saldo}`); // Saída: Saldo Disponível: 1000
conta.saque(); // Saída: Saldo Disponível após Saque: 800
conta.depositar(); // Saída: Saldo Disponível após Depósito: 1000

// EXERCÍCIO 02
class Pessoa1 {
    constructor(nome) {
        this.nome = nome;
    }

    bemVindo() {
        console.log(`Bem vindo, ${this.nome}`);
    }
}
const minhaPessoa = new Pessoa1("Felipe");
minhaPessoa.bemVindo(); // Saida: Bem vindo, Felipe

// EXERCÍCIO 04
class Calculadora {
    constructor (A, B, operacao) {
        this.A = A;
        this.B = B;
        this.operacao = operacao;
    }

    calculadora() {
        switch (this.operacao) {
            case '+':
                return this.A + this.B;
            case '-':
                return this.A - this.B;
            case '*':
                return this.A * this.B;
            case '/':
                return this.A / this.B;
            default:
                console.log("Operação Inválida");
                break;
        } 
    }
}

const calcular = new Calculadora (10, 2, '*');
console.log(calcular.calculadora()); // Saída: 20

// EXERCICIO 05
class Agenda {
    constructor(nome, numero) {
        this.nome = nome;
        this.numero = numero;
    }

    exibirContato () {
        console.log(`Contato Salvo, nome na Agenda: ${this.nome} e número do ${this.nome}: ${this.numero}`);
    }
}

const primeiroNome = new Agenda ("Felipe", 119400289222);
console.log(primeiroNome.exibirContato());