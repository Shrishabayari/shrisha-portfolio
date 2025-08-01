//Header/Navbar Toggle
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

//Header/Navbar Toggle
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

// Active Navigation Highlighting
function updateActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  let current = '';
  const scrollPosition = window.scrollY + 100; // Offset for better detection
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Listen for scroll events to update active navigation
window.addEventListener('scroll', updateActiveNavigation);
window.addEventListener('load', updateActiveNavigation);

//Scroll Animations
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

//Theme Toggle (Dark/Light Mode)
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

// Open modal on image click
document.querySelectorAll("[data-modal-target]").forEach(trigger => {
  trigger.addEventListener("click", function () {
    const modal = document.querySelector(this.getAttribute("data-modal-target"));
    if (modal) {
      modal.style.display = "block";
    }
  });
});

// Close modal on '×' click
document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.addEventListener("click", function () {
    this.closest(".Modal").style.display = "none";
  });
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
  document.querySelectorAll(".Modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Image carousel (slide navigation)
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

// Initialize progress bars
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
  
  // Update active navigation on scroll (called here as well for better performance)
  updateActiveNavigation();
};

// Scroll to top when button is clicked
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Enhanced contact form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="_replyto"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();
            
            // Enhanced validation with specific error messages
            if (!name) {
                e.preventDefault();
                alert('Please enter your name.');
                this.querySelector('input[name="name"]').focus();
                return false;
            }
            
            if (!email) {
                e.preventDefault();
                alert('Please enter your email address.');
                this.querySelector('input[name="_replyto"]').focus();
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address (e.g., example@email.com).');
                this.querySelector('input[name="_replyto"]').focus();
                return false;
            }
            
            if (!message) {
                e.preventDefault();
                alert('Please enter your message.');
                this.querySelector('textarea[name="message"]').focus();
                return false;
            }
            
            if (message.length < 10) {
                e.preventDefault();
                alert('Please enter a message with at least 10 characters.');
                this.querySelector('textarea[name="message"]').focus();
                return false;
            }
            
            // Success message
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.remove("light", "dark");
  body.classList.add(savedTheme);
});

// Open modal on image click
document.querySelectorAll("[data-modal-target]").forEach(trigger => {
  trigger.addEventListener("click", function () {
    const modal = document.querySelector(this.getAttribute("data-modal-target"));
    if (modal) {
      modal.style.display = "block";
    }
  });
});

// Close modal on '×' click
document.querySelectorAll(".close").forEach(closeBtn => {
  closeBtn.addEventListener("click", function () {
    this.closest(".Modal").style.display = "none";
  });
});

// Close modal when clicking outside of it
window.addEventListener("click", (e) => {
  document.querySelectorAll(".Modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Image carousel (slide navigation)
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

// Initialize progress bars
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

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="_replyto"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return false;
            }
            
            // Success message
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
});