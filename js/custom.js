(function ($) {
  "use strict";
 

// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}


  //NAV BAR ACTIVE CLASS
  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
     $(this).parent().addClass("active");
   
  })
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0.9(screen.width) || document.documentElement.scrollTop > 0.9(screen.height)) {
    document.getElementById("hoverHome").style.color = "red";
    
  }
  else if (document.body.scrollTop > 0.6(screen.width) || document.documentElement.scrollTop > 0.6(screen.height)) {
    document.getElementById("hoverAbout").style.color = "pink";
    
  }
   else if (document.body.scrollTop > 0.4(screen.width)|| document.documentElement.scrollTop > 0.4(screen.height)) {
    document.getElementById("hoverProjects").style.color = "violet";
    
  }
  else if (document.body.scrollTop > 0.2(screen.width) || document.documentElement.scrollTop > 0.2(screen.height)) {
    document.getElementById("hoverTestimonials").style.color = "green";
    
  } else {
    document.getElementById("projects").style.padding = "pink";
    
  }
}

 
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

