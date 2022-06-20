let qs = location.search; // atrapo todo lo que esta despues del html
let qsobj = new URLSearchParams(qs); // lo traduzco para poder trabajarlo
let objeto = qsobj.get("buscador"); // atrapo el valor search de la variable qsobj
console.log(qs);
console.log(objeto);

let busqueda=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${objeto}` //Cuando llamo a busqueda le agrego a la url del endpoint especifico lo que atrape
fetch(busqueda)
.then(function(response){
        return response.json();
    })
.then(function (data) {
        console.log(data);
        let titulo = document.querySelector('.titulossearch')
        let artista = data.data
        let listaArtistas = document.querySelector('.artistasSearch')
        if (artista.length == 0) {
            titulo.innerHTML = 'No hay resultado de busqueda para ' + objeto 
        
        }
        else {
            titulo.innerHTML = 'Estos son los resultado de busqueda para ' + objeto 

        }
        for (let i = 0; i < artista.length; i++) {
            listaArtistas.innerHTML += `<article class="artista"><a href="detail-album.html?id=${artista[i].title}">
            <img class="imagen" src="${artista[i].cover_big}" alt="${artista[i].name }"> </a> 
            <h3><a href="detail-album.html?id=${artista[i].id}">${artista[i].title}--</a> <a href="detail-artist.html?id=${artista[i].artist.id}">${artista[i].artist.name}</a>
            </h3>
            </article>`
        }
    })
    
.then(function(){
document.querySelector('.gif').style.display = "none"

})

