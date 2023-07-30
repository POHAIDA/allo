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
 



//hover dropdown list step

  $(document).ready(function () {
    const catalogItems = $(".catalog-item");
    const initialLeft = -5;

    const stepByScreenWidth = {
      300:20,
      400:30,
      500: 27, 
      700: 33, 
      800: 25, 
      900: 27, 
      1200: 25, 
      1600: 10, 
      1920: 4, 
    };

    function calculateStep() {
      const windowWidth = $(window).width();
      let step = 10; 
      for (const screenWidth in stepByScreenWidth) {
        if (windowWidth < parseInt(screenWidth)) {
          step = stepByScreenWidth[screenWidth];
          break;
        }
      }
      return step;
    }

    catalogItems.hover(
      function () {
        const currentIndex = catalogItems.index(this);
        const step = calculateStep();
        const newLeft = initialLeft - currentIndex * step;
        $(this)
          .find(".modal-list")
          .css("left", newLeft + "px");
      },
      function () {
        $(this)
          .find(".modal-list")
          .css("left", initialLeft + "px");
      }
    );

    $(window).resize(function () {
      catalogItems.trigger("mouseleave");
    });
  });

