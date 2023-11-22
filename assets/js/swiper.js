document.addEventListener("DOMContentLoaded", function() {
    var introbgSlider = new Swiper('.swiper__introbg', {
        navigation: {
            nextEl: '.intro__projects-btns__right',
            prevEl: '.intro__projects-btns__left',
        },
        speed: 1000,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        loop: true,
        allowTouchMove: false,
        simulateTouch: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    var intro_projectimgSlider = new Swiper('.swiper__intro__project_img', {
        speed: 1000,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.intro__projects-btns__right',
            prevEl: '.intro__projects-btns__left',
        },
        allowTouchMove: false,
        simulateTouch: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
});

var intro_projectNumSlider = new Swiper('.swiper_intro__project_title_num',{
    speed: 1000,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.intro__projects-btns__right',
        prevEl: '.intro__projects-btns__left',
    },
    allowTouchMove: false,
    simulateTouch: false,
    effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
});

var intro_projectTextSlider = new Swiper('.swiper_intro__project-text',{
    speed: 1000,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.intro__projects-btns__right',
        prevEl: '.intro__projects-btns__left',
    },
    allowTouchMove: false,
    simulateTouch: false,
    effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
});