let queryString = location.search;
let datos = new URLSearchParams(queryString);
let objartist = datos.get('id');
console.log(queryString);
console.log(datos);
console.log(objartist);

let detailArtist = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/`
fetch(detailArtist + objartist)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let section = document.querySelector(".detalleArtista");


        for (let i = 0; i < 1; i++) {
            //construir un elemento de lista
            section.innerHTML += `<article>
            <h1 class="titulos">Tu Artista: ${data.name} </h1>
            <article class="contenedortrack">
        <img class="itemimg" src="${data.picture_big}" alt="'${data.id}'">
        <h2 class="nombres"><a class="nombrestrack" href="detail-artist.html?id=${data.name}">Artista:${data.name}</a></h2><p class="nombres">Fans: ${data.nb_fan}</p>  
        </article>
        </article> `
        }
    })

let dataAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/`
fetch(dataAlbum + objartist + '/albums')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let albums = data.data
        let listadoAlbum = document.querySelector(".listadoAlbum");

        for (let i = 0; i < 6; i++) {
            listadoAlbum.innerHTML = `
    <article class="contenedordetailartist"> <a href="detail-album.html?id=${albums[1].id}"><li class="detalleartist">${albums[1].title }<br><img class="imgartist" src="${albums[1].cover_big}" alt="${albums[1].title}"></li></a>
    <a href="detail-album.html?id=${albums[2].id}"><li class="detalleartist">${albums[2].title }<br><img class="imgartist" src="${albums[2].cover_big}" alt="${albums[2].title}"></li></a>
    <a href="detail-album.html?id=${albums[3].id}"><li class="detalleartist">${albums[3].title }<br><img class="imgartist" src="${albums[3].cover_big}" alt="${albums[3].title}"></li></a>
    <a href="detail-album.html?id=${albums[4].id}"><li class="detalleartist">${albums[4].title }<br><img class="imgartist" src="${albums[4].cover_big}" alt="${albums[4].title}"></li></a>
    <a href="detail-album.html?id=${albums[5].id}"><li class="detalleartist">${albums[5].title }<br><img class="imgartist" src="${albums[5].cover_big}" alt="${albums[5].title}"></li></a>
    <a href="detail-album.html?id=${albums[6].id}"><li class="detalleartist">${albums[6].title }<br><img class="imgartist" src="${albums[6].cover_big}" alt="${albums[6].title}"></li></a>
          </article> `


        }

    })