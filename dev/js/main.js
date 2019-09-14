
/**
 * Detect touch devices
 */
(function () {
  document.documentElement.className += 
    (("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');
})();


/**
 * Animated Scroll To Anchor
 */

(function(){

  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 60,
  });

})();



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
 * Language switcher
 */
$(document).ready(function () {
  $('.lang-switcher__item').click(function (e) { 
    e.preventDefault();
    $('.lang-switcher__item').removeClass('is-current');
    $(this).addClass('is-current');
  });
});


/**
 * Micromodal init
 * 
 * 1. Prevent page scrolling when a modal is open
 */
(function () {
  let body = document.body,
      site = document.documentElement;

  MicroModal.init({
    onShow: function() {
      body.classList.add('is-overflowed'); /* 1 */
      site.classList.add('is-overflowed'); /* 1 */
    },
    onClose: function() {
      body.classList.remove('is-overflowed'); /* 1 */
      site.classList.remove('is-overflowed'); /* 1 */
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
        breakpoint: 1279.98,
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