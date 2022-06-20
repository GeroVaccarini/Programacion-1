
let DetalleAlbum = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127"
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
            articles += `<article>
                            <h1 class="nombres">Nombre: ${data.title}</h1>
                        <img class="dtimage" src="${data.cover_big}" alt="">
                        </article>
                                <h2><a class="nombres" href="detail-artist.html">${data.artist.name}</a></h2>
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

        //capturar el contenedor de la lista



        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        console.log(articles);
        section.innerHTML += articles
    })

    .catch(function (error) {
        console.log(error);
    })