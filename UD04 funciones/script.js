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


//




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



// function esPar(num) {
//     if (num == 0) {
//         return true; // 0 es par
//     } else if (num == 1) {
//         return false; // 1 es impar
//     } else {
//         return esPar(num - 2); // Restar 2 y llamar recursivamente
//     }
// }

// // Prueba la función
// console.log(esPar(50)); // Salida: true
// console.log(esPar(51)); // Salida: false



//https://github.com/jmelsiondwec/dwec24-25




/*
Se conoce como constante de Kaprekar (en honor al matemático D. R. Kaprekar) 
al punto fijo de la aplicación iterativa de la denominada Operación de Kaprekar,
1​2​ que consiste en calcular la diferencia entre un número cualquiera con sus 
dígitos ordenados de mayor a menor y dicho número con el orden de sus dígitos 
de menor a mayor.

La constante de Kaprekar más conocida es el 6174, que ocurre cuando el número 
inicial de la operación de Kaprekar tiene cuatro dígitos y está en base 10. 
Por ejemplo, con el número 2435:

    Se comienza con el número 2435 {\displaystyle 2435}.
    Se ordenan sus dígitos en orden descendente: 5432 {\displaystyle 5432}.
    Se ordenan sus dígitos en orden ascendente: 2345 {\displaystyle 2345}.
    Se resta el número ascendente al número descendente: 5432 − 2345 = 3087 
    {\displaystyle 5432-2345=3087}.
    Se repite el proceso con el resultado obtenido: 8730 − 0378 = 8352 
    {\displaystyle 8730-0378=8352}.
    Se continúa repitiendo el proceso: 8532 − 2358 = 6174 {\displaystyle 8532-2358=6174}.
    Una vez que se llega a 6174, la operación se detiene: 7641 − 1467 = 6174 
    {\displaystyle 7641-1467=6174}.

Como aplicar la operación de Kaprekar a 6174 da 6174, ese número es un punto fijo; 
y por tanto, una constante de Kaprekar

El cero es una constante de Kaprekar trivial para todos los casos, debido a 
que 0 − 0 = 0 {\displaystyle 0-0=0}. Lógicamente, si el número que se selecciona 
tiene todas sus cifras iguales, llevará a la constante trivial. 
*/



// function kaprekar(n1, n2, n3, n4) {


//     let resultado = ordenarNumeros(n1, n2, n3, n4);
//     let asc = [resultado[0]] + [resultado[1]] + [resultado[2]] + [resultado[3]];
//     let desc = [resultado[3]] + [resultado[2]] + [resultado[1]] + [resultado[0]];

//     let resta =desc - asc;

//     if (resta < 1000) {
//         resta = parseInt(String(resta).padStart(4, '0'));
//     }

//     let restaArray = Array.from(String(resta), Number);

//     console.log(restaArray);

//     if (resta == 6174) {
//         return console.log("finalizado");
//     }else {
//         //return kaprekar(resta[0], resta[1], resta[2], resta[3]);
//     }
    
// }


function kaprekar(n1, n2, n3, n4, contador = 0) {
    let resultado = ordenarNumeros(n1, n2, n3, n4);

    // Formar los números ascendente y descendente
    let asc = parseInt(resultado.join(''));
    let desc = parseInt(resultado.reverse().join(''));

    let resta = desc - asc;

    // Asegúrate de que 'resta' sea un número válido
    if (resta < 1000) {
        resta = parseInt(String(resta).padStart(4, '0'));
    }

    let restaArray = Array.from(String(resta), Number);

    console.log(`Iteración ${contador}:`, restaArray);

    if (resta === 6174) {
        console.log("finalizado en la iteración", contador);
    } else {
        // Llamada recursiva con los dígitos de 'resta'
        return kaprekar(...restaArray, contador + 1);
    }
}






kaprekar(6,1,7,4);





function contarPeces(cadena, posicionAnterior, contador = 0) {
    let siguentePez = cadena.indexOf("><>", posicionAnterior);

    if (siguentePez == -1) {
        return console.log("Se encontraron " + contador + " peces");
    }else {
        return contarPeces(cadena, siguentePez + 3, contador + 1);
    }
}


let mar = "~~~><>~~~><>><>~~~><>~~~~~~><>~><>~~~~><>~~~><>><>~~~><>~~~~~~><>~><>~";
contarPeces(mar);

/*
alt + z = desfragmentar txt
ctrl + l = seleccionar linea siguiente
ctrl + b = abrir panel lateral
ctrl + f = abrir buscador de la pestaña actual
ctrl + h = buscar y sustituir 
ctrl + k + c = comentar codigo
ctrl + k + u = descomentar codigo
ctrl + k + w = cerras todas las pestañas abiertas
ctrl + shift + t = abrir ultimas páginas
*/