let buscador = document.querySelector('busc')
let formulario = document.getElementById('formulario')
console.log(formu);
buscador.addEventListener('submit', function (b){
    b.preventDefault();
    if(formu.value === ''){
        alert('No puede estar VACIO!')
    } else if (buscador.value.length < 2){
        alert('Busca algo real')
    } else{
        buscador.submit();
    }
})

let qs = location.search  // atrapo todo lo que esta despues del html
let qsobj = new URLSearchParams(qs); // lo traduzco para poder trabajarlo
let busqueda = qsobj.get("search"); // atrapo el valor search de la variable qsobj
console.log(qs);
console.log(busqueda);
let titulo = document.querySelector('.titulo')

let resultado = document.querySelector('.resutaldo')
titulo.innerHTML += `Resultado de busqueda`
resultado.innerHTML += `"${busqueda}"`
let listas = document.querySelector('.listas')

fetch("https://api.allorigins.win/get?url=https://api.deezer.com/search?q=" + busqueda) //Cuando llamo a busqueda le agrego a la url del endpoint especifico lo que atrape

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let artista = data.data
        let listaArtistas = document.querySelector('.artistas')
        if (artista.length == 0) {
            titulo.innerHTML = '¡La cancion que quisiste buscar no existe!'
            resultado.innerHTML = ''
            listas.innerHTML = '<h1>¡No se encontraron resultados!</h1>'
        }
        for (let i = 0; i < artista.length; i++) {
            listaArtistas.innerHTML += 
            `<nav class="artista"><nav class="carta"><a href="detalleArtista.html?id=${artista[i].id}"><img class="img" src="${artista[i].picture_big}" alt="${ artista[i].name }"> </a> </nav><h3><a href="detalleArtista?id=${artista[i].id}">${ artista[i].name }</a></h3></nav></nav>`
        }
    })
