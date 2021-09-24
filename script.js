
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
                let content = create_div("Jolie", `${element.name} bonjour ${element.price}`, "red");
                div.innerHTML += content;
            }
        });
}

// Retourne une div avec ses classes son contenu et sa couleur à définir
function create_div(classes , content, color) {
    return `<div class="${classes}" style="color: ${color};">${content}</div>`;
}