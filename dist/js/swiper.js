let swiperHero = new Swiper('.swiper-hero', {
    loop: true,
    effect: 'fade',
    autoplay: {
        duration: 300,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
  });

  let testimonialSwiper = new Swiper('.testimonials-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });