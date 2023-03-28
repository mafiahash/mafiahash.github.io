// выбираем все ссылки в навигационной панели
const navLinks = document.querySelectorAll('header a');

// добавляем обработчик событий для каждой ссылки
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // отменяем стандартное поведение браузера
    event.preventDefault();

    // получаем идентификатор секции, на которую ссылается ссылка
    const sectionId = link.getAttribute('href');

    // получаем элемент секции
    const section = document.querySelector(sectionId);

    // скроллим до секции с дополнительным отступом сверху на 80 пикселей
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 76;
    window.scrollTo({top: sectionTop, behavior: "smooth"});
  });
});
