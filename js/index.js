
let buscador="https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"
fetch(buscador)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let info = data.data
        let section = document.querySelector(".canciones");
        let articles = "";

        for(let i=0; i<info.length; i++){
            //construir un elemento de lista
            articles += `<article>
                            <h1 class="caciones">Nombre: ${info[i].title}</h1>
                            <img class="image" src="${info[i].artist.picture_big}" alt="">
                            <a class="link" href="detail-artist.html?id=${info[i].id}">ir a detalle </a>
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

