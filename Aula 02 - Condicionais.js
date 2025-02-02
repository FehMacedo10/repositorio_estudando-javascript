//! AULA 2 - CONDICIONAIS

//? 📚 O Que são Estruturas Condicionais?

//* As estruturas condicionais permitem que o código execute diferentes blocos de instruções dependendo de condições específicas.

//* No JavaScript, as principais formas de tomar decisões são:

// 1. **`if` e `else`:** Executa um bloco de código se uma condição for verdadeira, e outro bloco caso contrário.
// 2. **`else if`:** Permite testar várias condições.
// 3. **`switch`:** Ideal para quando você precisa verificar muitas possibilidades de forma mais limpa.

let hora = 20;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");   
};

let numero = 7;
if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
} else {
    console.log(`${numero} é ímpar.`);
} // Saída: 7 é ímpar

let nota = 85;
if (nota >= 90) {
    console.log("Aprovado com A!");
} else if (nota >= 70) {
    console.log("Aprovado com B.");
} else {
    console.log("Reprovado.");
} // Saída: Aprovado com B

let diaDaSemana = 2;
switch(diaDaSemana) {
    case 1: 
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terça-Feira");
        break;
    case 3: 
        console.log("Quarta-Feira");
        break;
    default:
        console.log("Dia Inválido");
};

let opcao = "pagar";

switch (opcao) {
    case "pagar":
        console.log("Processando pagamento...");
        break;
    case "cancelar":
        console.log("Cancelando pedido...");
        break;
        default:
        console.log("Opção inválida!");
} // Saída: Processando pagamento...

//* OPERADOR TERNÁRIO
let idade = 18;
let mensagem = idade >= 18 ? "Pode Entrar!" : "Entrada Proibida";
console.log(mensagem);

//! EXERCÍCIOS

// EXERCÍCIO 1
let hour = 10;
if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!"); 
}; // Saída: Bom dia!

// EXERCÍCIO 2
let mes = 1;
switch(mes) {
    case 1: 
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3: 
        console.log("Março");
        break;
    default:
        console.log("Opção Inválida");
}; // Saída: Janeiro

// EXERCÍCIO 3
let age;
let message = age >= 18 ? "Pode Dirigir!" : "Não Pode Dirigir";
console.log(message); // Saída: Pode Dirigir!

// EXERCÍCIO 4
let saldo = 10;
let verificacao = saldo > 0 ? "Saldo Positivo" : "Saldo Negativo";
console.log(verificacao); // Saída: Saldo Positivo

// EXERCÍCIO 5
let numeroEscolhido = 0;
if (numeroEscolhido > 0) {
    console.log("Positivo");
} else if (numeroEscolhido < 0) {
    console.log("Negativo");
} else {
    console.log("Nulo");   
}; // Saída: Nulo

// EXERCÍCIO 6
let opcaoEscolhida = 2;
switch(opcaoEscolhida) {
    case 1: 
        console.log("1 - Sacar");
        break;
    case 2:
        console.log("2 - Depositar");
        break;
    case 3: 
        console.log("3 - Saldo");
        break;
    default:
        console.log("Opção Inválida");
}; // 2 - Depositar

