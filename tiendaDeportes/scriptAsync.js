function captureArticle() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                [
                    { id: 1, name: "Pelota de futbol", price: 20 },
                    { id: 1, name: "Raqueta de tenis", price: 50 }
                ]
            );
        }, 5000); //simula delay de 5 seg
    });
}

async function showArticles() {
    const articles = document.getElementById("articles");

    articles.innerHTML = "<p>cargando articulos...</p>";

    const getArticles = await captureArticle();

    articles.innerHTML = getArticles
                            .map((a)=>`<p> ${a.name} - ${a.price}€ </p>`)
                            .join("");
}

document.getElementById("add-article").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    //simular que lo guardamos en el servidor
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // alert(`Articulo añadido: ${name} - ${price}€`);
    console.log(`Articulo añadido: ${name} - ${price}€`);
    document.getElementById("add-article").reset();

    showArticles();
});

showArticles();