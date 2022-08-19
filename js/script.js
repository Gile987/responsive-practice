const button = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

button.addEventListener('click', () => {
  button.classList.toggle('open');
  overlay.classList.toggle('overlay-visible');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
});

const countUp = () => {
  counters.forEach(counter => {
    counter.innerText = '0';

    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const start = +counter.innerText;
      const step = target / 100;
      const end = target;

      if (start < end) {
        counter.innerText = Math.ceil(start + step);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      };
    };

    updateCount();
  });
}

countUp();
