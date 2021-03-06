let recuperoStorage = localStorage.getItem('playlist'); //obtengo de localstorage la propiedad playlist
let playlist = JSON.parse(recuperoStorage); // pasarlo a JSON para manipularlo
let listaCanciones = document.querySelector('.playlist');
console.log(playlist);
if (recuperoStorage == null || recuperoStorage == "[]") {
    listaCanciones.innerHTML += '<h1 class="titulos"> ¡No hay canciones! </h1>'
    console.log(listaCanciones);
} else {
    listaCanciones.innerHTML += '<h1 class="titulos"> ¡Tus canciones favoritas! </h1>'

    for (let i = 0; i < playlist.length; i++) {
        let tracks = "https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"
        fetch(tracks + playlist[i])

            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                listaCanciones.innerHTML += `<a href="detalleCancion.html?id=${data.id}"><li><i class="fas fa-heart"></i>${data.title}</li></a>`


            })
    }
}