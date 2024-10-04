//DEFINIR FUNCIONES
// const quadrat = function(n) {
//     return n * n;
// };

const mensaje = function() {
    console.log("Función que no retorna nada");
};

// mensaje();
// console.log(quadrat(3));

// const redondeaA = function(n, m) {
//     //Redondear n al multiplo mas cernano a m.
// let resto = n % m;
// return n - resto + (resto < m / 2 ? 0 : m);
// };

//console.log(redondeaA(23, 10));


let x = 10; // global
if(true) {
    let y = 20; //local respecto al bloque
//    console.log(x);
    var z = 30;
};

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
//let numero = prompt("dame un número");
function factorial(n) {
    if (n > 0) {
        n = n * factorial(n-1);
        return n;
    }else {
        return n;
    }
}
console.log(factorial(4));

