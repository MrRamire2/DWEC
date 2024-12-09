const result = document.querySelector(".result");
const user = document.querySelector(".user");
const points = document.querySelector(".points");
const buttons = document.querySelectorAll("button");

//imprimir datos del localStorage
result.innerText = localStorage.getItem("result");
user.innerText = localStorage.getItem("user");
//tomar dato y quitar decimales
let gamePoints = Math.trunc(localStorage.getItem("points"));

points.innerText = gamePoints;


buttons.forEach((button) => {
  //evento para ingresar datos al storage
  button.addEventListener('click', () => {

    //if que me guarda los resultados si el usuario gana
    if (localStorage.getItem("result") === "Ganaste") {

      //restaurar records anteriores
      let results = JSON.parse(localStorage.getItem("results")) || [];

      //ingresar datos al JSON results
      results.push({ 'user': localStorage.getItem("user"), 'points': gamePoints, 'result': localStorage.getItem("result"), 'time': localStorage.getItem("time"), 'word': localStorage.getItem("word"), 'errors': localStorage.getItem("errors")});

      //subir de nuevo al storage
      localStorage.setItem("results", JSON.stringify(results));
    }
  })
});