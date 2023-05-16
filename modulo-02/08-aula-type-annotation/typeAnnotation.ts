// ==> Variáveis [Type Annotations]
let nome: string = 'Alexandre Barbosa';
console.log(nome);

// ==> Arrays [Type Annotations]
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa']
console.log(animais);

// ==> Objetos [Type Annotations]
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 }
console.log(carro);

// ==> Functions [Type Annotations]
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}

console.log(multiplicarNumeros(2, 5));