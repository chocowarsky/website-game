// Reveal on scroll with IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.history-item');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(it => observer.observe(it));
});
