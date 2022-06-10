
let tracks="https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"
fetch(tracks)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let info = data.data
        let section = document.querySelector(".canciones");
        let articles = "";

        for(let i=0; i<5; i++){
            //construir un elemento de lista
            articles += `<article>
                            <img class="imagen" src="${info[i].artist.picture_big}" alt="">
                            <h2 class="nombres">Nombre:<a href="./detail-track.html?id=${infoArtist[i].id}">${info[i].title}</a></h2>
                            <p class="nombresgrupo">Artista:<a href="./detail-track.html?id=${infoArtist[i].id}">${info[i].artist.name}</a></p>
                            <p class="nombresgrupo">Lanzamiento:${info[i].release_date}</p>
                        </article>`
                    }
                    
            //capturar el contenedor de la lista
            
            
            
            //Los elementos están en un array y para obtenerlos hay recorrerlo.
            console.log(articles);
            section.innerHTML += articles
    })

    .catch(function(error){
        console.log(error);
    })


    let Artista="https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"
    fetch(Artista)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
    
            let infoArtist = data.data
            let section = document.querySelector(".artistas");
            let articles = "";
    
            for(let i=0; i<5; i++){
                //construir un elemento de lista
                articles += `<article>
                                <img class="imagen" src="${infoArtist[i].picture_big}" alt="">
                                <h2 class="nombres">Artista:<a href="./detail-artist.html?id=${infoArtist[i].id}">${infoArtist[i].name}</a></h2>
                                <p class="nombresgrupo">Top:${infoArtist[i].position}</p>
                                <p class="nombres">Tracklist:${infoArtist[i].tracklist}</p>
                    
                            </article>`
                        }
                        
                //capturar el contenedor de la lista
                
                
                
                //Los elementos están en un array y para obtenerlos hay recorrerlo.
                console.log('articles');
                section.innerHTML += articles
        })
    
        .catch(function(error){
            console.log(error);
        })
    

