let datatotal = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`
fetch(datatotal)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    let Tracks = data.tracks.data
    let Artista = data.artists.data
    let Albums = data.albums.data

    let cancion = document.querySelector(".canciones")
    let album = document.querySelector(".albums")
    let artista = document.querySelector(".artistas")

    for (let i = 0; i < 5; i++) {  //template string interpolados  /inicio ?qs+clave // operador aritmetico
        cancion.innerHTML += `<article> <img class="imagen" src="${Tracks[i].artist.picture_big}" alt="${Tracks[i].title}">
        <h2 class="nombres">Nombre:<a href="./detail-track.html?id=${Tracks[i].id}">${Tracks[i].title}</a></h2>
        <p class="nombresgrupo">Artista:<a href="./detail-artist.html?id=${Tracks[i].artist.id}">${Tracks[i].artist.name}</a></p>
        <p class="nombresgrupo">Duracion:${Tracks[i].duration}</p>
    </article>`
    }

    for (let i = 0; i < 5; i++) {
        album.innerHTML += `<article>
        <img class="imagen" src="${Albums[i].cover}" alt="">
        <h2 class="nombres">Album:<a href="./detail-album.html?id=${Albums[i].id}">${Albums[i].title}</a></h2>
        <p class="nombresgrupo">Top:${Albums[i].position}</p>
        <p class="nombres">Escuchas:${Albums[i].id}</p>

    </article>`
    }

    for (let i = 0; i < 5; i++) {
        artista.innerHTML +=  `<article>
        <img class="imagen" src="${Artista[i].picture_big}" alt="">
        <h2 class="nombres">Artista:<a href="./detail-artist.html?id=${Artista[i].id}">${Artista[i].name}</a></h2>
        <p class="nombresgrupo">Top:${Artista[i].position}</p>
        <p class="nombres">Escuchas:${Artista[i].id}</p>
    </article>`
    }
})
