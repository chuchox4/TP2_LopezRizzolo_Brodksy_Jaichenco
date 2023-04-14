import { PI, suma, resta, multiplicacion, division } from './modules/matematica.js';

console.log(PI); // 3.14159265359

console.log(suma(2, 3)); // 5

console.log(resta(5, 2)); // 3

console.log(multiplicacion(4, 6)); // 24

console.log(division(10, 2)); // 5

const Alumno1 = new alumno("Jaichi", "46958375")
const Alumno2 = new alumno("Chucho","47069838")


console.log(alumno1.mostrar());
console.log(alumno2.mostrar());
/*let textoEntrada01 = "Escuela";

let textoEntrada02 = "ORT";

let textoSalida;


function concatInvert(t1, t2)
{
    const concatstr = t1+t2;
    const invertdidostr = concatstr.split('').reverse();

    return invertdidostr.join('');
}

textoSalida=concatInvert("escuela","ort")
console.clear();

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);/