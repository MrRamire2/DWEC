// Espera a que el contenido de la página esté completamente cargado
window.onload = function() {
    // Obtén el botón y asigna un evento 'click'
    let botonEnviar = document.getElementById('enviar');
    botonEnviar.onclick = function() {
        // Obtén los valores de los campos de entrada
        let inputNombre = document.getElementById('nombre');
        let inputEdad = document.getElementById('edad');
        
        let nombre = inputNombre.value;
        let edad = inputEdad.value;

        // Llama a la función para crear la cookie
        crearCookie(nombre, edad);
    };


    // Obtén el botón y asigna un evento 'click'
    let botonVer = document.getElementById('submit');
    botonVer.onclick = function() {

    alert(document.cookie);
    };
};



// Función para crear la cookie
function crearCookie(nombre, edad) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (24 * 60 * 60 * 1000)); // Expira en 1 día
    let fechaExpiracion = "expires=" + fecha.toUTCString();

    // Guarda nombre y edad en cookies separadas
    document.cookie = "user=" + nombre + "; " + fechaExpiracion + "; path=/";
    document.cookie = "age=" + edad + "; " + fechaExpiracion + "; path=/";
}
