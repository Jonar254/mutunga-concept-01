document.querySelector('.slicknav_btn').addEventListener('click', function() {
    var body = document.body;
    var nav = document.querySelector('.slicknav_nav');
    
    // Toggle the menu open class
    nav.classList.toggle('open');
    
    // Toggle the body class or style to prevent scrolling
    if (nav.classList.contains('open')) {
        body.style.overflow = 'hidden';  // Prevent scrolling when menu is open
    } else {
        body.style.overflow = 'auto';  // Allow scrolling when menu is closed
    }
});


(function($){
    "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
    	Sticky Header
=========================================================================*/ 
    $(function() {
        var header = $("#header"),
            height = header.height(),
            yOffset = 0,
            triggerPoint = 100;
        $('.header-height').css('height', height+'px');
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
            	header.removeClass("animated fadeIn");
                header.addClass("navbar-fixed-top animated fadeInDown");
            } else {
                header.removeClass("navbar-fixed-top  animated fadeInDown");
                header.addClass("animated fadeIn");
            }

        });
    });

/* ==========================================================================
   Fade On Scroll
   ========================================================================== */
    
    if ($(window).width() > 800) {
        
        $(window).on('scroll', function() {
            $('.hero-section').css('opacity', function() {
                return 1 - ($(window).scrollTop() / $(this).outerHeight());
            });
        });
    };    
/*=========================================================================
    Mobile Menu
=========================================================================*/  
    $(function(){
        $('#mainmenu').slicknav({
            prependTo: '.site-branding',
            label: '',
            allowParentLinks: true
        });
    });
                 
/*=========================================================================
    Isotope Active
=========================================================================*/
	$('.portfolio-items').imagesLoaded( function() {

		 // Add isotope click function
		$('.portfolio-filter li').on( 'click', function(){
	        $(".portfolio-filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".portfolio-items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio-items").isotope({
	        itemSelector: '.single-item',
	        layoutMode: 'masonry',
	    });
	});
/*=========================================================================
    Testimonial Carousel
=========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        dots: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            992 : {
                items: 1,
            }
        }
    });
/*=========================================================================
    Single Carousel
=========================================================================*/
    $('#single-carousel').owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        dots: false,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 4,
            }
        }
    }); 
/*=========================================================================
    Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
		
/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	}); 

/*=========================================================================
	WOW Active
=========================================================================*/ 
    new WOW().init();             
             
/*=========================================================================
  Scroll To Top
=========================================================================*/     
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
             
})(jQuery);
