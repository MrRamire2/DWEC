//Array de palabras para adivinar
const words = ['cielo', 'estrellas', 'avion', 'coche', 'programacion', 'reloj', 'viaje', 'instituto', 'gatos', 'guitarra', 'historia', 'playa'];
//palabra seleccionada
const word = wordRand(words);
console.log(word);
let lives = 9;
let errors = 0;
let letterCount = 0;
let points = 0;
let streak = 0;
let varFirstInteraction = 0;
//palabra con guiones
const arrayWord = hiddenWord(word);

//capturar elementos del DOM
const buttons = document.querySelector('.buttons');
const attempts = document.getElementById('attempts');
const spaceLetters = document.getElementById('spaceLetters');
const parts = document.querySelectorAll('.parts div');

spaceLetters.innerText = arrayWord.join(" ");


//EVENTS

// Añadir el event listener


buttons.addEventListener('click', (e) => {
    if (varFirstInteraction < 1) {
        start();
    }
    varFirstInteraction++;
});



//cambiar color al boton en el momento que se presiona
buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('button') && !e.target.classList.contains('selected')) {

        start();

        //implementación de la comparación para verificar si la letra está
        positions = compare(e, word);



        // if para dar puntos por rachas
        if (positions.length > 1) {
            streak++;
            points += ((positions.length - 1) * 100) * streak;
        } else {
            streak = 0;
            points += -50;
        }
        console.log(points);




        //if para comprobar que la letra esté
        //letra correcta
        if (positions.length > 1) {
            //cambiar a verde la tecla
            e.target.classList.toggle('correct');
            e.target.classList.remove('button');
            let letter = positions[0];
            positions.forEach((position, i) => {
                if (i > 0) {
                    letterCount++;
                    arrayWord[position] = letter;
                }
            });
            spaceLetters.innerText = arrayWord.join(" ");
        }
        //letra incorrecta
        else {
            //cambiar a gris la tecla
            e.target.classList.toggle('incorrect');
            e.target.classList.remove('button');

            //reducción en las vidas
            attempts.innerText = lives -= 1;

            //hacer aparecer el muñeco
            parts[errors].classList.toggle('active');
            errors++;

            //si llega a cero, redirigir a pagina resultado
            if (lives < 1) {
                localStorage.setItem("result", "Perdiste");
                localStorage.setItem("points", points);
                location.href = "./resultado.html";
            }
        }


        //si gano, redirigir a pagina resultado
        if (letterCount >= word.length) {
            localStorage.setItem("result", "Ganaste");
            localStorage.setItem("points", points);
            location.href = "./resultado.html";
        }
    }
});


//FUNCTIONS

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


//obtener una palabra random de mi array
function wordRand(words) {
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}


//obtener la linea de puntos del tamaño de la palabra
function hiddenWord(word) {
    let arrayWord = [];
    for (let i = 0; i < word.length; i++) {
        arrayWord.push("_ ");
    }
    return arrayWord;
}



function start() {
    //Iniciar tiempo
    let myDate = new Date();
    setInterval(function () {
        time(myDate);
    }, 1000); // Update every second
}



function time(myDate) {
    let date = new Date();

    //Calcular la diferencia de tiempo en milisegundos
    let diff = date - myDate;

    //convertir los milisegundos a horas, minutos y segundos
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    //formatear las variables para que tengan 2 numeros
    hours = fillWithZeros(hours, 2);
    minutes = fillWithZeros(minutes, 2);
    seconds = fillWithZeros(seconds, 2);

    // construir el string para mostrar en pantalla
    let currentTime = `${hours}:${minutes}:${seconds}`;

    //mostrar en la página (DOM)
    let time = document.getElementById('time');
    time.innerHTML = currentTime;
}



function fillWithZeros(num, length) {
    return num.toString().padStart(length, '0');
}