$(document).ready(function () {
  
});



/**
 * Menu
 */
$(document).ready(function () {
  $('.hamburger').click(function (e) { 
    e.preventDefault();
    $('.mobile-nav').toggleClass('is-active');
  });

  $('.mobile-nav a, .mobile-nav__close').click(function () {
    $('.mobile-nav').removeClass('is-active');
  });
});


/**
 * Micromodal init
 * 
 * 1. Prevent page scrolling when a modal is open
 */
(function () {
  var body = document.body;

  MicroModal.init({
    onShow: function() {
      body.classList.add('modal-open'); /* 1 */
    },
    onClose: function() {
      body.classList.remove('modal-open');;
    },
  });
})();



/**
 * Readers carousel
 */
$(document).ready(function () {
  $('.js-readers-slider').slick({ 
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: $('.js-nav-readers .slider-nav__btn--prev'),
    nextArrow: $('.js-nav-readers .slider-nav__btn--next'),
    responsive: [
      {
        breakpoint: 1439.98,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        }
      },
    ],
  });
});