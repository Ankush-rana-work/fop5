$(document).ready(function(){
    $('.slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 6000,
        autoplaySpeed: 700,
        smartSpeed: 700,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    $('.fallenHeroes-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout:3000,
        autoplaySpeed: 700,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            767:{
                items:3
            },
            991:{
                items:5
            }
    
        }
    })
    $('.fadeSlider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 6000,
        autoplaySpeed: 700,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            767:{
                items:1
            },
            991:{
                items:1
            }
    
        }
    });
    new WOW().init();
    $(".newsCarousel").slick({
        centerMode: true,
        autoplay:true,
        centerPadding: '60px',
        slidesToShow: 7,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        swipeToSlide: true,
        focusOnSelect: true,
        speed: 500,
        autoplaySpeed: 0,
        infinite:true,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
    });
    $(".topNews-carousel").slick({
        centerMode: true,
        autoplay:true,
        centerPadding: '60px',
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        swipeToSlide: true,
        focusOnSelect: true,
        speed:1500,
        autoplaySpeed: 0,
        infinite:true,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
    });

})



$(document).ready(function(){
    $('.btnToggle').click(function(){
        $('header .mainNavbar .menubarWrap ul').stop().slideToggle();
    });

    // read more read less
    $('.moreless-button').click(function() {
        $(this).prev().toggleClass("showMore-showLess");
        if($(this).prev().hasClass("showMore-showLess")){
            $(this).text("Read less");
        }else{
            $(this).text("Read more");
        }
    });

});




