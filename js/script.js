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

 
    $('.catalog-slider__content').slick({
      speed: 500,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/left.svg"></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/right.svg"></img></button>',
      responsive: [
        {
          breakpoint: 575,
          settings: {
            dots: true,
            dotsClass: 'dots',
          }
        },
      ] 
    });
    



    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('ul.catalog-slider__tabs').on('click', 'li:not(.catalog-slider__tab_active)', function() {
      $(this)
        .addClass('catalog-slider__tab_active').siblings().removeClass('catalog-slider__tab_active')

        .closest('div.container').find('div.catalog-slider__content').removeClass('catalog-slider__content_active').eq($(this).index()).addClass('catalog-slider__content_active');

        $('.catalog-slider__content').slick('refresh');
    });

    
    $('.reviews__wrapper').on('click', 'a.reviews-item__more', function() {
      $(this)       
        .closest('div.container').find('div.reviews-item_forhidden').removeClass('reviews-item_hidden')
        .closest('div.container').find('a.reviews-item__turn').removeClass('reviews-item__more-turn_hidden')
        .closest('div.container').find('a.reviews-item__more').addClass('reviews-item__more-turn_hidden');
    });

    $('.reviews__wrapper').on('click', 'a.reviews-item__turn', function() {
      $(this)       
        .closest('div.container').find('div.reviews-item_forhidden').addClass('reviews-item_hidden')
        .closest('div.container').find('a.reviews-item__turn').addClass('reviews-item__more-turn_hidden')
        .closest('div.container').find('a.reviews-item__more').removeClass('reviews-item__more-turn_hidden');
    });





    // $('.catalog-item__link').each(function(i) {
    //   $(this).on('click', function(e) {
    //     e.preventDefault();
    //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //   })
    // })

    // $('.catalog-item__back').each(function(i) {
    //   $(this).on('click', function(e) {
    //     e.preventDefault();
    //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //   })
    // })

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-slider-item__content').eq(i).toggleClass('catalog-slider-item__content_active');
          $('.catalog-slider-item__list').eq(i).toggleClass('catalog-slider-item__list_active');
        })
      })
    }

    toggleSlide('.catalog-slider-item__link');
    toggleSlide('.catalog-slider-item__back');



 });