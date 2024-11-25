const result = document.querySelector(".result");
const user = document.querySelector(".user");
const points = document.querySelector(".points");
const buttonTry = document.getElementById("try");
const buttonMenu = document.getElementById("menu");

//imprimir datos del localStorage
result.innerText = localStorage.getItem("result");
user.innerText = localStorage.getItem("user");
points.innerText = localStorage.getItem("points");

//evento para ingresar datos al storage
buttonTry.addEventListener('click', () => {

  //if que me guarda los resultados si el usuario gana
  if (localStorage.getItem("result") === "Ganaste") {

    //restaurar records anteriores
    let results = JSON.parse(localStorage.getItem("results")) || [];

    //ingresar datos al JSON results
    results.push({ 'user': localStorage.getItem("user"), 'points': localStorage.getItem("points"), 'result': localStorage.getItem("result") });

    //subir de nuevo al storage
    localStorage.setItem("results", JSON.stringify(results));

    storageSave();
  }
});

//FUNCTIONS

//función para guardar datos en el storage
function storageSave() {

  //evento para ingresar datos al storage
  buttonMenu.addEventListener('click', () => {

    //restaurar records anteriores
    let results = JSON.parse(localStorage.getItem("results")) || [];

    //ingresar datos al JSON results
    results.push({ 'user': localStorage.getItem("user"), 'points': localStorage.getItem("points"), 'result': localStorage.getItem("result") });

    //subir de nuevo al storage
    localStorage.setItem("results", JSON.stringify(results));
  });
}