import '../scss/main.scss';

const number = document.querySelector('h2') as HTMLHeadingElement;
const btn = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;

let value = 0;

btn.forEach(element => {
  element.addEventListener('click', () => {
    if (element.classList.contains('diminuir')) {
      value--
    } else if (element.classList.contains('aumentar')) {
      value++
    } else {
      value = 0;
    }

    number.textContent = `${value}`
  })
});
