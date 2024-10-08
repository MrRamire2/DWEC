//DEFINIR FUNCIONES
// const quadrat = function(n) {
//     return n * n;
// };

// const mensaje = function() {
//     console.log("Función que no retorna nada");
// };

// mensaje();
// console.log(quadrat(3));

// const redondeaA = function(n, m) {
//     //Redondear n al multiplo mas cernano a m.
// let resto = n % m;
// return n - resto + (resto < m / 2 ? 0 : m);
// };

//console.log(redondeaA(23, 10));


// let x = 10; // global
// if(true) {
//     let y = 20; //local respecto al bloque
// //    console.log(x);
//     var z = 30;
// };

//console.log(z);



// function mitad(n) {
//     return n / 2;
// };

// let n = 10;
// console.log(mitad(100));
// console.log(n);







//AMBITO ANIDADO
// function humus(factor) {
//     function ingrediente(cantidad, unidad, nombre) {
//         let cantidadIngrediente = cantidad * factor;
//         if(cantidadIngrediente > 1) {
//             unidad += "s";
//         }
//         console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
//     };
//     ingrediente(1, "lata", "garbanzos");
//     ingrediente(0.25, "taza", "tahini");
//     ingrediente(0.25, "taza", "jugo de limon");
//     ingrediente(1, "diente", "ajo");
//     ingrediente(2, "cucharada", "aceite de oliva");
//     ingrediente(0.5, "cucharadita", "comino");
// };

// humus(100);






// const redondeaA = (n, m) => {
// let resto = n % m;
// return n - resto + (resto < m / 2 ? 0 : m);
// };


// const saluda = (nombre) => console.log(nombre);

// saluda("Jhonatan");



//PILA DE LLAMADAS
// function saludar(nombre) {
//     console.log("hola " + nombre);
// }
// saludar("jhonatan");
// console.log("adios");


// function gallina() {
//     return huevo();
// }

// function huevo() {
//     return gallina();
// }

// console.log("Que fue antes, el " + huevo() + "o la " + gallina());









//PARAMETROS OPCIONALES
// const quadrat = function(n, b) {
//     b && console.log(b);
//     return n * n;
// };
// console.log(quadrat(3));

// const quadrat = function(n, b = "n/a") {
//     console.log(b);
//     return n * n;
// };
// console.log(quadrat(3));






//CIERRE O CLAUSURA
// function valor(n) {
//     let local = n;
//     return() => local * 2;
// }

// let valor1 = valor(1);
// let valor2 = valor(2);

// console.log(valor1());
// console.log(valor2());







//RECURSIVIDAD
// function exponencial(base, exponente) {

//     if(exponente == 0) {
//         return 1;
//     }else {
        
//     return base * exponencial(base, exponente - 1)
//     }
// }
// console.log(exponencial(2, 3));





//FACTORIAL DE N: n! = n* (n-1) * (n-2).... * 1
// Ej: 4! = 4 * 3 * 2 * 1 = 24

//SOLUCION
// let numero = prompt("dame un número");
// console.log(factorial(numero));

// function factorial(n) {
//     if (n > 0) {
//         return n * factorial(n-1);

//     }else {
//         return 1;
//     }
// }


//CRECIMINETO DE LAS FUNCIONES
// imprimirInventarioGranja(10, 15);

// function imprimirInventarioGranja(vacas, pollos) {
//     let cadenaVaca = String(vacas);

//     while (cadenaVaca.length < 3) {
//         cadenaVaca = "0" + cadenaVaca;
//     }
//     console.log(`${cadenaVaca} vacas`);


//     let cadenaPollo = string(pollos);
//     while (cadenaPollo.length < 3) {
//         cadenaPollo = "0" + cadenaPollo;
//     }
//     console.log(`${cadenaPollo} pollos`);
// }

//imprimirInventarioGranja(10, 15);






// function rellenarConCeros(numero, logitud) {
//     let cadenaNumero = String(numero);

//     while (cadenaNumero.length < 3) {
//         cadenaNumero = "0" + cadenaNumero;
//     }

//     return cadenaNumero;
// }


// function imprimirinventarioGranja(vacas, pollos, cerdos) {

//     console.log(`${rellenarConCeros(vacas, 5)} vacas`);
//     console.log(`${rellenarConCeros(pollos, 15)} pollos`);
//     console.log(`${rellenarConCeros(cerdos, 25)} cerdos`);
// }


// imprimirinventarioGranja(7, 12, 31)







//Math.min()
// let a = Math.min(2,4)
// console.log(a);

/*Escribe una función que devuelva el mínimo de 3
números. */

// numeroMinimo(43,32,21,10);

// function numeroMinimo(num1, num2, num3, num4) {
//     let a = Math.min(num1,num2)
//     a = Math.min(a,num3)
//     return console.log(Math.min(a,num4));
//      }

//10 14 23 21


function ordenarNumeros(num1, num2, num3, num4) {
    // Colocar los números en un array
    let numeros = [num1, num2, num3, num4];
    
    // Implementar el algoritmo de burbuja
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1; j++) {
            // Comparar números consecutivos
            if (numeros[j] > numeros[j + 1]) {
                // Intercambiar si están en el orden incorrecto
                let temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
            }
        }
    }

    // Devolver el array ordenado
    return numeros;
}

// Probar la función
console.log(ordenarNumeros(8, 2, 5, 1)); // Salida: [1, 2, 5, 8]





    // Ejercicio recursividad:
/*  Podemos usar % para verificar si un número es par o impar
    al usar el %2 para ver si es divisible por dos.
    Existe otra manera de definir si un número es par o impar:
    - 0 es PAR
    - 1 es IMPAR
    - N: su paridad es la misma que N - 2
    Define la función recursiva esPar que corresponda a esta
    descripción. La función debe aceptar un solo parámetro (número
    entero positivo) y devolver un booleano.
    Probar con 50 y 75.
*/



function esPar(num) {
    if (num == 0) {
        return true; // 0 es par
    } else if (num == 1) {
        return false; // 1 es impar
    } else {
        return esPar(num - 2); // Restar 2 y llamar recursivamente
    }
}

// Prueba la función
console.log(esPar(50)); // Salida: true
console.log(esPar(51)); // Salida: false