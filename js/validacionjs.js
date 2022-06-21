 let formulario = document.querySelector('form')
 console.log(formulario)
 formulario.addEventListener('submit', function (e) {
     let input = document.querySelector(".formulario")
     console.log("entramos al addEventlistener")

     e.preventDefault();
     if (input.value == '') {
         alert('No puede estar VACIO!')
         console.log("entre addEventlistener 1")
     } else if (input.value.length < 3) {
         alert('Minimo 3 caracteres! Busca algo real D:')
         console.log("entre addEventlistener 2")
     } else {
         formulario.submit();
         console.log("entre addEventlistener 3")
     }
 })