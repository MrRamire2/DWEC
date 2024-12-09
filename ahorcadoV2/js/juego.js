// //Array de palabras para adivinar
// const words = ['cielo', 'estrellas', 'avion', 'coche', 'programacion', 'reloj', 'viaje', 'instituto', 'gatos', 'guitarra', 'historia', 'playa'];
// // const words = ['historia'];

// //palabra seleccionada
// const word = wordRand(words);
// console.log(word);
// let lives = 9;
// let errors = 0;
// let letterCount = 0;
// let points = 0;
// let streak = 0;
// let varFirstInteraction = 0;
// let timeDiff = 0;
// let timeClick = 0;
// let timeDivisor = 75;
// let countdownTime = 5;

// //palabra con guiones
// const arrayWord = hiddenWord(word);

// //capturar elementos del DOM
// const buttons = document.querySelector('.buttons');
// const attempts = document.getElementById('attempts');
// const spaceLetters = document.getElementById('spaceLetters');
// const parts = document.querySelectorAll('.parts div');
// const gameTime = document.getElementById('time');
// const countdown = document.getElementById('countdown');

// spaceLetters.innerText = arrayWord.join(" ");


// //EVENTS

// //cambiar color al boton en el momento que se presiona
// buttons.addEventListener('click', (e) => {
//     if (e.target.tagName === "BUTTON") {
//         if (e.target.classList.contains('button') && !e.target.classList.contains('selected')) {

//             //implementación de la comparación para verificar si la letra está
//             positions = compare(e, word);



//             // if para dar puntos por rachas
//             if (positions.length > 1) {
//                 streak++;
//                 points += ((positions.length - 1) * 100) * streak;
//             } else {
//                 streak = 0;
//                 points += -50;
//             }
//             console.log(points);




//             //if para comprobar que la letra esté
//             //letra correcta
//             if (positions.length > 1) {
//                 //cambiar a verde la tecla
//                 e.target.classList.toggle('correct');
//                 e.target.classList.remove('button');
//                 let letter = positions[0];
//                 positions.forEach((position, i) => {
//                     if (i > 0) {
//                         letterCount++;
//                         arrayWord[position] = letter;
//                     }
//                 });
//                 spaceLetters.innerText = arrayWord.join(" ");
//             }
//             //letra incorrecta
//             else {
//                 //cambiar a gris la tecla
//                 e.target.classList.toggle('incorrect');
//                 e.target.classList.remove('button');

//                 //reducción en las vidas
//                 attempts.innerText = lives -= 1;

//                 //hacer aparecer el muñeco
//                 parts[errors].classList.toggle('active');
//                 errors++;
//                 console.log(errors);
//             }


//             //si gano, redirigir a pagina resultado
//             if (letterCount >= word.length) {
//                 localStorage.setItem("result", "Ganaste");
//                 SaveLs(points, timeDiff, timeDivisor, word, errors);
//             }
//         }
//         // Comenzar cronometro
//         if (varFirstInteraction < 1) {
//             start();
//             //sumar 1 para hacer que no se repita
//             varFirstInteraction++;
//         }

//         timeClick = timeDiff;
//     }
// });


// //FUNCTIONS

// //Comparar el elemento seleccionado con mi palabra a adivinar
// function compare(e, word) {
//     //variable a retornar en donde está la letra y sus posiciones
//     let positions = [e.target.innerText];
//     const targetLetter = e.target.innerText;
//     //forEach que pasa por cada letra de la palabra
//     word.split("").forEach((letter, i) => {
//         if (letter.toUpperCase() === targetLetter) {
//             //añado la posición al array
//             positions.push(i);
//         };
//     });
//     return positions;
// };


// //obtener una palabra random de mi array
// function wordRand(words) {
//     let word = words[Math.floor(Math.random() * words.length)];
//     return word;
// }


// //obtener la linea de puntos del tamaño de la palabra
// function hiddenWord(word) {
//     let arrayWord = [];
//     for (let i = 0; i < word.length; i++) {
//         arrayWord.push("_ ");
//     }
//     return arrayWord;
// }



// function start() {
//     //Iniciar tiempo
//     let myDate = new Date();
//     setInterval(function () {

//         //milisegundos que han pasado
//         timeDiff = time(myDate);


//         //comparar si el tiempo transcurrido supera word*10000(letra * 10 segundos)
//         if (timeDiff > (word.length * 10000)) {
//             localStorage.setItem("result", "Perdiste");
//             SaveLs(points, timeDiff, timeDivisor, word, errors);
//         }


//         //descontar vidas por cada 5 segundos
//         if (discountLifeByTime(timeClick, timeDiff)) {
//             timeClick = timeDiff;
//             //hacer que aparezca el muñeco
//             parts[errors].classList.toggle('active');
//             errors++;
//             console.log(errors);
//             //regresar countdownTime a 5
//             countdownTime = 5;
//         }

//         //descontar numeros en countdownTime
//         countdown.innerText = countdownTime--;


//         //si llega a cero, redirigir a pagina resultado
//         if (lives < 1) {
//             localStorage.setItem("result", "Perdiste");
//             SaveLs(points, timeDiff, timeDivisor, word, errors);
//         }
//     }, 1000);
// }



// function time(myDate) {
//     let date = new Date();

//     //Calcular la diferencia de tiempo en milisegundos
//     let diff = date - myDate;

//     //convertir los milisegundos a horas, minutos y segundos
//     // let hours = Math.floor(diff / (1000 * 60 * 60));
//     let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     //formatear las variables para que tengan 2 numeros
//     // hours = fillWithZeros(hours, 2);
//     minutes = fillWithZeros(minutes, 2);
//     seconds = fillWithZeros(seconds, 2);

//     // construir el string para mostrar en pantalla
//     let currentTime = `${minutes}:${seconds}`;

//     //mostrar en la página (DOM)
//     gameTime.innerHTML = currentTime;

//     return diff
// }


// //rellenar con ceros para que siempre hayan 2 numeros
// function fillWithZeros(numero, longitud) {
//     let cadenaNumero = String(numero);  
//     while(cadenaNumero.length < longitud) {
//       cadenaNumero = "0" + cadenaNumero;
//     }
//     return cadenaNumero;
//   }



// //descontar vidas por cada 5 segundos
// function discountLifeByTime(timeClick, timeDiff) {
//     console.log(timeClick + 5000);
//     console.log(timeDiff);
//     if (timeDiff > (timeClick + 5000)) {
//         lives--;
//         attempts.innerText = lives;
//         return true
//     }

// }



// //guardar en localstorage
// function SaveLs(points, timeDiff, timeDivisor, word, errors) {
//     // Guardar en localStorage los valores que recibe la función
//     localStorage.setItem("points", points - (timeDiff / timeDivisor));
//     localStorage.setItem("time", timeDiff);
//     localStorage.setItem("word", word);
//     localStorage.setItem("errors", errors);

//     // Redirigir a la página de resultados
//     location.href = "./resultado.html";
// }







/*
**ARRAY DE PALABRAS
*/

const words = ['cielo', 'estrellas', 'avion', 'coche', 'programacion', 'reloj', 'viaje', 'instituto', 'gatos', 'guitarra', 'historia', 'playa'];



/*
**VARIABLES
*/



let word = wordRand(words);
let varFirstInteraction = true;
let lives = 9;

let timeDiff = 0;
let timeClick = 0;
let timeDivisor = 75;
let countdownTime = 5;



/*
**ELEMENTOS DEL DOM
*/



const buttons = document.querySelector('.buttons');
const attempts = document.getElementById('attempts');
const spaceLetters = document.getElementById('spaceLetters');
const parts = document.querySelectorAll('.parts div');
const gameTime = document.getElementById('time');
const countdown = document.getElementById('countdown');








/*
**EVENTS
*/



//palabra con guiones
const arrayWord = hiddenWord(word);
spaceLetters.innerText = arrayWord.join(" ");



//cambiar color al boton en el momento que se presiona
buttons.addEventListener('click', (e) => {

    positions = compare(e, word);
    changeColor(e, positions);
    appearLetter(positions);
    varFirstInteraction = starTtimeFirstInteraction(varFirstInteraction);
    lives = discountLives(positions, lives);
    redirectLivesIsZero(lives);
});






/*
**FUNCTIONS
*/



//obtener una palabra random de mi array
function wordRand(words) {
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}



//funcion para hacer que aparezca la letra que se presionó en el DOM
function appearLetter(positions) {
    if (positions.length > 1) {
        let letter = positions[0];
        positions.forEach((position, i) => {
            if (i > 0) {
                arrayWord[position] = letter;
            }
        });
        spaceLetters.innerText = arrayWord.join(" ");
    }
}



//obtener la linea de puntos del tamaño de la palabra
function hiddenWord(word) {
    let arrayWord = [];
    for (let i = 0; i < word.length; i++) {
        arrayWord.push("_ ");
    }
    return arrayWord;
}



//Comparar el elemento seleccionado con mi palabra a adivinar
function compare(e, word) {
    //variable a retornar en donde está la letra y sus posiciones
    let positions = [e.target.innerText];
    const targetLetter = e.target.innerText;
    //forEach que pasa por cada letra de la palabra
    word.split("").forEach((letter, i) => {
        if (letter.toUpperCase() === targetLetter) {
            //añado la posición al array
            positions.push(i);
        };
    });
    return positions;
};



//cambiar color de la tecla en el DOM
function changeColor(e, positions) {
    if (e.target.tagName === "BUTTON") {
        if (e.target.classList.contains('button') && !e.target.classList.contains('selected')) {
            if (positions.length > 1) {
                //cambiar a verde la tecla
                e.target.classList.toggle('correct');
                e.target.classList.remove('button');
            } else {
                //cambiar a gris la tecla
                e.target.classList.toggle('incorrect');
                e.target.classList.remove('button');
            }
        }
    }
}



function discountLives(positions, lives) {
    if (positions.length <= 1) {
        let livesOfGame = --lives;
        attempts.innerText = livesOfGame;
        return livesOfGame;
    } else {
        return lives;
    }
}



//rellenar con ceros para que siempre hayan 2 numeros
function fillWithZeros(numero, longitud) {
    let cadenaNumero = String(numero);
    while (cadenaNumero.length < longitud) {
        cadenaNumero = "0" + cadenaNumero;
    }
    return cadenaNumero;
}



//Comenzar cronometro
function starTtimeFirstInteraction(varFirstInteraction) {
    if (varFirstInteraction) {
        let myDate = new Date();
        setInterval(function () {

            timeDiff = formatTime(myDate);

        }, 1000);
    }
    return varFirstInteraction = false;
}



function formatTime(myDate) {
    let date = new Date();
    //Calcular la diferencia de tiempo en milisegundos
    let diff = date - myDate;
    //convertir los milisegundos a horas, minutos y segundos
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    //formatear las variables para que tengan 2 numeros
    minutes = fillWithZeros(minutes, 2);
    seconds = fillWithZeros(seconds, 2);
    // construir el string para mostrar en pantalla
    let currentTime = `${minutes}:${seconds}`;
    //mostrar en la página (DOM)
    gameTime.innerHTML = currentTime;
    return diff
}



function redirectLivesIsZero(lives) {
    //si llega a cero, redirigir a pagina resultado
    if (lives < 1) {
        localStorage.setItem("result", "Perdiste");
        location.href = "./resultado.html";
    }
}



// //guardar en localstorage
// function SaveLs(points, timeDiff, timeDivisor, word, errors) {
//     // Guardar en localStorage los valores que recibe la función
//     localStorage.setItem("points", points - (timeDiff / timeDivisor));
//     localStorage.setItem("time", timeDiff);
//     localStorage.setItem("word", word);
//     localStorage.setItem("errors", errors);

//     // Redirigir a la página de resultados

// }