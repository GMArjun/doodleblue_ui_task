var mySwiper = new Swiper('.swiper-container', {
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
