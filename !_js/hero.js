
// ================== Space ================== biar rapi sikit

const boxes = document.querySelectorAll(".box");

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", checkBoxes);
checkBoxes();

const panels = document.querySelectorAll(".panel");
const audioPlayer = document.getElementById("skill-audio");

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    const isActiveBefore = panel.classList.contains("active");
    removeActiveClasses();

    if (!isActiveBefore) {
      panel.classList.add("active");

      const audioPath = panel.getAttribute("data-audio");
      if (audioPath) {
        audioPlayer.src = audioPath;
        audioPlayer.play();
      }
    }
  });
});
