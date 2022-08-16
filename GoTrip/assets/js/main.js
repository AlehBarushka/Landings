// CAROUSEL
const owl = $('.owl-carousel');

owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
  items: 3,
});

// Go to the next item
$('.slider__btn--next').click(function () {
  owl.trigger('next.owl.carousel');
});

// Go to the previous item
$('.slider__btn--prev').click(function () {
  owl.trigger('prev.owl.carousel');
});
// CAROUSEL

// NAV ICON TOGGLE
const toggleBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

toggleBtn.onclick = function () {
  menuIcon.classList.toggle('menu-icon-active');
  nav.classList.toggle('nav--mobile');
};
// NAV ICON TOGGLE
