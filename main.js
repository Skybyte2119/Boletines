
//DOM

// QUERYSELECTOR Y QUERYSELECTORALL METODOS
/*let links = document.querySelectorAll('a');

links.forEach(function(link){
    console.log(link);


})
*/
//let links = document.querySelectorAll('.close');
//links.forEach(function(link){
  //  link.addEventListener('click',function(){
      //  alert('Hola perros :V');
  //  })
//})


let iconos = document.querySelectorAll('i')

iconos.forEach(function(icono){
    icono.classList.remove('fa-star')
    icono.classList.add('fa-star')
})