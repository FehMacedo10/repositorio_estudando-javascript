//! AULA 7 - FUNÇÕES

//?📚 O Que é uma Função?**

//* Uma **função** é um bloco de código que realiza uma tarefa específica. Você pode pensar nela como um **mini-programa** dentro do seu programa principal.

function darBoaTarde(nome) {
    console.log(`Boa tarde!, ${nome}!`);
}

darBoaTarde("Felipe");
darBoaTarde("Solange");
darBoaTarde("José");

function somar(numeroA, numeroB) {
    return numeroA + numeroB;
}

let resultado = somar(1, 2);
console.log(resultado);

function calculadora(A, B, operacao) {
    switch (operacao) {
        case '+':
            return A + B;
        case '-':
            return A - B;
        case '*':
            return A * B;
        case '/':
            return A / B;
        default:
            console.log("Operação Inválida");
            break;
    } 
}

let result = calculadora(10, 2, '-');
console.log(result);

// Declaração de Função (Function Declaration):
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));  // Saída: 5

// Expressão de Função (Function Expression):
const multiplicar = function(a, b) {
    return a * b;
}
console.log(multiplicar(4, 5));  // Saída: 20

//  Arrow Function (ES6):
const dividir = (a, b) => a / b;

console.log(dividir(10, 2));  // Saída: 5

// Funções com Parâmetros:
// Parâmetros são como "ingredientes" que a função precisa para funcionar.
function cumprimentar(nome) {
    return `Olá, ${nome}!`;
}

console.log(cumprimentar("João"));  // Saída: Olá, João!

// Funções Sem Retorno:
// Nem todas as funções precisam retornar um valor.
function exibirMensagem(mensagem) {
    console.log(mensagem);
}

exibirMensagem("Bem-vindo ao curso!");  // Saída: Bem-vindo ao curso!

// Funções com Valor Padrão:
// Você pode definir valores padrão para os parâmetros.
function somar(a = 0, b = 0) {
    return a + b;
}

console.log(somar(5));  // Saída: 5 (b = 0 por padrão)

// Funções de Alta Ordem
// Funções de alta ordem são aquelas que recebem outras funções como argumentos ou retornam funções.
function calcular(a, b, operacao) {
    return operacao(a, b);
}

const soma = (a, b) => a + b;
const multi = (a, b) => a * b;

console.log(calcular(5, 3, somar));       // Saída: 8
console.log(calcular(5, 3, multiplicar)); // Saída: 15

//! EXERCICIOS

// EXERCÍCIO 01
function dobro(numA) {
    return numA * 2;
}

console.log(dobro(10)); // Saída: 20

// Arrow Function
const numeroDobro = (numeroA) => numeroA * 2;
console.log(numeroDobro(10)); // Saída: 20

// EXERCÍCIO 02
function boasVindas(nome) {
    console.log(`Bem vindo, ${nome}!`);
}
boasVindas("Felipe"); // Bem vindo Felipe!

// Arrow Function
const bemVindo = (nome) => console.log(`Bem vindo a nossa casa ${nome}!`);
bemVindo("Felipe"); // Saída: Bem vindo a nossa casa Felipe

// EXERCÍCIO 03
function maior(A, B) {
    if (A > B) {
        return A;
    } else if (B > A) {
        return B;
    } else {
        console.log("Os 2 números são iguais");
    }
}

console.log(maior(3, 4)); // Saída: 4

// EXERCÍCIO 04
function media (A, B, C) {
    return (A + B + C) / 3;
}
console.log(media(2, 2, 2)); // Saída: 2

// Arrow Function
const funcaoMedia = (A, B, C) => (A + B + C) / 3;
console.log(funcaoMedia(3, 4, 3)); //Saída: 3,333...

// EXERCÍCIO 05
function somaArray (numbers = []) {
    let resultadoSoma = 0; // Declarando a variável para armazenar o resultado da soma
    for (let i = 0; i < numbers.length; i++) {
        resultadoSoma += numbers[i]; // Somando cada elemento do array
    }
    
    return resultadoSoma;
}

let number = []
number.push(1);
number.push(2);
number.push(3);
console.log(number) // Saída: [1, 2, 3]
console.log(somaArray(number)); // Saída: 6



// EXERCÍCIO 06
function string (palavra) {
    return palavra.length;
}

console.log(string("Felipe")); // Saída: 6

// Arrow Function
const tamanhoDaPalavra = (palavra) => palavra.length;
console.log(string("Solange")); // Saída: 7