$(document).ready(function() {

 //Establece el estado predeterminado de cada parte
 $(".paginacion").show();
 $(".paginacion a:first").addClass("active");
  
 //Obtiene el tamaño de las imágenes, cuántas hay, entonces determina el tamaño de la presentación
 let imageWidth = $(".window").width();
 let imageSum = $(".carrete p").size();
 let imageReelWidth = imageWidth * imageSum;

 //Ajusta la imagen al tamaño del marco
 $(".carrete").css({'width' : imageReelWidth});

 //paginacion + Función del r Function
 rotate = function(){ 
  let triggerID = $active.attr("rel") - 0; //Obtiene el número de veces que se desliza
  let image_reelPosition = triggerID * imageWidth; //Determina la distancia que la presentación necesita para su funcionamiento

  $(".paginacion a").removeClass('active'); //Quita todas las clases active
  $active.addClass('active'); //Añade clases active (la $active está  declarada in la función rotateSwitch)
  
  //Animación del deslizador
  $(".carrete").animate({ 
   left: -image_reelPosition
  }, 500 );
  
 }; 

 //Rotación + Evento Timing
 rotateSwitch = function(){ 
  play = setInterval(function(){ //Establece el tiempo - se repetirá cada 3 segundos
   $active = $('.paginacion a.active').next();
   if ( $active.length === 0) { //Si paginacion llega al final...
    $active = $('.paginacion a:first'); //vuelve a la primera imagen
   }
   rotate(); //Ejecuta las funciones paginacion y slider 
  }, 8000); //Velocidad del temporizador en milisegundos (3 segundos) podemos variarla
 };

 rotateSwitch(); //Ejecuta la funcion al iniciar la presentación

 //Al hacer Hover
 $(".carrete a").hover(function() {
  clearInterval(play); //Para la rotación
 }, function() {
  rotateSwitch(); //Reanuda la rotación
 }); 

 //Al hacer Click
 $(".paginacion a").click(function() { 
  $active = $(this); //Activa paginacion cuando se pulsa
  //Resetea el temporizador
  clearInterval(play); //Para la rotación
  rotate(); //Lanza la rotacion inmediatamente
  rotateSwitch(); // Reanuda la rotacion
  return false; //Continua si no se realiza acción
 }); 

});