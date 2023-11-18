/* Faça um programa que calcule a área de uma circunferência,
utilizando conceitos que já vimos anteriormente, tais como,
variáveis, operadores aritméticos, concatenação, etc.
Lembre-se da estrutura dos dados (Entrada de dados, Processamento e Saída de dados)
tendo em mente que o raio da circunferência é de R = 16. */


// Este é o meu código para o desafio, o seguinte é a forma correta

// Entrada de Dados
// let raioCirc = 16
// const pi = Math.PI

// Processamento de Dados
// const area = (raioCirc * raioCirc) * pi

// Saída de Dados
// console.log(`A área da circunferência é de ${area} cm².`);

// Entrada de Dados
let raioCirc = 16

// Processamento de Dados
const area = (raioCirc * raioCirc) * Math.PI

// Saída de Dados
console.log(`A área da circunferência é de ${area.toFixed(4)} cm².`);
// O atributo .toFixed() limita a quantidade de caracteres exibidos no log