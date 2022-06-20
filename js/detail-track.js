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
        <h2 class="nombres"><a class="nombrestrack" href="detail-artist.html?id=${data.album.name}">Artista:${data.artist.name}</a></h2><p class="nombres">Lanzamiento del disco: ${data.release_date}</p>  
        <p> <a href="playlist.html" type="submit">${data.title}<i class="boton fa-solid fa-heart-circle-plus"></i></button></p>
        <iframe class="itemtrack" title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${data.id}" width="1000" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        </article>
          </article> `

        }
    })