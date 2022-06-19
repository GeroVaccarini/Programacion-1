let queryString = location.search;
let datos = new URLSearchParams(queryString);
let objtrack = datos.get ('id');
console.log(queryString);
console.log(datos);
console.log(objtrack);

let detailTrack = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/`
fetch(detailTrack + objtrack)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
   
        let section = document.querySelector(".detalletrack");
        

        for (let i = 0; i <1; i++) {
            //construir un elemento de lista
            section.innerHTML += `<article>
            <h1 class="nombres">Nombre: ${data.title}</h1>
        <img class="imagen" src="${data.album.cover_big}" alt="'${data.artist.name}'">
        </article>
                <h2><a class="nombresgrupo" href="detail-artist.html?id=${data.album.name}">${data.artist.name}</a></h2>
                <p>Lanzamiento del disco: ${data.release_date}</p>
                <ol>
                    <li> <a href="playlist.html" type="submit">${data.title}<i class="boton fa-solid fa-heart-circle-plus"></i></button></li><iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${data.id}" width="1000" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </ol >`
   
    }
})


/**let detalleTracks = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556"
 
fetch(detalleTracks)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

      
        let section = document.querySelector(".detalletrack");
        let articles = "";

        for (let i = 0; i <1; i++) {
            //construir un elemento de lista
            articles += `<article>
            <h1 class="nombres">Nombre: ${data.title}</h1>
        <img class="imagen" src="${data.album.cover_big}" alt="">
        </article>
                <h2><a class="nombresgrupo" href="detail-artist.html">${data.artist.name}</a></h2>
                <p><a class="nombresgrupo" href="detail-artist.html"> Genero:${data.name}</a></p>
                <p>Lanzamiento del disco: ${data.release_date}</p>
                <ol>
                    <li> <a href="playlist.html" type="submit">${data.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li>
                    <li> <a href="playlist.html" type="submit">${data.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li> 
                    <li> <a href="playlist.html" type="submit">${data.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li> 
                    <li> <a href="playlist.html" type="submit">${data.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li> 
                    <li> <a href="playlist.html" type="submit">${data.title}<i class="fa-solid fa-heart-circle-plus"></i></button> </li>  
    </ol >`
                    
                                }

        //capturar el contenedor de la lista



        //Los elementos están en un array y para obtenerlos hay recorrerlo.
        console.log(articles);
        section.innerHTML += articles
    })

    .catch(function (error) {
        console.log(error);
    })*/