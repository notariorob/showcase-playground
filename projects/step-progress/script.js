const progress = document.getElementById('progress');
const back = document.getElementById('back');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeStep = 1;

const updateProgress = () => {
  circles.forEach((circle, index) => {
    if (index < activeStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const progressPercentage = ((activeStep - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressPercentage}%`;
};

const updateButtons = () => {
  back.disabled = activeStep === 1;
  next.disabled = activeStep === circles.length;
};

const updateDOM = () => {
  updateProgress();
  updateButtons();
};

next.addEventListener('click', () => {
  Math.min(++activeStep, circles.length);
  updateDOM();
});

back.addEventListener('click', () => {
  Math.max(--activeStep, 0);
  updateDOM();
});
