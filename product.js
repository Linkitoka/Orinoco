
// S'execute au chargement de la page
window.addEventListener('load', function () {
    // Injecte les données de l'API furniture
    loadProduct();
});

const params = new URLSearchParams(window.location.search)
const id = params.get("id")
console.log(id)

// Rempli la div meubles avec les données de l'API furniture
function loadProduct() {
    let prod = document.getElementById("meubles");

    fetch(`http://localhost:3000/api/furniture/${id}`)
        .then(Response => Response.json())
        .then(Furniture => {
            
                
               
                let write = creatProduct(element)
                prod.innerHTML += write;
                  
            }
        });

function creatProduct(element) {
    return `<div class="furniture">
                <div class="image"><img src="${element.imageUrl}"></img></div>
                    <div class="pricename">
                        <div class="nae">${element.name}</div>
                            <div class="prie">${element.price/100}€</div>
                                </div></div>`;
}