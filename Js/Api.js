const header = document.querySelector("header");
const section = document.querySelector("section");
const div = document.querySelector("div");
const direccion = "https://pokeapi.co/api/v2/pokemon/garchomp"
const img = document.querySelector("#pokemonSprite");
const request = new XMLHttpRequest();
request.open("GET", direccion);
request.responseType = "json";
request.send();
request.onload = function () {
    const respuesta = request.response;
    cabezera(respuesta);
    cuerpo(respuesta);
    movimientos(respuesta);
    Estadisticas(respuesta);
};


function cuerpo(jsonObj) {
    const habilidades = jsonObj.abilities;
    const caja = document.createElement("ul");
    const contenedor= document.createElement("div");
    contenedor.className='izquierda';
    const titulo=document.createElement("h2");
    titulo.textContent="Habilidades:";
    for (let index = 0; index < habilidades.length; index++) {
        const lista = document.createElement("li");
        lista.textContent = habilidades[index].ability.name;
        caja.appendChild(lista);

    }
    contenedor.appendChild(titulo);
    contenedor.appendChild(caja);
    div.appendChild(contenedor);

}

function cabezera(jsonObj) {
    header.innerHTML = `<h1>${jsonObj.name}</h1>`
    img.src = jsonObj.sprites.front_default
}

function movimientos(jsonObj) {
    const contenedor = document.createElement("div")
    contenedor.classList.add("centro");

    const titulo = document.createElement("h2");
    titulo.textContent="Movimientos:";

    const lista = document.createElement("ul");

    jsonObj.moves.slice(0, 4).forEach(element => {
        const item = document.createElement("li");
        item.textContent = element.move.name;
        lista.appendChild(item);
    })

    contenedor.appendChild(titulo);
    contenedor.appendChild(lista);
    div.appendChild(contenedor);
}

function Estadisticas(jsonObj) {
    const contenedor = document.createElement("div")
    contenedor.classList.add("test");

    const titulo = document.createElement("h2");
    titulo.textContent="Estadísticas:";

    const lista = document.createElement("ul");

    jsonObj.stats.forEach(element => {
        const item = document.createElement("li");
        item.textContent = `${element.stat.name}: ${element.base_stat}`;
        lista.appendChild(item);
    })

    contenedor.appendChild(titulo);
    contenedor.appendChild(lista);
    div.appendChild(contenedor);
}

