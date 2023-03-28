const element = document.querySelector('.animate__animated');
element.style.opacity = 0;

window.addEventListener('scroll', animate);

function animate() {
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;

  const windowHeight = window.innerHeight;

  if (elementTop < windowHeight && elementBottom >= 0) {
    element.classList.add('animate__backInUp');
  }
}
