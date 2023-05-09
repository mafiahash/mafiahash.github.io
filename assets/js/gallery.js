document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const prevBtn = document.querySelector('.gallery-btn-prev');
    const nextBtn = document.querySelector('.gallery-btn-next');

    prevBtn.addEventListener('click', function () {
        gallery.scrollBy({ left: -gallery.clientWidth, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function () {
        gallery.scrollBy({ left: gallery.clientWidth, behavior: 'smooth' });
    });
});
