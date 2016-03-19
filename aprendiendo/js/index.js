$(".icono").on('click', function() {
  $(this).toggleClass("on");
  $('.menu').toggleClass("on");
  $("#nave ul").toggleClass('indice');
});