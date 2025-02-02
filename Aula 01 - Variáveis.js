//! AULA NÚMERO 1 - VARIÁVEIS

//? O QUE É UMA VARIÁVEL?

//* Hoje vamos falar sobre **variáveis**, a base de qualquer programa em qualquer linguagem de programação. Se você já ouviu alguém dizer que uma variável é "como uma caixa onde você guarda coisas", você já está no caminho certo

//* As variáveis são essenciais porque permitem que armazenemos dados que podemos usar e modificar ao longo do programa. E aqui no **JavaScript**, elas são muito flexíveis! Vamos mergulhar nesse conceito? 🚀

//* Uma variável é um espaço na memória do computador onde você pode **armazenar informações**. Essa informação pode ser:

//? Um número 🧮
//? Uma palavra ou frase 📜
//? Uma lista 📋
//? Ou até mesmo algo mais complexo, como objetos e funções!

// DECLARANDO UMA VARIÁVEL COM LET
let nome = "Felipe"; // Você pode mudar o valor depois
let cidade;
cidade = "Mogi das Cruzes";

console.log("Olá, meu nome é", nome, "e eu moro em", cidade);   

// DECLARANDO UMA VARIÁVEL COM CONST
const age = 25; // O valor não pode ser alterado

// DECLARANDO UMA VARÍAVEL COM VAR (NÃO RECOMENDADO, MAS FUNCIONA)
var city = "São Paulo"; 

//? TIPO DE DADOS

//* String
let estado = "São Paulo";

//* Number
let idade = 25;

//*Boolean
let maiorDeIdade = true;

//*Array
let lista = [true, false, true];

//* Objeto 
let pessoa = {
    nome: "Felipe",
    cidade: "Mogi das Cruzes",
    idade: "25"
};

console.log(pessoa.nome);

//! EXEMPLOS PRÁTICOS COM VARIÁVEIS

// CALCULO SIMPLES:
let preco = 50;
let desconto = 10;
let precoFinal = preco - desconto;

console.log(precoFinal); // Saída: 40

// JUNTANDO TEXTO:
let saudacao = "Olá";
let name = "Felipe";

console.log(saudacao + ", " + nome + "!"); // Saída: Olá, Felipe!

// ACESSANDO DADOS EM ARRAYS:
let cores = ["Azul", "Vermelho", "Verde"]; 

console.log(cores[1]); // Sáida: Vermelho

//! EXERCICIOS

// EXERCÍCIO 01
let nomePessoal = "Felipe";
let idadePessoal = "25";
console.log("Meu nome é", nome, "e tenho", idade, "anos"); // Saída: Meu nome é Felipe e tenho 25 anos

// EXERCÍCIO 02
let price = 30;
let discount = 20;
let finalPrice = price - discount;
console.log(finalPrice); // Saída: 10

// EXERCÍCIO 03
let comidasFavoritas = ["Pizza", "Churrasco", "X-Bacon"];
console.log(comidasFavoritas[1]); // Saída: Churrasco

// EXERCÍCIO 04
let livro = {
    titulo: "The Walking Dead",
    autor: "Robert Kirkman",
    ano: 2003
};
console.log(livro.titulo); // Saída: The Walking Dead
console.log(livro.autor); //  Saída: Roberto Kirkman

// EXERCÍCIO 05
let estaLogado = false;
estaLogado = true;
console.log("Status de Login: " + estaLogado); // Saída: True

// EXERCÍCIO 06
const PI = 3.14;
areaCirculo = PI * Math.pow(5, 2);
console.log(areaCirculo); // Saída: 78.5