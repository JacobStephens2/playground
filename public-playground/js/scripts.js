const darkModeButton = document.querySelector(".dark-mode-button");
const body = document.querySelector("body");

darkModeButton.addEventListener(
  "click",
  () => {
    body.classList.toggle("dark-mode");
  },
  false
);

const bottomBar = document.querySelector(".bottom-bar");

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY === 0) {
      bottomBar.classList.add("slideIn");
      bottomBar.classList.remove("slideOut");
    } else {
      bottomBar.classList.add("slideOut");
      bottomBar.classList.remove("slideIn");
    }
  },
  false
);
