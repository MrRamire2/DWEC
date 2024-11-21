const play = document.querySelector(".primero");
const name = document.getElementById("name");

play.addEventListener("click", (e)=>{
    localStorage.setItem("usuario", name.value);
});
