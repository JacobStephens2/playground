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
const bottomBarButton = document.querySelector(".bottom-bar-button");

bottomBarButton.addEventListener(
  "click",
  () => {
    if (
      bottomBar.classList.contains("slideOut") ||
      bottomBar.classList.contains("slideIn")
    ) {
      bottomBar.classList.toggle("slideOut");
      bottomBar.classList.toggle("slideIn");
    } else {
      bottomBar.classList.toggle("slideOut");
    }
  },
  false
);
