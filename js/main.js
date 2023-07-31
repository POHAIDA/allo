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
  speed: 900,
});





let topProductsSlider; 

const toggleActiveTopProducts = () => {
  const sliderOffBrand = document.querySelector(".slider-top-products");
  const sliderOffBrand1 = document.querySelector(".top-products__cards");

  if (document.body.clientWidth < 1000) {
    if (!sliderOffBrand.classList.contains("swiper")) {
      sliderOffBrand.classList.add("swiper");
    }

    if (!sliderOffBrand1.classList.contains("swiper-wrapper")) {
      sliderOffBrand1.classList.add("swiper-wrapper");
    }

    if (!topProductsSlider) {
      topProductsSlider = new Swiper(".slider-top-products", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        breakpoints: {
          250: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          736: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
        },
      });
    }
  } else {
    if (sliderOffBrand.classList.contains("swiper")) {
      sliderOffBrand.classList.remove("swiper");
    }
    if (sliderOffBrand1.classList.contains("swiper-wrapper")) {
      sliderOffBrand1.classList.remove("swiper-wrapper");
    }

    if (topProductsSlider) {
      topProductsSlider.destroy();
      topProductsSlider = null;
    }
  }
};

toggleActiveTopProducts();
window.addEventListener("resize", toggleActiveTopProducts);



let mySwiperArticle; 

const toggleActiveArticle = () => {
  const sliderOffBrand = document.querySelector(".slider-article");
  const sliderOffBrand1 = document.querySelector(".article-products__cards");

  if (document.body.clientWidth < 1000) {
    if (!sliderOffBrand.classList.contains("swiper")) {
      sliderOffBrand.classList.add("swiper");
    }

    if (!sliderOffBrand1.classList.contains("swiper-wrapper")) {
      sliderOffBrand1.classList.add("swiper-wrapper");
    }

    if (!mySwiperArticle) {
      mySwiperArticle = new Swiper(".slider-article", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        breakpoints: {
          250: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          736: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
        },
      });
    }
  } else {
    if (sliderOffBrand.classList.contains("swiper")) {
      sliderOffBrand.classList.remove("swiper");
    }
    if (sliderOffBrand1.classList.contains("swiper-wrapper")) {
      sliderOffBrand1.classList.remove("swiper-wrapper");
    }

    if (mySwiperArticle) {
      mySwiperArticle.destroy();
      mySwiperArticle = null;
    }
  }
};

toggleActiveArticle();
window.addEventListener("resize", toggleActiveArticle);
 




  
  
  

