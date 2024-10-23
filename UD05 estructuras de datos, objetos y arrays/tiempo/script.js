// //objeto date
// let miFecha = new Date();
// console.log(miFecha);

// let horas = rellenarConCeros(miFecha.getHours(), 2);
// let minutos = rellenarConCeros(miFecha.getMinutes(), 2);
// let segundos = rellenarConCeros(miFecha.getSeconds(), 2);
// let ampm = "";

// if(horas > 12){
//     horas -= 12;
//     ampm = "PM";
// }else{
//     ampm = "AM";
// }

// let horaActual = horas + ':' + minutos + ':' + segundos + " " + ampm;
// console.log(horaActual);


//serTimeout(función a llamar, milisegundos)
//setInterval(función a llamar, milisegundos)
//clearInterval()
//clearTimeout()



// function crono() {
//     let miFecha = new Date();

//     let horas = miFecha.getHours();
//     let minutos = rellenarConCeros(miFecha.getMinutes(), 2);
//     let segundos = rellenarConCeros(miFecha.getSeconds(), 2);
//     let ampm = "";

//     // Elemento donde se mostrará la hora
//     let laHora = document.getElementById('laHora');

//     // Determinar AM o PM
//     if (horas >= 12) {
//         ampm = "PM";
//         if (horas > 12) {
//             horas -= 12;
//         }
//     } else {
//         ampm = "AM";
//         if (horas === 0) {
//             horas = 12;  // Medianoche se muestra como 12 AM
//         }
//     }

//     // Asegurarse de que las horas también tengan dos dígitos
//     horas = rellenarConCeros(horas, 2);

//     // Construir la cadena de la hora actual
//     let horaActual = horas + ':' + minutos + ':' + segundos + " " + ampm;

//     // Mostrar la hora actualizada en el DOM
//     laHora.innerHTML = horaActual;
// }

// // Iniciar el cronómetro cuando la página cargue
// window.onload = function() {
//     elCrono = setInterval(crono, 1000);
// };


// let miFecha = 0;
// function cronometro() {
//     miFecha = miFecha++;
//     console.log(miFecha);
//     laHora.innerHTML = miFecha;
// }

// window.onload = function() {
//     setInterval(cronometro(), 1000);
// };






function start() {
    let miFecha = new Date();
    crono(miFecha);
    setInterval(function() {
        crono(miFecha);
    }, 1000);
}



function crono(miFecha) {

    let fecha = new Date();

    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();
    

    let horas = rellenarConCeros(hora - miFecha.getHours(), 2);
    let minutos = rellenarConCeros(minuto - miFecha.getMinutes(), 2);
    let segundos = rellenarConCeros(segundo - miFecha.getSeconds(), 2);
    
    // Elemento donde se mostrará la hora
    let laHora = document.getElementById('laHora');
    
    // Asegurarse de que las horas también tengan dos dígitos
    horas = rellenarConCeros(horas, 2);
    
    // Construir la cadena de la hora actual
    let horaActual = horas + ':' + minutos + ':' + segundos;
    
    // Mostrar la hora actualizada en el DOM
    laHora.innerHTML = horaActual;
};

