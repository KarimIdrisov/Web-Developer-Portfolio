$(document).ready(function () {

   $('.block__title').click(function (e) {
      if ($('.block').hasClass('one')) {
         $('.block__title').not($(this)).removeClass('active');
         $('.block__title').not($(this)).next().slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);

   });

});