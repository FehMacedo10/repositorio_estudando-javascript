//! AULA 04 - STRING

//? 📚 O Que é uma String?

//* Uma string é basicamente um texto entre aspas. No JavaScript, você pode usar três tipos de aspas:
//* Aspas simples 'Texto'
//* Aspas duplas "Texto"
//* Template literals (crase) `Texto`

// CONCATENAR STRINGS
let nome = 'Felipe';
let sobrenome = "Macedo";
let saudacao = `Olá, ${nome} ${sobrenome}`;
console.log(saudacao); // Saída: Olá, Felipe Macedo

//* ACESSAR CARACTERES
let palavra = "Programação";
console.log(palavra[0]);  // Saída: P
console.log(palavra[4]);  // Saída: r

//* OBTER O TAMANHO DA STRING
let texto = "JavaScript";
console.log(texto.length);  // Saída: 10

//! MÉTODOS ÙTEIS PARA MANIPULAR STRING

//* toUpperCase() - Transforma tudo em maiúsculas
let letras = "abc";
let alfabeto = letras.toUpperCase();
console.log(alfabeto); // Saída: ABC

//* toLowerCase() - Transforma tudo em minúsculas
alfabeto = letras.toLowerCase();
console.log(alfabeto); // Saída: abc

//* trim() - Remove espaços do início e do fim
let text = "  texto  ";
let newText = text.trim();
console.log(newText); // Saída: texto

//* includes() - Verifica se contém um texto específico
let email = "fmacedoribeiro@outlook.com";
if (email.includes('@')) {
    console.log("Email Válido!");
} else { 
    console.log("Email Inválido!");
}; // Saída: Email Válido

//* startsWith() - Verifica se começa com um texto
let linguagem = "JavaScript";
let verificacaoTexto = linguagem.startsWith("Java");
console.log(verificacaoTexto); // Saída: True

//* endsWith() - Verifica se termina com um texto
verificacaoTexto = linguagem.endsWith("Script");
console.log(verificacaoTexto); // Saída: True

//* slice() - Extrai uma parte da String
verificacaoTexto = linguagem.slice(0, 4);
console.log(verificacaoTexto); // Saída: Java

//* replace() - Substitui parte do texto
let novaSaudacao = saudacao.replace("Olá", "Boa Tarde");
console.log(novaSaudacao); // Saída: Boa Tarde, Felipe Macedo

//! EXERCICIOS

// EXERCICIO 01
const nome1 = "Felipe Macedo Ribeiro";
let newName = nome1.slice(0,6);
console.log(newName) // Saída: Felipe

// EXERCICIO 02
if (linguagem.startsWith("Java")) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}; // Verdadeiro

// EXERCICIO 03
const word = "   minha história de vida      ";
let newWord = word.trim().toUpperCase();
console.log(newWord); // MINHA HISTÓRIA DE VIDA

// EXERCICIO 04
const frase = "Houve um erro no sistema";
let novaFrase = frase.replace("erro", "correção");
console.log(novaFrase); // Saída: Houve uma correção no sistema

// EXERCICIO 05
const frase2 = "Eu amo JavaScript";
console.log(frase2[0]); // E
console.log(frase2[1]); // u
console.log(frase2[3]); // a
console.log(frase2[4]); // m
console.log(frase2[5]); // o

// EXERCICIO 06
const site = "www.google.com";
console.log(site.startsWith("https://"));  // Saída: false
console.log(site.endsWith(".com"));  // Saída: true