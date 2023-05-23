// // ==> Exemplo 01 - Uso de Colchetes:

// let frutas: string[] = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Morango'];
// console.log(frutas[2]);

// // ==> Exemplo 02 - Array Object:

// let frutas1: Array<string> = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Morango'];
// console.log(frutas1[3]);

// // ==> Exemplo 03 - Adicionando mais strings com método "Push":

// let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
// console.log(idiomas);
// idiomas.push('Mandarim');
// console.log(idiomas);
// idiomas.push('Italiano');
// console.log(idiomas);

// // ==> Exemplo 04 - Identificar tamanho do array - método "length":

// let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
// console.log(idiomas1.length);

// // ==> Exemplo 05 - Exemplo de Array com Spread Operator:

// let listaNumeros = [0, 1, 2, 3, 4, 5];
// listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];

// console.log(listaNumeros);

// // ==> Exemplo 06 - Exemplo de Array com laço de iteração:

let linguagensArray: string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

function somar(soma: number, soma2: number) {
    return soma + soma2;
};

function funcaoLinguagens(linguagens: object[]) {
    linguagens.map(linguagem => {
        console.log(linguagem);
    });
}

// funcaoLinguagens(linguagensArray);
funcaoLinguagens([
    {
        nome: 'Português',
        pais: 'Brasil',
        idade: 32
    },
    {
        nome: 'Inglês',
        pais: 'Inglaterra',
        idade: 64
    }, {
        nome: 'Francês',
        pais: 'França',
        idade: 1024
    }
]);