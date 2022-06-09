//let buscador = document.querySelector('form')
//let formulario = document.getElementById('formulario')
////let errorCasilla = document.querySelector(".error-casilla")
 //console.log(formulario);
//buscador.addEventListener('submit', function (e) {
  //  e.preventDefault();
    //if (formulario.value === '') {
      // errorCasilla.innerText = 'no puede estar vacio'
        
    //} else if (formulario.value.length < 3) {
      //  alert('se necesitan mas letras')
    //} else {
 //       buscador.submit();
   // }
//})

let buscador="https://api.allorigins.win/raw?url=https://api.deezer.com/chart/")
fetch(buscador)
.then(function (response) {
return response.json();
})
.then(function(data){
    console.log(data);
})
let info = data.data

//capturar el contenedor de la lista

let section = document.querySelector(".listas");
let articles = "";
 //Los elementos están en un array y para obtenerlos hay recorrerlo.
 for(let i=0; i<info.length; i++){
    //construir un elemento de lista
    articles += `<article class="lista">
                    <p> class="caciones">Nombre: ${data.data[i].title}</p>
                    <img class="image" src="${data.data[i].images.original.url}" alt="">
                    <a href="detail-artist.html?id=${data.data[i].id}">ir a detalle </a>
                </article>`
}
console.log(articles);

section.innerHTML += articles


})
.catch(function(error){
console.log(error);
})

