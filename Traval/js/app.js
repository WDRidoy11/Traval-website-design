/*------------------------------ bx-slider area ------------------------------*/
$(document).ready(function() {
    $('.slider-area').bxSlider({
        auto: true,
        default: true
    });
});
/*------------------------------ counterup area ------------------------------*/
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });
});
/*------------------------------ scrollUp ------------------------------*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $(".scrollup").fadeIn();
        } else {
            $(".scrollup").fadeOut();
        }
    })

    $(".scrollup").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    })
});
/*------------------------------ Packages area owl-carousel ------------------------------*/
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1400: {
                items: 3
            }
        }
    })

});
/*------------------------------ WOW.js  ------------------------------*/
$(document).ready(function() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {},
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();

});
/*------------------------------ SmoothScroll  ------------------------------*/
var scroll = new SmoothScroll('a[href*="#"]');

/*------------------------------ logo area slider ------------------------------*/

$(window).load(function() {
    $("#rcbrand2").rcbrand({
        visibleItems: 5,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 3000,
            pauseOnHover: true
        }
    });
});