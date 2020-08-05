var mySwiper = new Swiper('.init-banner', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3500,
    }
})

var mySwiper = new Swiper('.brandRun', {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        320: {
            spaceBetween: 30
        },
        575: {
            spaceBetween: 60
        },
        768: {
            spaceBetween: 100
        }
    }
})


const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip('show')
})
$(".progress-bar").each(function () {
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});
