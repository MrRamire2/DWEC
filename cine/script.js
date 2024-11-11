//capturar elementos del DOM
const contenedor = document.querySelector('.contenedor');
const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');


//precio de la pelicula seleccionada
let precioTicket = peliculaSelect.value;

console.log(precioTicket);


//eventos
contenedor.addEventListener('click', (e)=>{
    if(e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')){
        console.log('hola');
    }
});