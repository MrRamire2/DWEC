let guardarLs = document.getElementById('guardarLs');
let recuperarLs = document.getElementById('recuperarLs');
let limpiarLsLs = document.getElementById('recuperarLs');
let valoresLs = document.getElementById('valoresLs');

// let diHola = 'Hola';
// let diAdios = 'Adiós';
// let numeros = [1, 2, 3, 4, 5, 6];
let factura = {
    numero: 1,
    descripcion: 'Tabla nueva',
    importe: 22000,
    pago: {
        metodoPago: 'efectivo',
        numTarjeta: 2345432
    },
    numeros: [1,2,3,4,5,6]
};

guardarLs.addEventListener('click', ()=> {
    // localStorage.setItem('diHola', diHola);
    // localStorage.setItem('diAdios', diAdios);
    // diHola = 'hola' + ' - ' + diHola;
    // diAdios = 'adiós' + ' - ' + diAdios;
    // localStorage.setItem('numeros', JSON.stringify(numeros));
    localStorage.setItem('factura', JSON.stringify(factura));
});

recuperarLs.addEventListener('click', ()=> {
    // let lsDiHola = localStorage.getItem('diHola');
    // let lsDiAdios = localStorage.getItem('diAdios');
    // if(lsDiHola) {
    //     valoresLs.innerText = lsDiHola;
    // }
    // if(lsDiAdios) {
    //     valoresLs.innerText = lsDiAdios;
    // }
    // let lsNumeros = localStorage.getItem('numeros');
    // lsNumeros = JSON.parse(lsNumeros);
    // console.log(lsNumeros);
    // console.log(typeof lsNumeros);
    // valoresLs.innerText = lsNumeros;

    let lsFactura = JSON.parse(localStorage.getItem('factura'));
    // console.log(lsFactura);
    // console.log(typeof lsFactura);
    valoresLs.innerText = lsFactura;
});

limpiarLs.addEventListener('click', ()=> {
    localStorage.clear();
});




