const introbg = new Swiper('.introbg', {
    speed: 1000,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    loop: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.img-button-next',
        prevEl: '.img-button-prev',
    },
});

const img = new Swiper('.img', {
    speed: 1000,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
        fadeEffect: {
            crossFade: true
    },
    simulateTouch: false,
    navigation: {
        nextEl: '.img-button-next',
        prevEl: '.img-button-prev',
    },
});

const num = new Swiper('.num', {
    speed: 1000,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    loop: true,
    simulateTouch: false,
    effect: 'fade',
        fadeEffect: {
            crossFade: true
    },
    navigation: {
        nextEl: '.img-button-next',
        prevEl: '.img-button-prev',
    },
});

const design = new Swiper('.designSwiper', {
    speed: 500,
    allowTouchMove: false,
    loop: true,
    simulateTouch: false,
    effect: 'fade',
        fadeEffect: {
            crossFade: true
    },
    navigation: {
        nextEl: '.services__designbutton-next',
        prevEl: '.services__designbutton-prev',
    },
});


const arch = new Swiper('.archSwiper', {
    speed: 500,
    allowTouchMove: false,
    loop: true,
    simulateTouch: false,
    effect: 'fade',
        fadeEffect: {
            crossFade: true
    },
    navigation: {
        nextEl: '.services__archbutton-next',
        prevEl: '.services__archbutton-prev',
    },
});


const gallery = new Swiper('.project_gallery', {
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 30,
    allowTouchMove: false,
    simulateTouch: false,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    },
    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },
});