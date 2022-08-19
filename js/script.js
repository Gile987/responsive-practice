const button = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStart = false;

button.addEventListener('click', () => {
  button.classList.toggle('open');
  overlay.classList.toggle('overlay-visible');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
});

const scrollPage = () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100 && !scrollStart) {
    countUp();
    scrollStart = true;
  } else if (scrollPosition < 100 && scrollStart) {
    reset();
    scrollStart = false;
  };
};

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
};

const reset = () => {
  counters.forEach(counter => {
    counter.innerHTML = '0';
  });
};

document.addEventListener('scroll', scrollPage);
