(function ($) {
  "use strict";

  //fULLPAGE.JS
  $(document).ready(function(){
    $('#fullpage').fullpage({
        navigation: true,
        anchors: ['home', 'about', 'experiences', 'testimonials','contact','lastpage'],
        lockAnchors: false,
        menu: '#menu'
    });    
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('#testimonials-list').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  }); 

  // TOOLTIP
  $('.social-links a').tooltip();

  //DISABLE TAB KEY
  $(document).keydown(function (e) {
    var keycode1 = (e.keyCode ? e.keyCode : e.which);
    if (keycode1 == 0 || keycode1 == 9) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

})(jQuery);
