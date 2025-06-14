// ================= Swiper Slider for "Our Services" Cards =================

// Initialize Swiper instance on .mySwiper container
const swiper = new Swiper(".mySwiper", {
  loop: true, // Enable infinite loop sliding
  centeredSlides: true, // Center the active slide
  slidesPerView: 1.2, // Show partial next/prev slides (mobile)
  spaceBetween: 20, // Space between slides in px

  // === Autoplay settings ===
  autoplay: {
    delay: 4000, // Slide every 4 seconds
    disableOnInteraction: false, // Keep autoplay running after user interactions
  },

  // === Pagination (dots) ===
  pagination: {
    el: ".swiper-pagination", // Target pagination container
    clickable: true, // Make dots clickable
  },

  // === Navigation buttons (left/right arrows) ===
  navigation: {
    nextEl: ".swiper-button-next", // Right arrow
    prevEl: ".swiper-button-prev", // Left arrow
  },

  // === Responsive breakpoints for larger screens ===
  breakpoints: {
    768: {
      slidesPerView: 2.5, // Tablets and up
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3, // Desktops and up
      spaceBetween: 30,
    },
  },
});
