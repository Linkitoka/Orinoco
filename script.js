
// S'execute au chargement de la page
window.addEventListener('load', function () {
    // Injecte les données de l'API furniture
    load_furnitures();
});


// Rempli la div meubles avec les données de l'API furniture
function load_furnitures() {
    let div = document.getElementById("meubles");

    fetch("http://localhost:3000/api/furniture")
        .then(Response => Response.json())
        .then(Furniture => {
            for (let element of Furniture) {
                
                let content = creatDiv(element)
                div.innerHTML += content;
            }
        });
}   

// Retourne une div avec ses classes son contenu
function creatDiv(element) {
    return `<a href="product.html?id=${element._id}"><div class="furniture-oak">
                <div class="image_oak"><img src="${element.imageUrl}"></img></div>
                    <div class="price-name">
                        <div class="name_oak">${element.name}</div>
                            <div class="price">${element.price/100}€</div>
                                </div></div></a>`;
}

