
// S'execute au chargement de la page
window.addEventListener('load', function () {
    // Injecte les données de l'API furniture
    load_furnitures();
});

const params = new URLSearchParams(window.location.search)
const id = params.get("id")
console.log(id)

// Rempli la div meubles avec les données de l'API furniture
function load_furnitures() {
    let div = document.getElementById("meubles");

    fetch(`http://localhost:3000/api/furniture/${id}`)
        .then(Response => Response.json())
        .then(Furniture => {
                let content = creatDiv(Furniture);
                let contentVarnish = varnish(Furniture);
                div.innerHTML += content + contentVarnish;
               
            }
        );
}   

// Retourne une div avec ses classes son contenu
function creatDiv(element) {
    return `<div class="furniture-oak">
                <div class="image_oak"><img src="${element.imageUrl}"></img></div>
                    <div class="price-name_product">
                        <div class="name_product">${element.name}</div>
                            <div class="description">${element.description}</div>
                            <div class="price_product">${element.price/100}€</div>
                                </div></div>`;
}
function varnish() {
    for (let varnishes of varnishes) {
        return `<label for="varnish">Varnish</label>
                    <select name="" id="meuble">
                         <option value="">Please choose a varnish</option>
                         <option value="${varnishes}">${varnishes}</option>
                        `;
    }
}
