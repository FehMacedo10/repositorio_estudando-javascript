//! AULA 12 - HERANÇA


//? 📚 O Que é Herança?
//* A herança é um mecanismo que permite que uma classe (subclasse) receba atributos e métodos de outra classe (superclasse).

//? 💡 Exemplo no mundo real:
//* Classe Pai: Veículo (atributos: rodas, motor; métodos: acelerar, frear).
//* Classe Filha: Carro (herda atributos e métodos de Veículo, mas pode adicionar características próprias, como ar-condicionado).

class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  imprimirInformacoes() {
    console.log(`${this.marca} - ${this.modelo}`);
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, numeroPortas) {
    super(marca, modelo);
    this.numeroPortas = numeroPortas;
  }

  abrirPortas() {
    console.log(`Abrindo as ${this.numeroPortas} portas desse carro`);
  }
}

class Moto extends Veiculo {
  darGrau() {
    console.log("Dando grau");
  }
}

const carro1 = new Carro("Toyota", "Corolla", 4);
console.log(carro1.numeroPortas);
carro1.imprimirInformacoes();
carro1.abrirPortas();

const moto1 = new Moto("Honda", "Biz");
moto1.darGrau();


//? 🔍 Como Funciona a Herança no JavaScript
//* Criando a Superclasse:
  //* A superclasse é a classe que contém os atributos e métodos que serão herdados.

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log(`${this.nome} está fazendo um som!`);
  }
}

//* Criando a Subclasse:
  //* A subclasse é a classe que herda os atributos e métodos da superclasse.

class Cachorro extends Animal {
  constructor(nome, raca) {
    
    //* Chamando o Construtor da Superclasse:
    
    super(nome); //* Use a palavra-chave super para chamar o construtor da superclasse.
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome}, da raça ${this.raca}, está latindo!`);
  }
}

//? ### **Sobrescrita de Métodos (Override)**
//* Uma subclasse pode sobrescrever métodos da superclasse para personalizar seu comportamento.

class Animal1 {
  fazerSom() {
    console.log("Algum som genérico!");
  }
}

class Gato extends Animal1 {
  fazerSom() {
    console.log("Miau!");
  }
}

const meuGato = new Gato();
meuGato.fazerSom(); // Saída: Miau!

//* Sistema de Funcionários:
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  exibirInfo() {
    console.log(`${this.nome} tem um salário de R$${this.salario}.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, setor) {
    super(nome, salario);
    this.setor = setor;
  }

  exibirInfo() {
    console.log(
      `${this.nome} é gerente do setor ${this.setor}, com salário de R$${this.salario}.`
    );
  }
}

const gerente = new Gerente("Ana", 8000, "RH");
gerente.exibirInfo(); // Saída: Ana é gerente do setor RH, com salário de R$8000.

class Animal2 {
  mover() {
    console.log("O animal está se movendo.");
  }
}

class Passaro extends Animals2 {
  mover() {
    console.log("O pássaro está voando! 🦅");
  }
}

class Peixe extends Animal2 {
  mover() {
    console.log("O peixe está nadando! 🐟");
  }
}

const passaro = new Passaro();
const peixe = new Peixe();
passaro.mover(); // Saída: O pássaro está voando! 🦅
peixe.mover();   // Saída: O peixe está nadando! 🐟

//? 🛠️ Dicas Importantes
//* - **Use a Herança com Moderação:**
  //* Nem tudo precisa ser resolvido com herança. Às vezes, compor objetos é uma solução mais adequada.
//* Cuidado com Sobrescrita:
  //* Certifique-se de que sobrescrever métodos não cause comportamento inesperado.
//* Aproveite a Reutilização de Código:
  //* Herança é ótima para evitar duplicação, mas mantenha as classes coesas e com responsabilidades claras.

//! EXERCICIOS

// EXERCICIO 01
class Forma {
  calcularArea() {
    console.log("Método calcularArea() deve ser implementado na subclasse.");
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio * this.raio;
  }
}

const quadrado = new Quadrado(4);
console.log(`Área do quadrado: ${quadrado.calcularArea()}`); // Saída: Área do quadrado: 16

const circulo = new Circulo(3);
console.log(`Área do círculo: ${circulo.calcularArea()}`); // Saída: Área do círculo: 28.274333882308138

// EXERCICIO 02
class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}.`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}.`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  exibirSaldo() {
    console.log(`Saldo atual: R$${this.saldo}.`);
  }
}

class ContaPoupanca extends Conta {
  constructor(saldo, taxaJuros) {
    super(saldo);
    this.taxaJuros = taxaJuros;
  }

  adicionarJuros() {
    const juros = this.saldo * this.taxaJuros / 100;
    this.saldo += juros;
    console.log(`Juros de R$${juros} adicionados. Saldo atual: R$${this.saldo}.`);
  }
}

const contaPoupanca = new ContaPoupanca(1000, 1);
contaPoupanca.exibirSaldo(); // Saída: Saldo atual: R$1000.
contaPoupanca.adicionarJuros(); // Saída: Juros de R$10 adicionados. Saldo atual: R$1010.
contaPoupanca.depositar(500); // Saída: Depósito de R$500 realizado. Saldo atual: R$1510.
contaPoupanca.sacar(200); // Saída: Saque de R$200 realizado. Saldo atual: R$1310.
