let queryString = location.search;
let datos = new URLSearchParams(queryString);
let objartist = datos.get('id');
console.log(queryString);
console.log(datos);
console.log(objartist);

let detailGenre = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/`
fetch(detailGenre + objartist + '/artists')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
let info = data.data
        let milista = document.querySelector('#listaArtistas');
let elementosdelista = ''

        for (let i = 0; i < detailGenre.length; i++) {
            //construir un elemento de lista
           milista.innerHTML +=  `<li><a href="detail-artist.html?id=${data.data[i].id}" type="submit">${data.data[i].name}<i class="fa-solid fa-heart-circle-plus"></i></button> </li>
           <img class="dtimg" src="$data.data[i].picture>`
        
        }

console.log(elementosdelista);
milista.innerHTML += elementosdelista;
    })
    .catch(function(error){
console.log(error)
    })
