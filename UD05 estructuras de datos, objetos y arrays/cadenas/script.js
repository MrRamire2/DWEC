//creación
// let saludo1 = 'hola';
// console.log(saludo1);

// //contructor
// let saludo = new String('hola');
// console.log(saludo);

// //propiedades 
// let saludo = 'hola';
// //length
// console.log(saludo.length);


//metodos mas comunes
//charAt(): retorna el caracter del indice especificado dentro de la cadena, como si cada caracer fuese in elemento de un array 
// let character = saludo.charAt(1);
// console.log(character);


// //charCodeAt(): retorna el codigo unicode del caracter en el indice especificado
// let codigo = saludo.charCodeAt(3);
// console.log(codigo);


//concat(): combina una o más cadenas
//  let saludoCompleto = saludo.concat(', ¿Cómo estás?');
// console.log(saludoCompleto);


// // // includes(): verifica si una cadena contiene a otra
// console.log(saludo.includes('mundo')); //false
// console.log(saludoCompleto.includes('Cómo')); //true


// indexOf(): retorna el indice de la primera aparicion de una cadena en otra cadena
// let indice = saludo.indexOf('la');
// console.log(indice);


//lastIndexOf(): retorna el indice de la ultima aparición de una cadena en otra
// let cadena = 'hola, hola, adios y hola';
// let ultimoIndice = cadena.lastIndexOf('hola');
// console.log(ultimoIndice);


//slice(): extrae una parte de la cadena y devuelve una nueva cadena
// let cadena = "hola, cara de bola";
// let nuevaCadena = cadena.slice(6, 10);
// console.log(nuevaCadena);


// //subString(): Similar a slice, pero sin admitir indices negativos 
// let cadena = 'hola, cara de bola';
// let nuevaCadena = cadena.substring(6, 10);
// console.log(nuevaCadena);


//toLowerCase(), toUpperCase()
// let cadena = 'Hola, cara de bola';
// let mayus = cadena.toUpperCase();
// let minus = cadena.toLowerCase();
// console.log(mayus);
// console.log(minus);


//EJERCICIO

// console.log(cadena.slice(0, cadena.indexOf('cara')-1).toLowerCase(),
// cadena.slice( cadena.indexOf('cara'), cadena.indexOf('cara')+4).toUpperCase(), 
// cadena.slice(cadena.indexOf('cara')+5).toLowerCase());



// //replace(): remplaza una cadena por otra
// let cadena = 'Hola, cara de bola';
// let mayus = cadena.toUpperCase();
// let minus = mayus.toLowerCase().replace('cara', 'CARA');
// console.log(minus);


//trim(): elimina espacios en blanco delante y detras de la cadena
// let cadena = '                                Jhonatan                    ';
// console.log(cadena);
// let cadenaSinEspacios = cadena.trim();
// console.log(cadenaSinEspacios);
// console.log(cadenaSinEspacios.length);


//split(): divide una cadena en un array de subcadenas
let cadena = "hola, cara de bola";
// let miArray = cadena.split(" ");
// console.log(miArray);
console.log(cadena[12]);