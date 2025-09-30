
// ================== space ==================

window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-overlay");
  const percentText = document.querySelector(".loading-percent");
  if (!loader || !percentText) return;

  let load = 0;
  const interval = setInterval(() => {
    load++;
    percentText.textContent = `${load}%`;
    percentText.style.opacity = String(Math.max(0, 1 - load / 100));

    if (load >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('is-hidden');
      }, 400);
    }
  }, 20); // ~2s
});
