import { renderNav } from "./nav.js";

// Inject nav + footer on every page
document.addEventListener("DOMContentLoaded", () => {
  renderNav();

  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} YSA Connect. Created by Christian Uche.</p>
  `;
});

// Image slider logic
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === i);
      dots[idx].classList.toggle("active", idx === i);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Clickable dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });
});
