// Scroll reveal animasi
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".history-item");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    items.forEach(item => {
      const boxTop = item.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
