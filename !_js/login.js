const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.login-inner');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

// document.querySelector('.login-form').addEventListener('submit', e => {
//   e.preventDefault();
//   alert('Login form submitted!');
// });

// document.querySelector('.register-form').addEventListener('submit', e => {
//   e.preventDefault();
//   alert('Register form submitted!');
// });
