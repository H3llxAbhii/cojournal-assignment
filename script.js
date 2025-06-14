// ================= Navbar Mobile Menu Toggle =================

// this to pull the checkbox input used to toggle mobile menu
let menuToggle = document.getElementById("menu-toggle");

// Function to close the mobile menu
function closeMenu() {
  menuToggle.checked = false;
}

// Adds glow effect on link click (Desktop + Mobile) + auto-close mobile menu
document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active-glow"); // Add temporary glowing effect
    setTimeout(() => link.classList.remove("active-glow"), 600); // Remove glow after 600ms
    closeMenu(); // Close mobile menu when a link is clicked
  });
});

// ================= Hero Section Image Slider =================

// Get required DOM elements
const sliderImages = document.querySelector(".slider-images");
const slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const dotsContainer = document.querySelector(".dots");

let index = 0; // Current slide index
const total = slides.length; // Total number of slides

// === Create navigation dots dynamically based on slide count ===
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active"); // First dot is active initially
  dot.addEventListener("click", () => goToSlide(i)); // Jump to clicked dot's slide
  dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll(".dot"));

// === Update slider position and active dot ===
function update() {
  sliderImages.style.transform = `translateX(-${index * 100}%)`; // Slide shift
  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active"); // Highlight current dot
}

// === Jump to a specific slide ===
function goToSlide(i) {
  index = (i + total) % total; // Loop around slides
  update(); // Apply changes
}

// === Left and Right Arrow Button Controls ===
prevBtn.addEventListener("click", () => goToSlide(index - 1));
nextBtn.addEventListener("click", () => goToSlide(index + 1));

// ================= Swipe Gesture Support (Touch Devices) =================
let startX = 0;
const threshold = 50; // Minimum swipe distance in px

// Capture starting X position on touch
sliderImages.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// Determine direction and move to next/prev on touchend
sliderImages.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const dx = startX - endX;

  if (Math.abs(dx) > threshold) {
    goToSlide(index + (dx > 0 ? 1 : -1)); // Right swipe → next, left swipe → prev
  }
});

// ================= Autoplay Functionality =================
let auto = setInterval(() => goToSlide(index + 1), 5000); // Slide every 5 seconds

// === Pause autoplay on hover/touch interaction ===
const stopAuto = () => clearInterval(auto);

sliderImages.addEventListener("pointerenter", stopAuto); // Pause on hover
sliderImages.addEventListener("pointerleave", () => {
  auto = setInterval(() => goToSlide(index + 1), 5000); // Resume autoplay on leave
});
lock - scroll;
