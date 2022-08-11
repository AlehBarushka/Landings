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
