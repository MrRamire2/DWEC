function captureArticle() {

    const start = Date.now();

    while((Date.now() - start < 3000)){
        console.log("cargando...");
    }

    return[
        {id: 1, name: "Pelota de futbol", price: 20},
        {id: 1, name: "Raqueta de tenis", price: 50}
    ];
}

function showArticles() {
    const articles = document.getElementById("articles");

    articles.innerHTML = "<p>cargando articulos...</p>";

    const getArticles = captureArticle();

    articles.innerHTML = getArticles
                            .map((a)=>`<p> ${a.name} - ${a.price} </p>`)
                            .join("");
}

showArticles();