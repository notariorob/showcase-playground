const boxes = document.querySelectorAll('.box');
const THRESHOLD = window.innerHeight * 0.75;

const checkBoxes = () => {
  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;
    if (top < THRESHOLD) {
      box.classList.add('shown');
    } else {
      box.classList.remove('shown');
    }
  });
};

const handleScroll = () => {
  checkBoxes();
};

checkBoxes();

window.addEventListener('scroll', handleScroll);
