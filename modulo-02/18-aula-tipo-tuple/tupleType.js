"use strict";
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Alexandre Barbosa', 'Back-end Web Developer', 21];
// pessoa = [21, 'Alexandre Barbosa', 'Back-end Web Developer'];
console.log(pessoa);
// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Alexandre Barbosa', 'Back-end Web Developer', 21];
console.log(pessoa1[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
let pessoa2 = ['Alexandre Barbosa', 'Back-end Web Developer', 21];
console.log(pessoa2);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Morango'];
console.log(...listaFrutas);
// ==> Exemplo 05 - Lista Heterogênea de Tupla
// ==> Exemplo 06 - Uso de função com Tuplas
// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função
