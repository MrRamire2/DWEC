// // let numeros = [1, 2, 3, 4];

// // console.log(numeros[0]);
// // console.log(numeros[3]);
// // console.log(numeros[6]);
// console.log(numeros[numeros.length - 1]);



// let nombres = ["pepe", "Maria", 'Joan', `Pere`];
// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);



// let mezcla1 = ["Hola", 10, true];
// console.log(mezcla1[0]);
// console.log(mezcla1[1]);
// console.log(mezcla1[2]);

// console.log(mezcla1);



// let numeros = new Array();
// numeros[0] = 10;
// numeros[1] = 20;
// numeros[2] = 30;

// console.log(numeros);



// let noms = new Array("Maria", "Joan");

// console.log(noms);



//Para colocar todos los huecos en "hola"
// let numeros = new Array(5).fill("hola");

// console.log(numeros);



//Metodos de Array

//push(): agregar uno o dos elementos al final del array
// const frutas  = ["manzana", "platano", "naranja"];
// console.log(frutas);
// frutas.push("uva", "pera");
// console.log(frutas);

//pop(): elimina el ultimo elemento del array
// let uva = frutas.pop();
// console.log(frutas);
// console.log(uva);

//shift(): elimina el primer elemento del array
// let manzana = frutas.shift();
// console.log(frutas);
// console.log(manzana);

//unshift(): agregar uno o mas elementos al principio del array
// frutas.unshift("sandia", "melon");
// console.log(frutas);

//concat(): combina dos o más arrays y retorna o devuelve un nuevo array
// const frutas2 = ["piña", "melocoton", "kiwi"];
// const combinacion = frutas.concat(frutas2);
// console.log(combinacion);

//slice(): devuelve una copia superficial de una porción del array
// frutas.push("kiwi", "melon", "sandia", "melocoton", 11, 14);
// console.log(frutas);
// const frutas2 = frutas.slice(1, 3);
// console.log(frutas2);

//splice(): cambia el contenido de un array, eliminando, reemplazando o agregando elementos
// frutas2.splice(1, 1, "uva", "tomate");
// console.log(frutas2);

//indexOf(): devuelve el primer indice en el que se encuentra un elemento dado en un array o -1 si no lo encuentra
//usar toLowerCase() para pasar todo a minuscula y encontrar todo
// console.log(frutas.indexOf("sandia".toLowerCase()));
// console.log(frutas.indexOf("uva"));

//join(): une todos los elementos de un array en una cadena, utilizando un separador específico
// console.log(frutas.join(", "));

//sort(): ordena los elementos de un array alfabeticamente (si son cadenas) o numericamente (para numeros)
// console.log(frutas.sort());
//ordena por valores unicode!!
// const numeros = [10, 5, 8, 3, 1, 12];
// console.log(numeros.sort());
// const ciudades = ["zaragoza", "madrid", "Barcelona"];
// console.log(ciudades.sort());

//afortunadamente sort() tiene un parametro opcional
// const numeros = [10, 5, 8, 3, 1, 12];
// console.log(numeros.sort(function(a, b) {
//     // -1 a < b
//     // 1 a > b
//     // 0 a == b
//     return a - b;
// }));

//resumido con numeros
// console.log(numeros.sort((a,b) => a-b));

//intento con letras
// const ciudades = ["Zaragoza", "madrid", "Barcelona", "Ávila"];
// console.log(ciudades.sort((a,b) => a.toLowerCase() > b.toLowerCase()));

//resumido con letras
// ciudades.sort((a,b) => a.localeCompare(b));
// console.log(ciudades);




//Kaprekar con arrays

function kaprekar(n1, n2, n3, n4, contador = 0) {
    let resultado = [n1, n2, n3, n4];

    // Formar los números ascendente y descendente
    let asc = resultado.sort();
    let desc = asc.toReversed();

    let resta = desc.join("") - asc.join("");

    // Asegúrate de que 'resta' sea un número válido
    if (resta < 1000) {
        resta = parseInt(String(resta).padStart(4, '0'));
    }

    let restaArray = Array.from(String(resta), Number);

    //console.log(`Iteración ${contador}:`, restaArray);

    if (resta === 6174) {
        console.log("finalizado en la iteración", contador);
    } else {
        // Llamada recursiva con los dígitos de 'resta'
        return kaprekar(...restaArray, contador + 1);
    }
}

kaprekar(6,3,5,1);






//desestructuracion
// const numeros = [1, 2, 3];
// const [a, b, c] = numeros;
// console.log(a);
// console.log(c);

//operaqdor spread
// const numeros = [1, 2, 3];
// const masNumeros = [...numeros, 4, 5, 6, ...numeros, ...[50, 60]];
// console.log(masNumeros);

//ejemplo
function sumar(...numeros) {
    let resultado = 0;
    for(let numero of numeros) {
        resultado += numero;
    }
    return resultado;
}
numeros = [1, 4, 3, 54];
console.log(sumar(...numeros));







//despues de ver un objeto, vemos algunas  cosas más de array

//foreach ejecuta una función una vez por cada elemento del array
// const numeros = [1, 2, 3, 4, 5];
// numeros.forEach((numero)=>{
//     //console.log(numero);
//     let resultado = numero * 2;
//     console.log(resultado);
// });






//map(): crea un nuevo array con los resultados de aplicar una función a cada elemento del array original 
// const numeros = [1,2,3,4,5];
// const doblandoNumeros = numeros.map((numero)=>{
//     return numero * 2;
// });

// console.log(doblandoNumeros);
// console.log(numeros);







//filter(): crea un nuevo array con todos los elementos que cumplan una condición determinada
// const numeros = [1, 2, 3, 4, 5];
// const numerosPares = numeros.filter((numero)=>{
//     return numero % 2 == 0;
// });

// console.log(numerosPares);




//reduce(): aplica una función a un acumulador y a cada elemento del array de izquierda a derecha para reducirlo a un unico valor
// const numeros = [1, 2, 3, 4, 5];
// let suma = numeros.reduce((acumula, numero)=>{
//     return acumula + numero
// });

// console.log(suma);





//find(): devuelve el primer elemento del array que cumpla una condición determinada
// const numeros = [1, 2, 3, 4, 5];
// const numerosEncontrados = numeros.find((numero)=>{
//     return numero % 3 == 0;
// });

// console.log(numerosEncontrados);





//findIndex(): devuelve el indice del primer elemetno del array que cumple con una función de prueba, o "-1" si no encuentra
// const numeros = [1, 2, 3, 4, 5];
// const indiceEcontrado = numeros.findIndex((numero)=>{
// return numero > 3;
// });

// console.log(indiceEcontrado);






//some(): comprueba si almenos un elemento del array comple una condición determinada
// const numeros = [1, 2, 3, 4, 5];
// const tieneNumeroPar = numeros.some((numero)=>{
//     return numero % 2 == 0;
// });

// console.log(tieneNumeroPar);







//every(): comprueba si todos los elementos de un array cumplen con una condición
// const numeros = [1, 2, 3, 4, 5];
// const sonPares = numeros.every((numero)=>{
//     return numero % 2 == 0;
// });

// console.log(sonPares);







