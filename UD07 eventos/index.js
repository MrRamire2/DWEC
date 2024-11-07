// window.addEventListener('click', ()=>{
//     console.log('hiciste click?');
// });

// primera parte
// let boton = document.querySelectorAll("button")[0];
// boton.addEventListener('click', ()=> {
//     clic();
// });

// function clic() {
//     console.log("click sobre el botón");
//     boton.removeEventListener('click', clic);
// }


// segunda parte
// let boton = document.querySelectorAll("button")[0];
// boton.addEventListener('mousedown', (e)=>{
//     if(e.button == 0){
//         console.log("Btn izq");
//     }else if(e.button == 1){
//         console.log("el chico de enmedio");
//     }else if(e.button == 2){
//         console.log("Btn der");
//     }else{
//         console.log("desconocido");
//     };
// });



// tercera parte
// let parrafo = document.getElementsByTagName("p")[0];
// let boton = document.querySelector("button");
// // console.log(boton.parentElement.innerText);

// parrafo.addEventListener("mousedown", ()=>{
//     console.log("controlador de evento para el párrafo");
// });

// boton.addEventListener("mousedown", (e)=>{
//     console.log("controlador de eventos para le botón");
//     if(e.button == 2){
//         e.stopPropagation();
//     };
// });




//cuarta parte
// document.addEventListener("click", (e)=>{
//     if(e.target.nodeName == "BUTTON"){
//         console.log("clic en ", e.target.textContent);
//     }
// });


//quinta parte
// let enlace = document.querySelector("a");
// enlace.addEventListener("click", (e)=>{
//     console.log("correcto");
//     e.preventDefault();
// });



//sexta parte
// window.addEventListener("keydown", (e)=>{
//     if(e.key == "v"){
//         document.body.style.background = "violet";
//     }
// });


// window.addEventListener("keyup", (e)=>{
//     document.body.style.background = "white";
// });



//septima parte
// window.addEventListener("keydown", (e)=>{
//     if(e.key == e.ctrlKey && e.key == " "){
//         console.log("hola");
//     }
// })



//octava parte
window.addEventListener("click", e=>{
    let punto = document.createElement("div");
    punto.className = "dot";
    punto.style.left = (e.pageX - 4) + "px";
    punto.style.top = (e.pageY - 4) + "px";
    document.body.appendChild(punto);
})



//novena parte 
window.addEventListener("click", e=>{
    let puntoSeleccionado = document.getElementsByClassName("dot");

    if(e.button == 2){
        if(puntoSeleccionado.pageX > (e,pageX -5) + "px" &&
        puntoSeleccionado.pageX < (e,pageX +5) + "px" &&
        puntoSeleccionado.pageX > (e,pageY -5) + "px" &&
        puntoSeleccionado.pageX < (e,pageY +5) + "px") {
            console.log(puntoSeleccionado);
        }
    }

    
})