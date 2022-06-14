let qs = location.search; // atrapo todo lo que esta despues del html
let qsobj = new URLSearchParams(qs); // lo traduzco para poder trabajarlo
let objeto = qsobj.get("busqueda"); // atrapo el valor search de la variable qsobj
console.log(qs);
console.log(objeto);

let busqueda=`https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${objeto}` //Cuando llamo a busqueda le agrego a la url del endpoint especifico lo que atrape
fetch(busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
        let artista = data.data
        let listaArtistas = document.querySelector('.artistasSearch')
        if (artista.length == 0) {
            titulo.innerHTML = '¡La cancion que quisiste buscar no existe!'
            resultado.innerHTML = ''
            listas.innerHTML = '<h1>¡No se encontraron resultados!</h1>'
        }
        for (let i = 0; i < 4; i++) {
            listaArtistas.innerHTML += 
            `<article class="artista">
    
            <a href="detail-artist.html?id=${artista[i].id}">
            <img class="img" src="${artista[i].picture_big}" alt="${ artista[i].name }"> </a> 
            <h3><a href="detail-artist.html?id=${artista[i].id}">${ artista[i].name }</a>
            </h3></article>`
        }
    })

