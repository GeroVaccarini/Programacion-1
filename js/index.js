let buscador = document.querySelector('busc')
let formulario = document.getElementById('formulario')
console.log(formulario);
buscador.addEventListener('submit', function (b) {
    b.preventDefault();
    if (formulario.value === '') {
        alert('EL CAMPO NO PUEDE ESTAR VACIO')
    } else if (formulario.value.length < 3) {
        alert('EL CAMPO REQUIERE DE UN MINIMO DE 3 DIGITOS')
    } else {
        buscador.submit();
    }
})

fetch("https://api.allorigins.win/get?url=https://api.deezer.com/chart/")
.then(function (response) {
return response.json();
})
