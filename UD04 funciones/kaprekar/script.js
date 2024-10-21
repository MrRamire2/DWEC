// //PRIMER INTENTO

// function kaprekar(n1, n2, n3, n4, contador = 0) {
//     let resultado = ordenarNumeros(n1, n2, n3, n4);

//     // Formar los números ascendente y descendente
//     let asc = parseInt(resultado.join(''));
//     let desc = parseInt(resultado.reverse().join(''));

//     let resta = desc - asc;

//     // Asegúrate de que 'resta' sea un número válido
//     if (resta < 1000) {
//         resta = parseInt(String(resta).padStart(4, '0'));
//     }

//     let restaArray = Array.from(String(resta), Number);

//     console.log(`Iteración ${contador}:`, restaArray);

//     if (resta === 6174) {
//         console.log("finalizado en la iteración", contador);
//     } else {
//         // Llamada recursiva con los dígitos de 'resta'
//         return kaprekar(...restaArray, contador + 1);
//     }
// }

// kaprekar(6,1,7,4);




// //MEJORA

// //Kaprekar con arrays

// function kaprekar(n1, n2, n3, n4, contador = 0) {
//     let resultado = [n1, n2, n3, n4];

//     // Formar los números ascendente y descendente
//     let asc = resultado.sort();
//     let desc = asc.toReversed();

//     let resta = desc.join("") - asc.join("");

//     // Asegúrate de que 'resta' sea un número válido
//     if (resta < 1000) {
//         resta = parseInt(String(resta).padStart(4, '0'));
//     }

//     let restaArray = Array.from(String(resta), Number);

//     //console.log(`Iteración ${contador}:`, restaArray);

//     if (resta === 6174) {
//         console.log("finalizado en la iteración", contador);
//     } else {
//         // Llamada recursiva con los dígitos de 'resta'
//         return kaprekar(...restaArray, contador + 1);
//     }
// }

// kaprekar(6,3,5,1);




//MEJORA 2

//Kaprekar con arrays

function kaprekar(numero, contador = 0) {
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