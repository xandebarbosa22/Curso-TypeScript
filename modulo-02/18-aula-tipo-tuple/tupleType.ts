// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Alexandre Barbosa', 'Back-end Web Developer', 21];
// pessoa = [21, 'Alexandre Barbosa', 'Back-end Web Developer'];

console.log(pessoa);

// ==> Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Alexandre Barbosa', 'Back-end Web Developer', 21];

console.log(pessoa1[1]);

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)

let pessoa2: [nome: string, posicao: string, idade: number] = ['Alexandre Barbosa', 'Back-end Web Developer', 21];

console.log(pessoa2);

// ==> Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Morango'];

console.log(...listaFrutas);

// ==> Exemplo 05 - Lista Heterogênea de Tupla

// ==> Exemplo 06 - Uso de função com Tuplas

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função