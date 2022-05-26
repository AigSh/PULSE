$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/right.svg"></img></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: true,
                arrows: false,
                dotsClass: 'dots',
              }
            },
        ]
    });
  });