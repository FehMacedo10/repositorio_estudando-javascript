//! AULA 05 - LOOPS

//? 📚 O Que são Laços de Repetição?

//* Laços de repetição, ou **loops**, são usados para executar um bloco de código várias vezes, com base em uma condição.

//* Exemplo no mundo real:

//* Enviar uma mensagem para todos os convidados de uma festa.
//* Contar quantos itens existem em uma lista de compras.


//? 🔍 Tipos de Loops no JavaScript
//* O loop for é usado quando você sabe exatamente quantas vezes deseja repetir o código.
//* O loop while repete o código enquanto uma condição for verdadeira.
    //* 📌 **Quando usar:**
    //* Quando você não sabe quantas vezes o loop vai rodar.
//* do..while -> Semelhante ao while, mas garante que o código seja executado pelo menos uma vez antes de verificar a condição.
    //* 📌 **Quando usar:**
    //* Quando você precisa executar o código pelo menos uma vez, independentemente da condição.

//? 🔄 Controlando o Loop
//* break -> Interrompe o loop antes de completar todas as iterações.
//* continue -> Pula para a próxima iteração sem executar o restante do código na atual.

for (let indice = 1; indice <= 10; indice++ ) {
    console.log("Número", indice);
};

for (let i = 1; i <= 10; i++ ) {
    if (i == 5)
        break;
    console.log("Número", i);
};

let contador = 0;
while (contador < 10) {
    console.log("Contador", contador);
    
    contador++;
};

// ITERANDO SOBRE UM ARRAY
let frutas = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Saída: Maçã, Banana, Laranja
};

// SOMANDO NÚMEROS DE 1 A 10
let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += i;
};
console.log(`Soma total: ${soma}`); // Saída: Soma total: 55

// BUSCANDO UM VALOR EM UMA LISTA
let numeros = [3, 8, 12, 5, 10];
let busca = 12;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === busca) {
        console.log(`Número ${busca} encontrado na posição ${i}!`);
        break;
    }
} // Saída: Número 12 encontrado na posição 2!

//! EXERCÍCIOS

// EXERCICIO 01
for (let i = 1; i <= 10; i++ ) {
    if (i == 5)
        break;
    console.log("Número", i); // Saída: Número 1, Número 2, Número 3 ...
};

// EXERCICIO 02
let nomes = ["Felipe", "Solange", "José"];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]); // Saída: Felipe, Solange, José
};

// EXERCICIO 03
let listaNumeros = [3, 5, 15, 7, 10];
for (let i = 0; i < numeros.length; i++) {
    if (listaNumeros[i] > 10) {
        console.log(`Número ${listaNumeros[i]} encontrado na posição ${i}!`);
        break;
    }
} // Saída: Número 15 encontrado na posição 2!

// EXERCICIO 04
let c = 11;
while (c > 0) {
    c--;
    console.log(c);
}
console.log("Lançamento!"); // Saída: 10, 9, 8 ... Lançamento!


// EXERCICIO 05
let fatorial = 5;
let resultadoFatorial = 1
while(fatorial > 0) {
    resultadoFatorial *= fatorial;
    fatorial--;
}
console.log("Resultado Fatorial = " + resultadoFatorial); // Saída: Resultado Fatorial = 120