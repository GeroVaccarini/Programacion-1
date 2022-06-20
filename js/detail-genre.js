let queryString = location.search;
let datos = new URLSearchParams(queryString);
let objartist = datos.get('id');
console.log(queryString);
console.log(datos);
console.log(objartist);

let detailGenre = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/`
fetch(detailGenre + objartist)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let section = document.querySelector(".detailgenres");


        for (let i = 0; i < detailGenre.length; i++) {
            //construir un elemento de lista
            section.innerHTML += `<article>
            <h1 class="titulos">Tu Genero: ${data.name} </h1>
            <article class="contenedortrack">
        <img class="itemimg" src="${data.picture_big}" alt="'${data.id}'">
        <h2 class="nombres"><a class="nombrestrack" href="detail-artist.html?id=${data.name}">Artista:${data.name}</a></h2>
        </article>
        </article> `
        }

        let dataArtist = data.Artist.data
        console.log(dataArtist);
        let listaArtista = document.querySelector('#listaArtistas')
          for (let i = 0; i<dataArtist.length; i ++) { 
                    
                    listaArtista.innerHTML += `<li><a href="detail-track.html?id=${dataArtist[i].id}" type="submit">${dataArtist[i].name}<i class="fa-solid fa-heart-circle-plus"></i></button> </li>`
                                   }
    
            //capturar el contenedor de la lista
    
    
    
            //Los elementos están en un array y para obtenerlos hay recorrerlo.
            console.log(articles);
            section.innerHTML += articles
            
        })
