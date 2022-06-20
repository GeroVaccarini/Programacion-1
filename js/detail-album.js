let queryString = location.search;
let datos = new URLSearchParams(queryString);
let objtrack = datos.get('id');
console.log(objtrack);


let DetalleAlbum = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + objtrack
fetch(DetalleAlbum)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

      
        let section = document.querySelector(".detalle");
        let articles = "";

        for (let i = 0; i <1; i++) {
            //construir un elemento de lista
            articles += `<article class="albumgeneral">
                            <h1 class="nombres">Nombre: ${data.title}</h1>
                        <img class="dtimage" src="${data.cover_big}" alt="">
                        </article>
                        <article class="albumgeneral">
<<<<<<< HEAD
                                <h2><a class="nombres nombre" href="detail-artist.html?id=${data.artist.id}">Artista:${data.artist.name}</a></h2>
                                <p><a class="nombres" href="detail-genres.html?id=${data.genres.data[0].id}"> Genero:${data.genres.data[0].name}</a></p>
=======
                                <h2><a class="nombres nombre" href="detail-artist.html">Artista:${data.artist.name}</a></h2>
                                <p><a class="nombres" href="detail-artist.html"> Genero:${data.name}</a></p>
                                <p>Lanzamiento del disco: ${data.release_date}</p>
                                <ol>
                                    <li> <a href="playlist.html" type="submit">${data.tracks.data.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li>
                                    <li> <a href="playlist.html" type="submit">${data.tracks.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li> 
                                    <li>54yu <a href="playlist.html" type="submit">${data.tracks.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li> 
                                    <li> <a href="playlist.html" type="submit">${data.tracks.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li> 
                                    <li> <a href="playlist.html" type="submit">${data.tracks.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li>  
                    </ol >`
                    
                                }
>>>>>>> 4d129001c5729e6b31562c39ed64de9597854534
                                <p>Lanzamiento del disco: ${data.release_date}</p> 
                                </article>`
        }                     
    let tracksdata = data.tracks.data
    console.log(tracksdata);
    let cancionesAlbum = document.querySelector('#listacanciones')
    let temas = "";
      for (let i = 0; i<tracksdata.length; i ++) { 
                
                cancionesAlbum.innerHTML += `<li><a href="detail-track.html?id=${tracksdata[i].id}" type="submit">${tracksdata[i].title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li>`
                               }

        //capturar el contenedor de la lista



        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        console.log(articles);
        section.innerHTML += articles
        
    })

    .catch(function (error) {
        console.log(error);
    })