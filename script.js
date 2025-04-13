// Smooth Scroll for Nav Links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Theme Toggle (Dark/Light)
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;
  
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
  
    // Save user preference to localStorage
    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
  
  // Apply saved theme on load
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
  });
  
  // Modal Open
  document.querySelectorAll('.know-more').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const modalId = button.getAttribute('data-modal-target');
      const modal = document.querySelector(modalId);
      if (modal) modal.style.display = 'block';
    });
  });
  
  // Modal Close (X button)
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.closest('.Modal').style.display = 'none';
    });
  });
  
  // Modal Close (Click outside)
  window.addEventListener('click', e => {
    document.querySelectorAll('.Modal').forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  