$('.intro__header-nav-link[href^="#"]').click(function () {
   let target = $(this).attr('href');
   $('html, body').animate({
      scrollTop: $(target).offset().top
   }, 500);
   return false;
});

$('.contacts__inner-nav-link[href^="#"]').click(function () {
   let target = $(this).attr('href');
   $('html, body').animate({
      scrollTop: $(target).offset().top
   }, 500);
   return false;
});

$('.contacts__inner-nav-2-link[href^="#"]').click(function () {
   let target = $(this).attr('href');
   $('html, body').animate({
      scrollTop: $(target).offset().top
   }, 500);
   return false;
});

$('.arrow[href^="#"]').click(function () {
   let target = $(this).attr('href');
   $('html, body').animate({
      scrollTop: $(target).offset().top
   }, 1000);
   return false;
});

$('.about__inner-item-btn[href^="#"]').click(function () {
   let target = $(this).attr('href');
   $('html, body').animate({
      scrollTop: $(target).offset().top
   }, 500);
   return false;
});