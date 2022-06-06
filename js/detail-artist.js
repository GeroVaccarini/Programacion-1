let qs = location.search; // atrapo todo lo que esta despues del html
let datos = new URLSearchParams(qs);
let ArtistDetail = datos.get('ArtistD');

let buscador = document.querySelector('busc')
let formulario = document.getElementById('formulario')
console.log(formulario);
buscador.addEventListener('submit', function (b){
    b.preventDefault();
    if(formulario.value === ''){
        alert('No puede estar VACIO!')
    } else{
        buscador.submit();
    }
})


fetch('https://api.allorigins.win/get?url=https://api.deezer.com/artist/'+ArtistDetail)
.then(function (response) {
    return response.json();
})

.then(function(data){
    console.log(data);
    let artista = data
    let nombre = document.querySelector ('.nombre')
    nombre.innerHTML += artista.name
    let imagen = document.querySelector ('.imagenartist')
    imagen.innerHTML += `<img src="${artista.picture_big}" alt="${artista.name}"></img>`
    let titulo = document.querySelector('.titulo')
        titulo.innerHTML += data.name
})

fetch('https://api.allorigins.win/get?url=https://api.deezer.com/artist/'+ArtistDetail+'/albums')
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data);
    let albums = data.data
    let listaAlbums = document.querySelector ('.listaAlbums')
    for (let i = 0; i < 5; i++) {
        listaAlbums.innerHTML += `<a href="detail-album.html?id=${albums[i].id}"><li class="albumD">${albums[i].title }<br><img src="${albums[i].cover_big}" alt="${albums[i].title}"></li></a>`
    }
})