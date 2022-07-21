
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


/* TYPED JS */

const typed = new Typed('.typed', {
  strings: ['<span class="text-animation">development and sofware ingenier</span>'],

  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 75,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: 1,
  shouwCursor: true,
  cursorChar: '|',
  contentType: 'html',

})


/* UNLOAD EFECTS */

/* Funcion unload */
function unload() {
  var unload = document.getElementById("unload");
  unload.classList.add("unload");

}
