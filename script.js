document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const closeNav = document.getElementById("closeNav");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  if (closeNav) {
    closeNav.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  }

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const delay = entry.target.dataset.delay || 0;
    setTimeout(() => {
      entry.target.classList.add("show");
    }, delay);
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.remove("light", "dark");
  body.classList.add(savedTheme);
});

const modalButtons = document.querySelectorAll(".know-more");
modalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const modalId = button.getAttribute("data-modal-target");
    const modal = document.querySelector(modalId);
    if (modal) modal.style.display = "block";
  });
});

const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".Modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  document.querySelectorAll(".Modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.querySelectorAll(".Modal").forEach((modal) => {
  const slides = modal.querySelectorAll(".slide");
  const prev = modal.querySelector(".prev");
  const next = modal.querySelector(".next");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  if (slides.length > 0) {
    showSlide(index);
  }

  if (next) {
    next.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });
  }

  if (prev) {
    prev.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => {
    const fill = document.createElement("div");
    fill.classList.add("progress-bar-fill");
    bar.appendChild(fill);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const progress = bar.getAttribute("data-progress");
          const fill = bar.querySelector(".progress-bar-fill");
          fill.style.width = progress + "%";
          observer.unobserve(bar);
        }
      });
    }, {
      threshold: 0.5
    }
  );

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});
// Show button when user scrolls down even slightly
window.onscroll = function () {
  const mybutton = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// Scroll to top when button is clicked
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
