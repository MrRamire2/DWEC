const words = ['cielo', 'estrellas', 'avion', 'coche', 'programacion', 'reloj', 'viaje', 'instituto', 'gatos', 'guitarra', 'historia', 'playa'];
const selectWords = document.getElementById("select-words");
const container = document.querySelector(".container");

words.forEach(word => {
  selectWords.innerHTML +=
    `<option value="${word}">${word}</option>`;
});

//tomar todos los resultados
let results = JSON.parse(localStorage.getItem("results"));

//ordenar resultados
algoritm(results);

selectWords.addEventListener("change", () => {

  // Limpiar el contenedor antes de mostrar los resultados
  container.innerHTML = `<div class="result">
  <h2 class="center">Top</h2>
  <h2>Nombre</h2>
  <h2>Tiempo</h2>
  <h2>Puntos</h2>
</div>`;

  //imprimir resultados
  let rank = 1;
  for (let i = 0; i < 10; i++) {
    //formateando tiempo
    let time = formatTime(results[i].time);

    // que se impriman por pantalla las que sean iguales a la palabra seleccionada
    if (results[i].word === selectWords.value) {
      //colocando contenido en la pagina
      container.innerHTML +=
        `<div class="result">
        <h2  class="center"> ${rank} </h2>
        <h2 class="name"> ${results[i].user} </h2>
        <h2 class="time"> ${time} </h2>
        <h2 class="points"> ${results[i].points} </h2>
      </div>`;
      rank++;
    }
  };
  
});



//función para ordenar resultados
function algoritm(results) {
  let bk;
  for (let i = results.length; i >= 0; i--) {

    for (let j = i; j < results.length; j++) {
      if (j < results.length - 1 && parseInt(results[j].points) < parseInt(results[j + 1].points)) {
        bk = results[j];
        results[j] = results[j + 1];
        results[j + 1] = bk;
      }
    }
  }
  return results;
};



//formatear tiempo
function formatTime(time) {
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  minutes = fillWithZeros(minutes, 2);
  seconds = fillWithZeros(seconds, 2);

  return `${minutes}:${seconds}`;
}



//rellenar con ceros para que siempre hayan 2 numeros
function fillWithZeros(num, length) {
  return num.toString().padStart(length, '0');
}