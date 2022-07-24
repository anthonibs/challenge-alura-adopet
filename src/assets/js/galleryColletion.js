const dbPetz = "http://localhost:3000/petz"
const list = document.getElementById('list-petz')


window.onload = () => {
    fetch(dbPetz)
        .then(res => res.json())
        .then(petz => petz.map(petzUni => {
            gerarLista(petzUni)
        }))
}


function gerarLista(lista) {
    const template = `
    <article class="col-sm-6 col-xl-4 mb-5">
    <div class="row">
        <div class="col-4 w-50">
            <img class="pet-gallery__pet-image" src="${lista.src}" alt="${lista.alt}">
        </div>
        <div class="col-8 px-2 d-flex flex-column w-50">
            <h3 class="color-txt-1">${lista.nomePet}</h3>
            <p class="pet-gallery__description m-0">${lista.idade}</p>
            <p class="pet-gallery__description m-0">${lista.porte}</p>
            <p class="pet-gallery__description m-0">${lista.temperamento}</p>

            <div class="pet-gallery__contact mt-3">
                <p class="pet-gallery__regional m-0">${lista.estado}</p>
                <a class="pet-gallery__link m-0 mt-1" href="../contato/contato.html">Falar com responsável</a>
            </div>
        </div>
    </div>
</article>
    
    `
    list.innerHTML += template

}
