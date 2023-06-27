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


$(document).ready(function(){
    $('.btnToggle').click(function(){
        $('header .mainNavbar .menubarWrap ul').stop().slideToggle();
    });
});

new WOW().init();


// back to top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});