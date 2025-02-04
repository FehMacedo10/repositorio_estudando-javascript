//! AULA 3 - BOOLEANS

//? 📚 O Que São Valores Booleanos?

//* true: Representa verdadeiro.
//* false: Representa falso.
//* Eles são usados principalmente em condições para determinar o que o código deve fazer

//? 🔍 Comparações e Operadores Relacionais
//* Os valores booleanos muitas vezes são gerados a partir de comparações. Aqui estão os operadores mais comuns:

//* === Igualdade Estrita
//* !== Diferença Estrita
//* < Menor que
//* > Maior que
//* <= Menor ou igual
//* >= Maior ou igual

//? 🔄 Operadores Lógicos
//* Os operadores lógicos permitem combinar ou inverter valores booleanos:

//* && "E" lógico
//* || "OU" lógico
//* !  "NÃO" lógico

let verdadeiro = true;
let falso = false;

console.log(5 > 6); // Saída: false
console.log(6 > 5); // Saída: true
console.log(6 == 5); // Saída: false
console.log(6 <= 5); // Saída: false

let idade = 20;
let temCarteira = false;

// true || false = true
// true && false = false
if (temCarteira || idade >= 18) {
    console.log("Pode Dirigir");
} else {
    console.log("Não pode Dirigir");
}; // Saída: Pode Dirigir

let luzAcesa = false;
if (!luzAcesa) {
    console.log("A luz está apagada"); 
}; // Saída: A luz está apagada

let saldo = 100;
let temCartao = true;
if (saldo > 0 || temCartao) {
    console.log("Compra aprovada");
} else {
    console.log("Compra negada");
}; // Saída: Compra Aprovada

let estaLogado = true;
if (estaLogado) {
    console.log("Bem-vindo de volta!");
} else {
    console.log("Por favor, faça login");
}; // Saída: True

let nota = 85;
if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 70 && nota < 90) {
    console.log("Nota B");
} else {
    console.log("Reprovado");
}; // Saída: Nota B

//! EXERCÌCIOS

// EXERCICIO 01
let numero = 15
if (numero > 10 && numero < 20) {
    console.log("OK!")
}; // Saída: OK!

// EXERCIO 02
let age = 17;
if (idade >= 18) {
    console.log("Pode Votar");
} else {
    console.log("Não pode Votar");
}; // Saída: Não pode Votar

// EXERCICIO 03
let grade = 60;
if (grade >= 90) {
    console.log("Aprovado com A");
} else if (grade >= 70 && grade < 90) {
    console.log("Aprovado com B");
} else {
    console.log("Reprovado");
}; // Saída: Reprovado

// EXERCICIO 04
let balance = 200;
if (balance > 0) {
    console.log("Saldo Positivo");
} else if (balance === 0) {
    console.log("Sem saldo");
} else {
    console.log("Saldo Negativo");
}; // Saída: Saldo Positivo

// EXERCICIO 05
let lightOn = false;
if (!lightOn) {
    console.log("A luz está apagada"); 
}; // Saída: A luz está apagada