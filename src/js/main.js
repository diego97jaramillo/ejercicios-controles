// 1. Verifica si un número es positivo.
console.log(Math.sign(40));
// 2. Verifica si un número es negativo.
console.log(Math.sign(-40));
// 3. Comprueba si un número es par.
const esPar = (num) => {
   return num%2 === 0
};
console.log(esPar(6));
// 4. Comprueba si un número es impar.
const esImpar = (num) => {
    return num%2 !== 0
 };
 console.log(esImpar(6));
// 5. Determina si un número es múltiplo de 5.
const esMultiplo = (num) => {
    return num%5 === 0
 };
 console.log(esMultiplo(15));
// 6. Verifica si un número es divisible entre 3.
const esDivisible = (num, numDivisor) => {
    return num%numDivisor === 0
 };
 console.log(esImpar(4,3));
// 7. Determina si un número es mayor que 100.
let numero = Number(prompt('escribe un numero: '));
console.log(numero > 100);
// 8. Verifica si un número es menor que -50.
const numero1 = Number(prompt('escribe un numero: '));
console.log(numero1 < -50);
// 9. Comprueba si un número está en el rango de 20 a 50.
numero = Number(prompt('escribe un numero: '));
if(20 < numero && numero < 50) {
    console.log('esta en el rango');
} else {'no esta'}
// 10.Determina si un número es igual a 0.
const n = 24;
console.log(n === 0);
// 11.Verifica si un número es mayor que -10 y menor que 10.
const m = 40;
if(-10 < m && m < 10) {
    console.log('esta en el rango');
} else {console.log('no esta')};
// 12.Determina si un número es un año bisiesto.
const year = Number(prompt('Que año quieres saber? '));

if (year%4 === 0 && year%100 !== 0) {
    console.log('es bisiesto');
} else if(year%100 === 0 && year%400 ===0) {
    console.log('es bisiesto');
} else {
    console.log('no es bisiesto');
};
// 13.Verifica si una persona es mayor de edad (mayor o igual a 18 años).
let edad = 22
if (edad>=18) {
    console.log('es mayor de edad');
} else {
    console.log('no es mayor de edad');
}
// 14.Verifica si un número es un cuadrado perfecto.
let num1 = 10;
let num2 = 15;
if((num1 + num2)**2 === (num1**2+2*num1*num2+num2**2)) {
    console.log('es un cuadrado perfecto');
} else {'no es un cuadrado perfecto'}
// 15.Determina si un número es un número de Fibonacci.
let ultimo = 0;
let penultimo = 0;
let i = 0;
let numeroFib = 0;
let esFib = Number(prompt('Dame un numero: '));
while (i < 101) {
    if (i === 0) {
        numeroFib = i;
        i++
    } else if (i === 1 && penultimo === 0) {
        penultimo = i;
        ultimo = i;
        numeroFib = i;
        i++
    } else if (i === (ultimo + penultimo)) {
        penultimo = ultimo;
        ultimo = i;
        numeroFib = i;
        if (esFib === numeroFib) {
            console.log('es fibonacci');
            break
        };
        i++
    } else {
        i++
    }
};
// 16.Verifica si un número es una potencia de 2.
let esPot = Number(prompt('danos el numero: '))
console.log(Math.log2(esPot));
// 17.Determina si un número es un palíndromo.
const cadena = 'oso';
let cadenaPal = '';
for(let i=0;i<cadena.length;i++) {

    cadenaPal = cadena[i] + cadenaPal;
}

if (cadenaPal === cadena) {
    console.log('es un palindromo');
} else {
    console.log('no es un palindromo');
}

// 18.Verifica si una cadena de texto contiene la palabra "JavaScript".
const frase = 'estoy estudiando codigo en Javascript';
console.log(frase.includes('Javascript'));
// 19.Determina si una cadena tiene más de 10 caracteres.
let cadena10char = prompt('ingrese su cadena: ');

if (cadena10char.length > 10) {
    console.log('tiene más de 10 caracteres');
} else {
    console.log('no tiene los suficientes');
};
// 20.Verifica si una cadena de texto está en minúsculas.
let letras = "abcdefghijklmnñopqrstuvwxyz";
let cadenaPropmt = prompt('escribe una palabra: ');
let mensaje = '';
for(let i = 0; i<cadenaPropmt.length; i++) {
    if (letras.indexOf(cadenaPropmt.charAt(i),0)!==-1) {
        mensaje = 'Si tiene una minúsculas';
        break
    } else {
        mensaje = 'No tiene minúscula';
    };
};

console.log(mensaje);

// 21.Determina si una cadena de texto contiene al menos un número.
const numeros1 = '0123456789'
let cadenaPropmtNum = prompt('escribe una palabra: ');
let mensajeNum = '';
for(let i = 0; i<cadenaPropmtNum.length; i++) {
    if (letras.indexOf(cadenaPropmtNum.charAt(i),0)!==-1) {
        mensajeNum = 'Si tiene un numero';
        break
    } else {
        mensajeNum = 'No tiene un numero';
    };
};
console.log(mensajeNum);
// 22.Verifica si una cadena de texto termina con un punto (.).
const cadena = 'soy un loco.';
if (cadena.charAt(cadena.length -1) === '.') {
    console.log('Si termina con un .');
} else {
    console.log(cadena.charAt(cadena.length -1));
}


// 23.Determina si una cadena de texto es un pangrama (contiene todas
// las letras del alfabeto).


// 24.Verifica si un día de la semana es laborable (de lunes a viernes).
// 25.Determina si un día es fin de semana (sábado o domingo).
// 26.Verifica si un número representa un mes válido (del 1 al 12).

// 28.Determina si una hora está en el rango de 9 AM a 6 PM.
// 29.Verifica si una persona es mayor de 65 años o menor de 18 años.
// 30.Determina si un triángulo es equilátero (tres lados iguales).
// 31.Verifica si un triángulo es isósceles (dos lados iguales).
// 32.Determina si un triángulo es escaleno (todos los lados diferentes).
// 33.Verifica si un número es mayor que el doble de otro número.
// 34.Determina si la suma de dos números es mayor que 100.
// 35.Verifica si la resta de dos números es menor que 50.
// 36.Determina si un número es el doble del otro número.
// 37.Verifica si el doble de un número es igual al triple de otro número.
// 38.Determina si la suma de dos números es igual a 50.
// 39.Verifica si el producto de dos números es mayor que 500.
// 40.Determina si la división de dos números es menor que 10.
