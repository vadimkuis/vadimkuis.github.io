$(function () {
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="/images/Arrow 2.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="/images/Arrow 1.svg" alt="">',
        responsive:[
            {
                breakpoint:361,
                settings:{
                    variableWidth: false,
                    slidesToShow: 1,
                    arrows:false
                }
        }
    ]
    });
});