let crearCookie = document.getElementById("crearCookie");
let verCookie = document.getElementById("verCookie");
let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let contador = document.getElementById('contador'); // Elemento para mostrar el contador

let countdown; // Variable para el intervalo de la cuenta regresiva

crearCookie.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    crearCookieFuncion(nombre.value, edad.value);
    iniciarCuentaRegresiva(30); // Inicia la cuenta regresiva de 30 segundos
});

verCookie.addEventListener('click', verCookieFuncion, false);

function crearCookieFuncion(nombre, edad) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (30 * 1000)); // Expira en 30 segundos
    let fechaExpiracion = "expires=" + fecha.toUTCString();

    document.cookie = "Nombre=" + encodeURIComponent(nombre) + "; " + fechaExpiracion + "; path=/";
    document.cookie = "Edad=" + encodeURIComponent(edad) + "; " + fechaExpiracion + "; path=/";
}

function iniciarCuentaRegresiva(duracion) {
    clearInterval(countdown); // Limpia cualquier cuenta regresiva anterior
    let tiempoRestante = duracion;

    countdown = setInterval(function() {
        contador.textContent = tiempoRestante; // Actualiza el contador en el DOM
        tiempoRestante--;

        if (tiempoRestante < 0) {
            clearInterval(countdown); // Detiene la cuenta regresiva cuando llega a 0
            contador.textContent = "Expirado"; // Muestra que el tiempo ha expirado
        }
    }, 1000); // Intervalo de 1 segundo
}

function verCookieFuncion() {
    alert(document.cookie);
}
