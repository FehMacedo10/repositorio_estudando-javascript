//! AULA 06 - ARRAYS

//? 📚 O Que é um Array?

//* Um **array** é uma lista ordenada de valores que podem ser de qualquer tipo: números, strings, objetos, ou até outros arrays.


//! MÉTODOS E PROPRIEDADES DE ARRAYS

//* push() - Adiciona um elemento ao final
let frutas = ["Maça", "Banana", "Laranja"];
console.log(frutas);
frutas.push("Abacaxi");
frutas.push("Melancia");
frutas.push("Pêra");
console.log(frutas); // Maça, Banana, Laranja, Abacaxi, Melancia, Pêra

//* pop() - Remove o último elemento
frutas.pop();
console.log(frutas); // Maça, Banana, Laranja, Abacaxi, Melancia

//* shift() - Remove o primeiro elemento
frutas.shift();
console.log(frutas); 

//* unshift() - Adiciona um elemento no início
frutas.unshift("Morango");
console.log(frutas); // Morango, Banana, Laranja, Abacaxi, Melancia

//* length - Retorna o tamanho do Array
console.log(frutas.length); // 5

//* indexOf() - Retorna o índice de um valor
console.log(frutas.indexOf("Abacaxi")); // 3

//* slice() - Retorna parte de um Array
console.log(frutas.slice(1, 3)); // Banana, Laranja

//* splice() - Adiciona/Remove Elementos
frutas.splice(0, 2, "Uva");
console.log(frutas); // Uva, Laranja, Abacaxi, Melancia

//* Junta os elementos em uma String
console.log(frutas.join(" ")); // Uva Laranja Abacaxi Melancia

for(let i = 0; i < frutas.length; i++) {
    let frutaDoLoop = frutas[i];
    console.log(`Minha fruta preferida é ${frutaDoLoop}`);
}

//? 🛠️ Dicas Importantes
//* Acessar o Último Elemento:
//* Use array[array.length - 1] para acessar o último elemento de um array.

let numeros4 = [5, 10, 15];
console.log(numeros4[numeros4.length - 1]);  // Saída: 15

//* Cuidado com Índices Inválidos:
//* Acessar um índice que não existe retorna undefined:

let frutas4 = ["Maçã", "Banana"];
console.log(frutas4[5]);  // Saída: undefined


//! EXERCÍCIOS

// EXERCÍCIO 01
let cores = ["Azul", "Branco", "Preto"];
cores.push("Cinza");
console.log(cores); // Azul, Branco, Preto, Cinza

// EXERCÍCIO 02
let compras = ["Azeitona", "Macarrão", "Feijão", "Arroz"];
for (let i = 0; i < compras.length; i++) {
    console.log(compras[i]); // Azeitona, Macarrão, Feijão, Arroz
}

// EXERCÍCIO 03
let numeros = [10, 20, 30, 40, 50];
let resultado = numeros.slice(3, 5);
console.log(resultado); // 40, 50


// EXERCÍCIO 04
let tarefas = ["Limpar a Casa", "Lavar a Louça", "Estudar"];
tarefas.shift();
console.log(tarefas); // Lavar a Louça, Estudar

// EXERCÍCIO 05
let eletronicos = ["Computador", "Televisão", "Videogame", "Celular"];
eletronicos.splice (2, 1, "Substituído");
console.log(eletronicos); // Computador, Televisão, Substituído, Celular

// EXERCÍCIO 05
let palavras = ["F", "E", "L", "I", "P", "E"];
let result = palavras.join("");
console.log(result); // FELIPE