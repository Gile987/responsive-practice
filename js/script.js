const button = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');

button.addEventListener('click', () => {
  button.classList.toggle('open');
  overlay.classList.toggle('overlay-visible');
  document.body.classList.toggle('stop-scrolling');
});
