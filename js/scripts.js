const button = document.querySelector('body');

button.addEventListener(
    'click',
    () => {
      button.classList.toggle('dark-mode');
    },
    false,
);
