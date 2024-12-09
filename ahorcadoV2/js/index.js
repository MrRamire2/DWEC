const play = document.querySelector(".primero");
const name = document.getElementById("name");

//guardar el usuario en el localStorage
play.addEventListener("click", (e)=>{
    localStorage.setItem("user", name.value);
});
