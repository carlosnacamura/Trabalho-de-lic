const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    centerSlide: true,
    grapCursor: true,
    fade: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    coverflowEffect: {
      rotate: 0,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });
  