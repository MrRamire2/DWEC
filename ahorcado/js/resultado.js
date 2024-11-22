const result = document.querySelector(".result");
const user = document.querySelector(".user");
const points = document.querySelector(".points");

//imprimir datos del localStorage
result.innerText = localStorage.getItem("result");
user.innerText = localStorage.getItem("user");
points.innerText = localStorage.getItem("points");