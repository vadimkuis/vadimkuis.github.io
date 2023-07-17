$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev">\n' +
            '    <img src="images/arrow-left.svg" alt="">\n' +
            '</button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext">\n' +
            '    <img src="images/arrow-right.svg" alt="">\n' +
            '</button>',
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active')

    });
    $('.product-item-favorite').on('click', function () {
        $(this).toggleClass('product-item-favorite--active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev">\n' +
            '    <img src="images/arrow-black-left.svg" alt="">\n' +
            '</button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext">\n' +
            '    <img src="images/arrow-black-right.svg" alt="">\n' +
            '</button>',
    });


});