const container = document.querySelector(".container");

//tomar todos los resultados
results = JSON.parse(localStorage.getItem("results"));

//ordenar resultados
algoritm(results);

//imprimir resultados
let rank = 1;
for (let i = 0; i < 10; i++) {
    container.innerHTML += 
  `<div class="result">
    <h2  class="center"> ${rank} </h2>
    <h2 class="name"> ${results[i].user} </h2>
    <h2> ${results[i].points} </h2>
  </div>`;
  rank++;
};

//función para ordenar resultados
function algoritm(results) {
  let bk;
  for (let i = results.length; i >= 0; i--) {

    for (let j = i; j < results.length; j++) {
      if (j < results.length - 1 && parseInt(results[j].points) < parseInt(results[j + 1].points)) {
        bk = results[j];
        results[j] = results[j+1];
        results[j+1] = bk;
      }
    }
  }
  return results;
};