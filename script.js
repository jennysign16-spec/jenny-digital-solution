/* ==========================
   JENNY DIGITAL SOLUTION
   SCRIPT.JS
========================== */

// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.10)";
  }
});

// Fade-in Animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2
  }
);

document
  .querySelectorAll(
    ".card, .portfolio-card, .testimonial, .why-grid div"
  )
  .forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.7s ease";
    observer.observe(item);
  });

// Current Year in Footer (optional)
const footer = document.querySelector("footer p");

if (footer) {
  footer.innerHTML =
    `&copy; ${new Date().getFullYear()} Jenny Digital Solution. All Rights Reserved.`;
}

console.log("Jenny Digital Solution website loaded successfully.");
