let qs = location.search; // atrapo todo lo que esta despues del html
let datos = new URLSearchParams(qs);
let ArtistDetail = datos.get('ArtistD');

let buscador = document.querySelector('busc')
let formulario = document.getElementById('formulario')
console.log(formulario);
buscador.addEventListener('submit', function (b){
    b.preventDefault();
    if(formulario.value === ''){
        alert('No puede estar VACIO!')
    } else{
        buscador.submit();
    }
})
fetch('https://api.allorigins.win/get?url=https://api.deezer.com/genre/') //Cuando llamo a busqueda le agrego a la url del endpoint especifico lo que atrape

    .then(function (response) {
        return response.json();
    })
  .then(function (data) {
        let generos = data.data
        console.log(generos);
        let listaGeneros = document.querySelector('.bloquegenero')
        for (let i = 0; i < generos.length; i++) {
            listaGeneros.innerHTML += `<div class="generoindividual"><div><a href="detail-genres.html?id=${generos[i].id}"><img  class="foto" src="${generos[i].picture_big}" alt="${generos[i].name}"></a></div><a href="detail-genres.html?id=${generos[i].id}" class="tituloGeneros"> ${generos[i].name}</a></div>`
        }

    })