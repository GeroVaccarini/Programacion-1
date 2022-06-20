let queryString = location.search;
let datos = new URLSearchParams(queryString);
let objtrack = datos.get('id');
console.log(queryString);
console.log(datos);
console.log(objtrack);

let detailTrack = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/`
fetch(detailTrack + objtrack)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data);

        let section = document.querySelector(".detalletrack");


        for (let i = 0; i < 1; i++) {
            //construir un elemento de lista
            section.innerHTML += `<article>
            <h1 class="titulos">Tu Canción: ${data.title} </h1>
            <article class="contenedortrack">
        <img class="itemimg" src="${data.album.cover_big}" alt="'${data.artist.name}'">
        <h2 class="nombres"><a class="nombrestrack" href="detail-artist.html?id=${data.artist.id}">Artista:${data.artist.name}</a></h2><p class="nombres"><a href="detail-album.html?id=${data.album.id}">Disco:${data.album.title}</a></p>  
        <p>${data.title} <br><button class="boton">Agregar a playlist</button></p> <i fa-solid fa-heart-circle-plus"></i> 
        <iframe class="itemtrack" title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${data.id}" width="1000" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        </article>
          </article> `

        }
        let playlist = []
let recuperoStorage = localStorage.getItem('playlist');


if (recuperoStorage == null) {
    playlist = [];
} else {
    playlist = JSON.parse(recuperoStorage);
}


if (playlist.includes(objtrack)) {
    document.querySelector('.boton').innerHTML = 'Eliminar de playlist'
}


let agregar = document.querySelectorAll('button')[1];
console.log(agregar)
agregar.addEventListener('click', function () {
    console.log('entramos al add')
    if (playlist.includes(objtrack)) {
        let indiceEnElArray = playlist.indexOf(objtrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.boton').innerHTML = 'Agregar a playlist';
    } else {
        playlist.push(objtrack);
        document.querySelector('.boton').innerHTML = 'Eliminar de playlist';
    }

console.log(playlist)
    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem('playlist', playlistParaStorage);
})
    })
