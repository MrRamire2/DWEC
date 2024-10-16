// let unCliente = {
//     nombre: "Peter Jackson",
//     "Dirección del cliente": "c/ desconocida",
//     "-+-+-+-+-": "boquepasa",
//     pago: {
//         tipo: "visa",
//         tarjeta: "123123",
//         "fecha de caducidad": "nunca"
//     }
// };
// console.log(unCliente);

// unCliente["nombre"] = "juanito";
// console.log(unCliente);

// unCliente.nombre = "Jhonatan";
// console.log(unCliente.pago);





// let estudiante = {
//     id: 2,
//     nombre: "Jhonatan",
//     diHola:function() {
//         return "Hola";
//     }
// };

// console.log(estudiante);
// // console.log(estudiante.diHola());


// estudiante.edad = 19;

// estudiante.diAdios = function(){
//     return "Adiós";
// }

// console.log(estudiante.diAdios());






//this
// let factura = {
//     descripcion: "factura de prueba",
//     importe: 100.0,
//     eva: 21.00,
//     subTotal: function(){
//         return this.importe;
//     },
//     total: function(){
//         return this.importe + (this.importe * this.iva) / 100;
//     }
// }

// console.log(factura.subTotal());
// console.log(factura.total());







//contructores
// function web() {
//     this.url = "http://localhost";
//     this.nombre = "localhost";

//     this.mostrarInfo = function () {
//         return this.nombre + " :: " + this.url;
//     }
// }


// let unaWeb = new web();
// unaWeb.url = "http://fcbarcelona.cat"
// unaWeb.nombre = "Mas que un club"
// console.log(unaWeb.mostrarInfo());

// let otraWeb = new web();
// console.log(otraWeb.mostrarInfo());







// function web(url, nombre="Sin nombre") {
//     this.url = url;
//     this.nombre = nombre;

//     this.mostrarInfo = function () {
//         return this.nombre + " :: " + this.url;
//     }
// }


// let unaWeb = new web("http://fcbarcelona.cat", "Mas que un club");
// console.log(unaWeb.mostrarInfo());

// let otraWeb = new web("http:/localhost");
// console.log(otraWeb.mostrarInfo());







//prototype
// web.prototype.visitas = 10;
// console.log(unaWeb.visitas);



// function hola(nombre) {
//     this.nombre = nombre;
// }

// hola2 = hola("Jhonatan");


// hola.prototype.diHola = function () {
//     return "Hola"
// }

// console.log(hola2.diHola());







//recorrer un objeto
// let notas = {
//     diw: 8.0,
//     dwes: 9.5,
//     dwec:4.9,
//     daw: {
//         test: 2.0,
//         preacticas: 4.0
//     },
// };

// for(let nota in notas) {
//     console.log(typeof notas[nota]);
//     console.log(notas[nota]);
// }








//STAR WARS: Personajes y edades
/*
Eres un joven padawan que colecciona datos sobre los héroes de Star Wars.
Se te proporcionan dos arrays: uno con los nombres de algunos de estos y otro con sus edades (en el episodio IV), con la indexación correspondiente a su nombre en el otro array.
*/

const nombres = ["Luke", "Obi-Wan", "Yoda", "Leia"];
const edades = ["19", "57", "900", "19"];

/*
Escribe un programa que combine los datos de ambos arrays en un objeto y los muestre por consola.
calcula ademas la suma de las edades y muestramela al final.
 */


function starWars(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

let nombresStarWars;

for(let nombre in nombres) {
    nombresStarWars[] = new starWars(nombres[nombre]);
}

console.log(nombresStarWars);