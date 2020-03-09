(function ($) {
  "use strict";

  //NAV BAR ACTIVE CLASS
  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
     $(this).parent().addClass("active");
  })

  // HEADER
  // $(".navbar").headroom();

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

  // SMOOTHSCROLL
  $(function() {
    $('.nav-link, .custom-btn-link').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });  

  //DISABLE TAB KEY
  $(document).keydown(function (e) {
    var keycode1 = (e.keyCode ? e.keyCode : e.which);
    if (keycode1 == 0 || keycode1 == 9) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

})(jQuery);
