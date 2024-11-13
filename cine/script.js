//capturar elementos del DOM
const contenedor = document.querySelector('.contenedor');
const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');


//precio de la pelicula seleccionada
let precioTicket = +peliculaSelect.value;

llenaIU();


//functiones
function actualizaSeleccionAsientos (){
    const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');

    //función normal
    // const indiceAsientos = [...asientosSeleccionados].map(function(asiento){
    //     return [...asientos].indexOf(asiento);
    // });

    //función flecha
    const indiceAsientos = [...asientosSeleccionados].map((asiento)=>[...asientos].indexOf(asiento));

    localStorage.setItem('asientosSeleccionados', JSON.stringify(indiceAsientos));

    const contadorAsientosSeleccionados = asientosSeleccionados.length;

    contador.innerText = contadorAsientosSeleccionados;

    total.innerText = contadorAsientosSeleccionados * precioTicket;
}

function llenaIU() {
    const asientosSeleccionados = JSON.parse(localStorage.getItem('asientosSeleccionados'));

    if(asientosSeleccionados !== null && asientosSeleccionados.length > 0){

        asientos.forEach((asiento, index)=>{
            if(asientosSeleccionados.indexOf(index) > -1){
                asiento.classList.add('seleccionado');
            }
        });
    }

    const indicePeliculaSeleccionada = localStorage.getItem('indicePeliculaSeleccionada');

    if(indicePeliculaSeleccionada){
        peliculaSelect.selectedIndex = indicePeliculaSeleccionada;
    }

    const precioPeliculaSeleccionada = localStorage.getItem('precioPeliculaSeleccionada');

    if(precioPeliculaSeleccionada){
        precioTicket = +precioPeliculaSeleccionada;
    }
}


//eventos
contenedor.addEventListener('click', (e)=>{
    if(e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')){
        e.target.classList.toggle('seleccionado');
        actualizaSeleccionAsientos();
    }
});

peliculaSelect.addEventListener('change', (e)=>{
    precioTicket = +e.target.value;

    localStorage.setItem('indicePeliculaSeleccionada', e.target.selectedIndex);
    localStorage.setItem('precioPeliculaSeleccionada', e.target.value);

    actualizaSeleccionAsientos();
});

actualizaSeleccionAsientos();