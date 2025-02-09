//! AULA 08 - MATRIZES

//? 📚 O Que é uma Matriz?**

//* Uma matriz é um **array de arrays**, ou seja, um array onde cada elemento também é um array.


//? 🔍 Como Acessar Elementos de uma Matriz

//* 1. O primeiro índice indica a linha.
//* 2. O segundo índice indica a coluna.

//* 📌 Dica: Os índices começam em 0, assim como nos arrays.

let matrizes = [[1, 2],[3, 4]];
console.log(matrizes[0]);
console.log(matrizes[0][1]);


// Iterar Sobre uma Matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento [${i}][${j}]: ${matriz[i][j]}`);
    }
}

//  Somar Todos os Elementos
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

    let soma = 0;
    for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
        soma += matriz[i][j];
    }
}

console.log(`Soma total: ${soma}`);  // Saída: 45

// Encontrar o Maior Valor
let matriz2 = [
    [1, 20, 3],
    [4, 5, 6],
    [7, 8, 90]
];

    let maior = matriz2[0][0];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz2[i].length; j++) {
            if (matriz2[i][j] > maior) {
                maior = matriz2[i][j];
            }
        }
    }

console.log(`Maior valor: ${maior}`);  // Saída: 90

//! EXERCICIOS

// EXERCICIO 01
let matrizTresPorTres = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrizTresPorTres[1][2]); // Saída: 6

// EXERCÍCIO 02
let matrizSoma = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;
    for (let i = 0; i < matrizSoma.length; i++) {
        for (let j = 0; j < matrizSoma[i].length; j++) {
        sum += matrizSoma[i][j];
    }
}

console.log(`Soma total: ${sum}`);  // Saída: 45


// EXERCÍCIO 03
let tabuleiro = [];
for (let i = 0; i < 8; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 8; j++) {
        tabuleiro[i][j] = (i + j) % 2 === 0 ? "Branco" : "Preto";  // Branco ou preto
    }
}
console.log(tabuleiro);

// EXERCÍCIO 04
function contarPares(matrizPares) {
    let count = 0; // Inicializa a variável para contar números pares

    for (let i = 0; i < matrizPares.length; i++) {
        for (let j = 0; j < matrizPares[i].length; j++) {
            if (matrizPares[i][j] % 2 === 0) {
                count++; // Incrementa o contador para cada número par encontrado
            }
        }
    }

    console.log(count); // Imprime o total de pares
    return count; // Retorna o total de pares
}

const matrizPares = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

contarPares(matrizPares);

// EXERCÍCIO 05
let matrizSubstituir = [
    [5, 12, 7],
    [15, 9, 3],
    [10, 20, 8]
];

for (let i = 0; i < matrizSubstituir.length; i++) {
    for (let j = 0; j < matrizSubstituir[i].length; j++) {
        if (matrizSubstituir[i][j] > 10) {
            matrizSubstituir[i][j] = 0;
        }
    }
}

console.log(matriz);

// EXERCÍCIO 06
function multiplicarMatrizPorValor(matrizMult, valor) {
    return matrizMult.map(linha => linha.map(elemento => elemento * valor));
}


const matrizMult = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const valor = 2;

const matrizMultiplicada = multiplicarMatrizPorValor(matriz, valor);
console.log(matrizMultiplicada);
// Saída: 
// [
//   [2, 4, 6],
//   [8, 10, 12],
//   [14, 16, 18]
// ]
