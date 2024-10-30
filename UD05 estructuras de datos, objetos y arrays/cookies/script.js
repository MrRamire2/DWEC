let crearCookie = document.getElementById("crearCookie")
let verCookie = document.getElementById("verCookie")

crearCookie.addEventListener('click', creaCookie, false)
verCookies.addEventListener('click', verTodasLasCookies, false)

function creaCookie(){
    let usuari = 'pep@pepe.com'
    document.cookie = "usuari=" + encodeURIComponent(usuari) + "; expires=Tue, 29 Oct 2024 12:00:00 GMT";
}

function verTodasLasCookies(){
  console.log(document.cookie);
}
