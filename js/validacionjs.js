 let formulario = document.querySelector(".formulario")
 console.log(formulario)
formulario.addEventListener('submit', function (b){
   b.preventDefault();
     if(formulario.value === ''){
         alert('No puede estar VACIO!')
     } else if (formulario.value.length < 2){
         alert('Busca algo real')
     } else{
         formulario.submit();
     }
 })