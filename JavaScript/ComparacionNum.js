const prompt = require('prompt-sync')();

function Ordenar(num1, num2, num3){
    const numeros = [num1, num2, num3 ];
    const maxOrder = numeros.sort((a, b) => a - b);
    console.log(maxOrder.reverse());
    console.log(numeros.sort((a, b) => a - b));
    
    if (num1 === num2 || num2 === num3 || num3 === num1) {
        console.log('Hay numeros iguales');
    }
}

let num1 = parseInt(prompt('Escribe el primer numero: '));
let num2 = parseInt(prompt('Escribe el segundo numero: '));
let num3 = parseInt(prompt('Escribe el tercer numero: '));

Ordenar(num1, num2, num3);