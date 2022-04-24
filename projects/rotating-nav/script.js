const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');
const circle = document.getElementById('circle');
const nav = document.querySelector('nav');

open.addEventListener('click', () => {
  container.classList.add('menu-open');
  circle.classList.add('menu-open');
  nav.classList.add('menu-open');
});

close.addEventListener('click', () => {
  container.classList.remove('menu-open');
  circle.classList.remove('menu-open');
  nav.classList.remove('menu-open');
});
