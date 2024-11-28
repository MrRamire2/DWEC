//Capturar elementos del DOM
const form = document.getElementById("form");
const nameUser = document.getElementById("nameUser");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const age = document.getElementById("age");
const englishLevel = document.getElementById("englishLevel");
const terms = document.getElementById("terms");


const inputs = [nameUser, email, password, password2, age, englishLevel, terms];

// Funciones
function showError(input, message){

    const formControl = input.parentElement;
    formControl.className = "form-control error";

    const label = formControl.querySelector("label");
    const small = formControl.querySelector("small");
    small.innerText = label.innerText + " " + message;

};

function showCorrect(input){

    const formControl = input.parentElement;
    formControl.className = "form-control correct";

}

function emailValid(input) {

    // javaScript validación de email
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // devuelve true o false
    if (re.test(String(input.value).toLowerCase())) {
        showCorrect(input);
    } else {
        showError(input, "no tiene el formato correcto");
    };

}

function required(inputArray) {

    inputArray.forEach((input) => {
        
        if (input.value === "") {
            showError(input, " es obligatorio.");
        } else {
            showCorrect(input);
        }

    });

}

function checkLength(input, min, max) {

    if (input.value.length < min) {
        showError(input, `almenos ${min} caracteres`);
    } else if (input.value.length > max) {
        showError(input, `máximo ${max} caracteres`);
    } else {
        showCorrect(input);
    }

}

function checkPasswordEquality(input, input2) {

    if (input.value != input2.value) {
        showError(input2, " no coinciden");
    }

}



// Eventos
form.addEventListener("submit", (e) => {

    e.preventDefault();

    required([nameUser, email, password, password2, age]);
    
    checkLength(nameUser, 3, 15);
    checkLength(password, 4, 10);

    emailValid(email);

    checkPasswordEquality(password, password2);


    //esto se puede aplicar mejor en la función de antes
    if (englishLevel.value === "none") {
        showError(englishLevel, " es obligatorio.");
    } else {
        showCorrect(englishLevel);
    }

    if (terms.checked === false) {
        showError(terms, " es obligatorio.");
    } else {
        showCorrect(terms);
    }
    
});

inputs.forEach(input => {

    input.addEventListener("input", () => {

        const formControl = input.parentElement;
        formControl.className = "form-control";
    
    });
    
});