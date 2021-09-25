
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
                
                let content = creatDiv("image_oak", `${element.imageUrl}`, "name_oak", `${element.name}`, "price",`${element.price}`)
                div.innerHTML += content;
            }
        });
}

// Retourne une div avec ses classes son contenu
function creatDiv(classesImg, urlImg,  classesName, contentName, classesPrice, contentPrice) {
    return `<div class="furniture-oak">
                <div class="${classesImg}"><img src="${urlImg}"></img></div>
                    <div class="price-name">
                        <div class="${classesName}">${contentName}</div>
                            <div class="${classesPrice}">${contentPrice}€</div>
                                </div></div>`;
}

