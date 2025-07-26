// script.js - Handles interactivity for the portfolio site
// - Handles contact form submission (demo only, no backend)
// - Smooth scroll for navigation (optional)

// Contact form handler (demo only)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Show a simple alert (replace with real backend in production)
      alert('Thank you for your message! (Demo only, no backend)');
      form.reset();
    });
  }

  // Fade-in on scroll for sections
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => fadeInObserver.observe(el));

  // Optional: Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // (theme toggle logic removed)
});
