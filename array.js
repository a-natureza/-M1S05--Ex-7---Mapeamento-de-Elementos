
const prompt = require('prompt-sync')({sigint: true});
// Criando o array numeros inicialmente vazio
let numeros = [];

// Solicitando ao usuário para inserir cinco números
console.log("Por favor, insira 5 números inteiros.");

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Número ${i + 1}: `);
    // Convertendo a entrada para inteiro e adicionando ao array
    numeros.push(parseInt(numero, 10));
}

// Utilizando um loop for para imprimir cada número do array no console
console.log("Os números inseridos são:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


// Calculando a soma dos elementos do array usando reduce
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

// Imprimindo a soma no console
console.log(`A soma de todos os números é: ${soma}`);
// Suponha que o array numeros já foi preenchido com cinco números inteiros
// Exemplo: let numeros = [5, 3, 1, 4, 2];

// Criando um novo array numerosOrdenados com os mesmos elementos de numeros
let numerosOrdenados = [...numeros];

// Ordenando o array numerosOrdenados em ordem crescente
numerosOrdenados.sort((a, b) => a - b);

// Imprimindo o array ordenado no console
console.log("Números ordenados em ordem crescente:");
console.log(numerosOrdenados);
// Filtrando os números pares do array numeros
let pares = numeros.filter(numero => numero % 2 === 0);

// Imprimindo o array de números pares no console
console.log("Números pares:");
console.log(pares);

// Suponha que o array numeros já foi preenchido com cinco números inteiros
// Exemplo: let numeros = [1, 2, 3, 4, 5];

// Criando um novo array quadrados usando map para elevar cada número ao quadrado
let quadrados = numeros.map(numero => numero * numero);

// Imprimindo o array de quadrados no console
console.log("Quadrados dos números:");
console.log(quadrados);
