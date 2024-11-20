//Array de palabras para adivinar
const words = ['cielo', 'estrellas', 'avion', 'coche', 'programacion', 'reloj', 'viaje', 'instituto', 'gatos', 'guitarra', 'historia', 'playa'];
//palabra seleccionada
const word = wordRand(words);
console.log(word);
let lives = 9;
let errors = 0;
let letterCount = 0;
//palabra con guiones
const arrayWord = hiddenWord(word);

//capturar elementos del DOM
const buttons = document.querySelector('.buttons');
const attempts = document.getElementById('attempts');
const spaceLetters = document.getElementById('spaceLetters');
const parts = document.querySelectorAll('.parts div');

spaceLetters.innerText = arrayWord.join(" ");


//EVENTS

//cambiar color al boton en el momento que se presiona
buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('button') && !e.target.classList.contains('selected')) {
        e.target.classList.toggle('selected');

        //implementación del compare
        positions = compare(e, word);

        //if para comprobar que la letra esté
        if (positions.length > 1) {
            let letter = positions[0];
            positions.forEach((position, i) => {
                if (i > 0) {
                    letterCount++;
                    arrayWord[position] = letter;
                }
            });
            spaceLetters.innerText = arrayWord.join(" ");
        } else {

            //reducción en las vidas
            attempts.innerText = lives -= 1;

            //hacer aparecer el muñeco
            parts[errors].classList.toggle('active');
            errors++;

            //si llega a cero, redirigir a pagina de perdiste
            if(lives < 1){
                location.href = "/ahorcado/pages/perdiste.html";
            }
        }
        if(letterCount >= word.length){
            alert("Ganaste");
        }
    }
});


//FUNCTION

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