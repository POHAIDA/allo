var swiper = new Swiper("#swiper1", {
  spaceBetween: 130,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    loop: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1000,
});



var swiper = new Swiper("#swiper2", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
});


var swiper = new Swiper("#swiper3", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
  breakpoints: {
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});


 