//Array de palabras para adivinar
const words = ['ordenador', 'pelicula', 'empresa'];
const word = 'ordenador';
let lives = 10;
let arrayWord = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

//capturar elementos del DOM
const buttons = document.querySelector('.buttons');
const attempts = document.getElementById('attempts');
const spaceLetters = document.getElementById('spaceLetters');

spaceLetters.innerText = arrayWord.join(" ");


//EVENTS

//cambiar color al boton en el momento que se presiona
buttons.addEventListener('click', (e)=>{
    if(e.target.classList.contains('button') && !e.target.classList.contains('selected')){
        e.target.classList.toggle('selected');

        //implementación del compare
        positions = compare(e, word);

        //if para comprobar que la letra esté
        if (positions.length > 1){
            positions.forEach((position, i) => {
                if (i > 1){
                    arrayWord[position] = letter;        //por terminar
                }else{
                    letter = position;
                }
            });
            spaceLetters.innerText = arrayWord.join(" ");
        } else{

        //reducción en las vidas
        attempts.innerText = lives-=1;
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
        if (letter.toUpperCase() === targetLetter){
            //añado la posición al array
            positions.push(i);
        };
    });
    return positions;
};