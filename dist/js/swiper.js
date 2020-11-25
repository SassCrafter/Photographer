var swiper = new Swiper('.swiper-container', {
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