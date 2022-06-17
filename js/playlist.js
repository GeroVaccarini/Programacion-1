
let playlist="https://api.allorigins.win/raw?url=https:https://api.deezer.com/playlist/908622995"
fetch(playlist)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let playlist = data.data
        let section = document.querySelector(".playlist");
        let articles = "";

        for(let i=0; i<playlist.length; i++){
            //construir un elemento de lista
            articles += `<article>
                            <h1 class="caciones">Nombre: ${playlist[i].title}</h1>
                            <img class="image" src="${playlist[i].artist.picture_big}" alt="">
                            <a class="link" href="detail-artist.html?id=${playlist[i].id}">ir a detalle </a>
                        </article>`
                    }
                    
            //capturar el contenedor de la lista
            
            
            
            //Los elementos están en un array y para obtenerlos hay recorrerlo.
            console.log('articles');
            section.innerHTML += articles
    })

    .catch(function(error){
        console.log(error)
    })