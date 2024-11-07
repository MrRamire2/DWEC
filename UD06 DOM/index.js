let enlace = document.body.getElementsByTagName("a")[1];
let miDiv = document.getElementById("miDiv");
let parrafos = document.getElementsByTagName("p");
let divP = document.getElementById("divP");
let crear = document.getElementById("crear");
let imagen = document.getElementsByTagName("img")[0];

divP.insertBefore(parrafos[2], parrafos[1]); // no me va

crear.addEventListener('click', ()=>{
    if(imagen.alt){
        // let texto = document.createTextNode(imagen.alt)
        let elemento = document.createElement("div");
        // let miEnlace = document.createElement("a");
        // elemento.appendChild(miEnlace)
        imagen.parentElement.appendChild(elemento);
        // imagen.parentElement.replaceChild(texto, imagen);
    }
});


// console.log(enlace);
// console.log(miDiv);
// console.log(parrafos);
// console.log(imagen);
// console.log(enlace.href);