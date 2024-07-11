document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    const root = document.documentElement;

    if (currentTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        themeToggle.querySelector('img').src = 'moon.png';
    } else {
        root.setAttribute('data-theme', 'light');
        themeToggle.querySelector('img').src = 'sun.png';
    }

    themeToggle.addEventListener('click', () => {
        const theme = root.getAttribute('data-theme');
        if (theme === 'light') {
            root.setAttribute('data-theme', 'dark');
            themeToggle.querySelector('img').src = 'moon.png';
            localStorage.setItem('theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            themeToggle.querySelector('img').src = 'sun.png';
            localStorage.setItem('theme', 'light');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.slicknav_btn'); // Adjust this selector based on your actual menu button
    const body = document.body;

    menuButton.addEventListener('click', function() {
        const isMenuOpen = body.classList.contains('noscroll');
        if (isMenuOpen) {
            body.classList.remove('noscroll');
            enableScroll();
        } else {
            body.classList.add('noscroll');
            disableScroll();
        }
    });

    function disableScroll() {
        body.style.overflow = 'hidden';
        document.addEventListener('touchmove', preventScroll, { passive: false });  // for iOS devices
    }

    function enableScroll() {
        body.style.overflow = '';
        document.removeEventListener('touchmove', preventScroll, { passive: false });  // for iOS devices
    }

    function preventScroll(e) {
        e.preventDefault();
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
