(function ($) {
    "use strict";

    //NAV BAR ACTIVE CLASS
    // $(".nav a").on("click", function(){
    //    $(".nav").find(".active").removeClass("active");
    //    $(this).parent().addClass("active");
    // })

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
    // $(function() {
    //   $('.nav-link, .custom-btn-link').on('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top - 49
    //     }, 1000);
    //     event.preventDefault();
    //   });
    // });  

    //DISABLE TAB KEY
    $(document).keydown(function (e) {
        var keycode1 = (e.keyCode ? e.keyCode : e.which);
        if (keycode1 == 0 || keycode1 == 9) {
          e.preventDefault();
          e.stopPropagation();
        }
    });


    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
            menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#menu-center a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top-300 <= scrollPos && refElement.position().top + refElement.height()-300 > scrollPos) {
                $('#menu-center ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

})(jQuery);
