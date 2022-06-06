let buscador = document.querySelector('busc')
let formulario = document.getElementById('formulario')
console.log(formulario);
buscador.addEventListener('submit', function (b){
    b.preventDefault();
    if(formulario.value === ''){
        alert('No puede estar VACIO!')
    } else if (formulario.value.length < 2){
        alert('Busca algo real')
    } else{
        buscador.submit();
    }
})

let qs = location.search; // atrapo todo lo que esta despues del html
let qsobj = new URLSearchParams(qs); // lo traduzco para poder trabajarlo
let busqueda = qsobj.get("search"); // atrapo el valor search de la variable qsobj
console.log(qs);
console.log(busqueda);
let titulo = document.querySelector('.titulo')

let resultado = document.querySelector('.resutaldo')
titulo.innerHTML += `Resultado de busqueda`
resultado.innerHTML += `"${busqueda}"`
let listas = document.querySelector('.listas')

fetch('https://api.allorigins.win/get?url=https://api.deezer.com/artist/' + busqueda) //Cuando llamo a busqueda le agrego a la url del endpoint especifico lo que atrape

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
            `<nav class="artista"><nav class="carta"><a href="detail-artist.html?id=${artista[i].id}"><img class="img" src="${artista[i].picture_big}" alt="${ artista[i].name }"> </a> </nav><h3><a href="detail-artist.html?id=${artista[i].id}">${ artista[i].name }</a></h3></nav></nav>`
        }
    })
    fetch('https://api.allorigins.win/get?url=https://api.deezer.com/track/3135556' + busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let cancion = data.data
        let listaCanciones = document.querySelector('.canciones')

        for (let i = 0; i < cancion.length; i++) {

            listaCanciones.innerHTML += `<nav class="cancion"><nav class="carta"><a href="detail-track.html?id=${cancion[i].id}"><img class="imgl" src="${ cancion[i].album.cover_big }" alt="${ cancion[i].title }"></a></nav> <h3><a href="detail-track.html?id=${cancion[i].id}">${ cancion[i].title} </a></h3><p>Cancion que pertenece al album <a href="detail-album.html?id=${cancion[i].album.id}"> <b>${ cancion[i].album.title }</b></a> de <a href="detail-artist.html?id=${cancion[i].artist.id}"> <b>${cancion[i].artist.name}</b></a></p></nav>`
        }
    })

fetch('https://api.allorigins.win/get?url=https://api.deezer.com/album/302127' + busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let album = data.data
        let listaAlbumes = document.querySelector('.albums')
        console.log(album);
        for (let i = 0; i < album.length; i++) {

            listaAlbumes.innerHTML += `<nav class="album"><nav class="carta"><a href="detail-album.html?id=${album[i].id}"><img class="img" src=" ${album[i].cover_big}" alt="${album[i].title} by ${album[i].artist.name}"></a></nav><h3><a href="detail-album.html?id=${album[i].id}">${album[i].title}</a></h3><p> Album lanzado por <a href="detail-album.html?id=${album[i].artist.id}"><b>${album[i].artist.name}</b></a></p></nav>`
        }
    })
