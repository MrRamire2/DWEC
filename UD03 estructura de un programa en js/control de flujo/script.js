//let numero = Number(prompt("Elije tu número: "));

//console.log("Tu número es la raíz cuadrada de " + numero * numero);

// CONDICIONAL
//let numero = Number(prompt("Elije tu número: "));
//let txt1 = "Tu número es la raíz cuadrada de " + numero * numero;
//let txt2 = "Tu número es mayor a 10";
//let txt3 = "No ingresaste un número";

// ELSE IF
// ELSE

//SE PUEDE HACER DE ESTA MANERA
//if (!Number.isNaN(numero) && numero < 10) {
//    console.log(txt1);
//}
//else if (numero > 10) {
//    console.log(txt2);
//}
//else {
//    console.log(txt3);
//}

//O SE PUEDE HACER DE ESTA MANERA
//if (!Number.isNaN(numero) && numero < 10) console.log(txt1);
//else if (numero > 10) console.log(txt2);
//else console.log(txt3);

//BUCLES
//while

// let i = 0;
// let limite = 0;
// while(limite <= 100) {
//     if(i%2 == 0) {
//         console.log(i);
//         limite++;
//     }
//     i++;
// }


// let i = 0;
// let limite = 0;
// let total = 0;
// while(limite <= 100) {
//     if(i%2 == 0) {
//         console.log(i);
//         limite++;
//         total = total+i;
//     }
//     i++;
// }
// console.log(total);


//OBTENER POTENCIA
//  let pot = Number(prompt("Ingresa un número: "));
//  let j = 1;
//  let resultado = 0;

//  while(j < pot) {
//      if (j <= 1) {
//          resultado = pot*pot
//      }
//      else {
//          resultado = resultado*pot;
//      }
//      j++;
//  }

//  console.log(resultado);


//DO WHILE
// let nombre;
// do{
//     nombre = prompt("Quien eres? ");
// }while (!nombre);
// console.log(nombre);

//BUCLE FOR
// for(let i = 2; i <= 100; i+=2) {
//     console.log(i);
// }

//SALIR DE UN BUCLE
// for (let i = 20;; i++) {
//     if (i%7 == 0) {
//         console.log(i);
//         break;
//     }
// }

// for (let i = 20;i < 100; i++) {
//     if (i % 5 != 0) {
//         continue;
//     }else {
//         console.log(i);
//     }
// }

//SWITCH - CASE
// let pregunta = prompt("Que tiempo hace?");
// switch (pregunta) {
//     case "lluvioso":
//         console.log("Coge un paraguas");
//         break;

//     case "soleado":
//         console.log("Lleva ropa ligera");
//         break;

//     case "nublado":
//         console.log("Puedes salir a la calle");
//         break;

//     default:
//         console.log("Tiempo desconocido");
//         break;
// }

//EJERCICIO 1
/*Escribe un bucle que realice siete llamadas a console.log 
para mostrar las siguiente figura:
#
##
###
####
#####
######
#######
*/

//EJERCICIO 2
/*Escribe un programa que use console.log para imprimir todos
los números del 1 al 100, con dos excepciones:
- Para los números que sean divisibles por 3, imprime:
"Jander"
- Para los números divisibles por 5 (y no por 3), imprime:
"Clander"
*/
//EJERCICIO 2 - EXTENSION PACK
/*Modifica tu programa para imprimir "JanderClander" para los
números que sean divisibles por 3 y 5 (y sigue imprimiendo "Jander" o
"Clander" para los números que son divisibles solo por uno de esos
casos)*/ 

//EJERCICIO 3
/*Escribe un programa que cree una cadena que represente un
tablero de 8x8, usando caracteristicas de salto de línea para
separar las líneas.
En cada posición del tablero hay un carácter de espacio o un 
carácter "#". Los caracteres deben formar un tablero de ajedrez:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

//EJERCICIO 1 SOLUCION
// let txt = "#";
// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         txt = txt + "#";
//     }
//     console.log(txt);
//     txt = "#";
// }

//EJERCICIO 2 SOLUCION
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log(i + " Jander");
//     }else if (i % 5 == 0) {
//         console.log(i + " Clander");
//     }else {
//         console.log(i);
//     } 
// }

//EJERCICIO 2 EXTENSION PACK SOLUCION
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i + " JanderClander");
//     }else if (i % 3 == 0) {
//         console.log(i + " Jander");
//     }else if (i % 5 == 0) {
//         console.log(i + " Clander");
//     }else {
//         console.log(i);
//     } 
// }


//EJERCICIO 3 SOLUCION
// let filas = prompt("Dame las filas");
// let columnas = prompt("Dame las columnas");
// let final = " ";
// for (let i = 0; i < columnas; i++) {
//     for (let j = 0; j < filas; j++) {
//         if (j % 2 == 0) {
//             final = final + "#"
//         }else{
//             final = final + " "
//         } 
//     }
//         final = final + "\n"
//         if (i % 2 == 1) {
//             final = final +" ";
//         }
// }
// console.log(final);

// SWITCH SOLUCION
let pregunta = 1;
while (pregunta != 0){
    pregunta = prompt("Que ejercicio deseas ver? 1|2|3|0 Cero para cerrar el programa");
    switch (pregunta) {
        case "1":
            let txt = "#";
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < i; j++) {
                    txt = txt + "#";
                }
                console.log(txt);
                txt = "#";
            }
            break;

    case "2":
            for (let i = 1; i <= 100; i++) {
                if (i % 3 == 0 && i % 5 == 0) {
                    console.log(i + " JanderClander");
                }else if (i % 3 == 0) {
                    console.log(i + " Jander");
                }else if (i % 5 == 0) {
                    console.log(i + " Clander");
                }else {
                    console.log(i);
                } 
            }
            break;

    case "3":
            let filas = prompt("Dame las filas");
            let columnas = prompt("Dame las columnas");
            let final = " ";
            for (let i = 0; i < columnas; i++) {
                for (let j = 0; j < filas; j++) {
                    if (j % 2 == 0) {
                        final = final + "#"
                    }else{
                        final = final + " "
                    } 
                }
                    final = final + "\n"
                    if (i % 2 == 1) {
                        final = final +" ";
                    }
            }
            console.log(final);
            break;

        default:
            console.log("Ingrese nuevamente un número correcto");
            break;
    }
}
