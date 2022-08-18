const button = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

button.addEventListener('click', () => {
  button.classList.toggle('open');
  overlay.classList.toggle('overlay-visible');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
});
