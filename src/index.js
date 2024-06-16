const navbar = document.querySelector('.header .navbar')
const menu = document.querySelector('#menu')

menu.onclick = () => {
  navbar.classList.toggle('active')
}

const changeIcon = function (icon) {
  icon.classList.toggle('fa-times')
}

// const sliderSelector = '.swiper-container',
//   options = {
//     init: false,
//     loop: true,
//     speed: 800,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     centeredSlides: true,
//     effect: 'coverflow',
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 60,
//       modifier: 1,
//       slideShadows: true,
//     },
//     grabCursor: true,
//     parallax: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//       1000: {
//         slidesPerView: 2,
//         spaceBetween: 0,
//       },
//       767: {
//         slidesPerView: 2,
//         spaceBetween: -80,
//       },
//     },
//   }
// const mySwiper = new Swiper(sliderSelector, options)
// mySwiper.init()
