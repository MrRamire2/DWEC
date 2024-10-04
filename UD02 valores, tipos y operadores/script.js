//NUMEROS   

let a = 10;
let b = 9.99;
let c = 3.768e6; //la e para decir que es elevado o algo así
const pi = 3.141592;
// pi = 9;
console.log(pi);
 
// ARITMETICA

console.log(100 * 11 + 4);
console.log(100 / 10 * 50 - 10 + 5);
console.log(9 % 3); //resto 

//NUMEROS ESPECIALES

//infinity y -infinity
console.log(Infinity - Infinity + 1);
//NaN
console.log(100 / 10);

//CADENAS

console.log('simples');
console.log("dobles");
console.log(`acentos`);
console.log("salto\nde\nlinea \\n");
console.log("con" + "ca" + "te" + "nar");
console.log(a + "b");

//TEMPLATE LITERAL

console.log("La mitad de 100 es " + (100 / 2));
console.log(`La mitad de 100 es ${100 / 2}`);
let calculo = 100 / 2;
console.log(`hola ${calculo}`);

//OPERADORES UNARIS

console.log(typeof 4.5);
console.log(typeof "x");

//BINARIOS -> + i *

console.log(7 - 5);
console.log(-5);

//BOOLEAN

//true y false
console.log(3 > 2);
console.log(2 < 2);
console.log("a" > "A"); // esto lo hace tomando en cuenta en codigo ascii
console.log("hola" == "Hola");
console.log("hola" != "Hola");
console.log(!("hola" != "Hola"));
console.log(5 == "5");
console.log(5 === "5");
console.log(NaN == NaN);

//OPERADORES LOGICOS

//AND (&&), OR (||), NOT
console.log(true && true);
console.log(true || true);
console.log(true && true);

//OPERADORES TERCIARIOS

console.log(true ? 1 : 2);

//VALORES BUITS

//null, undefined
console.log(8 * null);
console.log(8 * undefined);

console.log(b);

//CONVERSIÔN AUTOMÂTICA DE TIPOS
console.log(8*null);
console.log("5" + 1);
console.log(1 + "5");
console.log("5" - 1);
console.log("five" * 2);
console.log(true == 1);
console.log(null == undefined);

//CORTOCIRCUITO DE LOS OPERADORES && y ||
console.log(null || "joan");
console.log("pepe" || "joan"); //devolverá el de la izquiera si es posible

console.log(0 || 100);
console.log(0 && 100);

// ?? -> || 
// devolverá el de la derecha solo si es null a la izquierda
console.log(0 ?? 100);
console.log(null ?? 100);