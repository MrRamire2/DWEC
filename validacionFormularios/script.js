//Capturar elementos del DOM
const form = document.getElementById("form");
const nameUser = document.getElementById("nameUser");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

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

// Eventos
form.addEventListener("submit", (e) => {

    e.preventDefault();
    
    if (nameUser.value === "") {
        showError(nameUser, " es obligatorio.");
    } else {
        showCorrect(nameUser);
    }
    
    if (email.value === "") {
        showError(email, " es obligatorio.");
    } else {
        showCorrect(email);
    };

    if (password.value === "") {
        showError(password, " es obligatorio.");
    } else {
        showCorrect(password);
    };

    if (password2.value === "") {
        showError(password2, " es obligatorio.");
    } else {
        showCorrect(password2);
    };

});