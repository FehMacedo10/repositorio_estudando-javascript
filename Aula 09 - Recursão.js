//! AULA - RECURSÃO

//? A recursão é uma técnica onde uma função se chama repetidamente até atingir uma condição que interrompa essa chamada.

//? 🛠️ Cuidados com a Recursão

//* 1. **Garanta o Caso Base:**
    //* Sempre defina uma condição para terminar a recursão, ou você pode causar um **estouro de pilha**.  
//* 2. **Evite Recursões Profundas:**
    //* Se o problema envolver muitas chamadas, prefira usar um loop para evitar problemas de desempenho.
//* 3. **Compare com Iteração:**
    //* Nem todo problema precisa de recursão. Compare a eficiência da recursão com um loop antes de escolher.

//* FAÇA UMA FUNCÃO, QUE RECEBE UM NÚMERO E CONTA REGRESSIVAMENTE
//* COMEÇANDO DESSE NÚMERO E INDO ATÉ O ZERO

function contarRegressivo(numero) {
    if (numero == 0) {
        console.log("FIM!");
        return;
    }

    console.log(numero);
    contarRegressivo(numero - 1); // A função chama a si mesma
}

contarRegressivo(5);

// Exemplo de função recursiva para calcular a potência de um número
function potencia(base, expoente) {
    if (expoente === 0) return 1; // Caso base
    return base * potencia(base, expoente - 1); // Chamada recursiva
}

console.log(potencia(2, 3)); // Saída: 8 (2^3)

// Exemplo de função recursiva para inverter uma string
function inverterString(str) {
    if (str === "") return ""; // Caso base
    return inverterString(str.slice(1)) + str[0]; // Chamada recursiva
}

console.log(inverterString("recursão")); // Saída: "oãsruceR"

//! EXERCICIOS

// EXERCICIO 01
function contagem(numero) {
    if (numero == 0) {
        console.log("FIM!");
        return;
    }

    console.log(numero);
    contagem(numero - 1);
}   

contagem(10); // Saída: 10, 9, 8, 7... FIM!

// EXERCICIO 02
function fatorial(n) {
    if (n === 0) {
        return 1; // Caso base
    }
    
    return n * fatorial(n - 1); // Chamada recursiva
}

console.log(fatorial(5)); // Saída: 120 (5 * 4 * 3 * 2 * 1)

// EXERCICIO 03
function somaArray(array) {
    // Caso base: se o array está vazio, retorna 0
    if (array.length === 0) {
        return 0;
    }
    // Passo recursivo: soma o primeiro elemento com a soma do restante do array
    return array[0] + somaArray(array.slice(1));
}

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5];
console.log(somaArray(numeros)); // Saída: 15

// EXERCIO 04
function isPalindrome(word) {
    // Função base: se a palavra tiver 0 ou 1 letra, é um palíndromo
    if (word.length <= 1) {
        return true;
    }
    
    // Verifica se a primeira e a última letras são diferentes
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
    
    // Chamada recursiva: verifica o restante da palavra sem as extremidades
    return isPalindrome(word.slice(1, -1));
}

// Exemplo de uso
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true

// EXERCICIO 05
function fibonacci(n) {
    if (n <= 0) return 0; // Caso n seja 0 ou negativo, retorna 0
    if (n === 1) return 1; // Base da sequência: F(1) = 1

    let fib = [0, 1]; // Inicializa os dois primeiros termos da sequência
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n]; // Retorna o n-ésimo termo
}

// Exemplo de uso
console.log(fibonacci(10)); // Saída: 55

// EXERCIIO 06
function listarArquivos(diretorio) {
    for (let item of diretorio) {
        if (Array.isArray(item)) {
            listarArquivos(item); // Chamada recursiva
        } else {
            console.log(item); // Arquivo
        }
    }
}

let arquivos = ["index.html", ["css", "style.css"], ["js", "script.js"]];
listarArquivos(arquivos);
  // Saída:
  // index.html
  // css
  // style.css
  // js
  // script.js