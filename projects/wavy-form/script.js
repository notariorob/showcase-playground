const labels = document.querySelectorAll('form label');
const inputs = document.querySelectorAll('form input');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (char, i) => `<span style="transition-delay: ${35 * i}ms">${char}</span>`
    )
    .join('');
});

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    if (input.value === '') {
      const label = document.querySelector(
        `label[for="${input.getAttribute('name')}"]`
      );
      label.classList.add('raised');
    }
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      const label = document.querySelector(
        `label[for="${input.getAttribute('name')}"]`
      );
      label.classList.remove('raised');
    }
  });
});
