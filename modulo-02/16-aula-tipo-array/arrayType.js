"use strict";
// ==> Exemplo 01 - Uso de Colchetes:
let frutas = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Morango'];
;
console.log(frutas[2]);
// ==> Exemplo 02 - Array Object:
let frutas1 = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Morango'];
;
console.log(frutas1[3]);
// ==> Exemplo 03 - Adicionando mais strings com método "Push":
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
// ==> Exemplo 04 - Identificar tamanho do array - método "length":
let idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);
// ==> Exemplo 05 - Exemplo de Array com Spread Operator:
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// ==> Exemplo 06 - Exemplo de Array com laço de iteração:
let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
