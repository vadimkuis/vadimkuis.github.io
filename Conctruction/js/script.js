document.addEventListener('DOMContentLoaded', () => {
    $('.hamburger').on('click', function () {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $('.header-mobile-wrap').slideUp(500);
        } else {
            $(this).addClass('is-active');
            $('.header-mobile-wrap').slideDown(500);
        }

    });


    const bannerSwiper = new Swiper('.banner-swiper', {
        speed: 1000,
        spaceBetween: 0,
        autoHeight: true,
        navigation: {
            nextEl: '.banner-swiper .swiper-button-next',
            prevEl: '.banner-swiper .swiper-button-prev',
        },
        pagination: {
            el: '.banner-swiper .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    $('.services-btn').magnificPopup({
        type: 'inline',
        showCloseBtn: false,
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });

    $('.modal-form-close').on('click', function () {
        $.magnificPopup.close();
    });

    $('.gallery-wrap a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });

    $('.gallery-btn a').on('click', function (e) {
        e.preventDefault();

        var gallerytItem = $('.gallery-item');

        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $(this).text('Показать ещё')
            gallerytItem.each(function () {
                if ($(this).hasClass('is-active')) {
                    $(this).removeClass('is-active');
                    $(this).slideUp();
                }
            });
        } else {
            $(this).addClass('is-active');
            $(this).text('Скрыть')
            gallerytItem.each(function () {
                if (!$(this).is(':visible')) {
                    $(this).addClass('is-active');
                    $(this).slideDown();
                }
            });
        }
    });

    const reviewsSwiper = new Swiper('.reviews-swiper', {
        speed: 1000,
        spaceBetween: 20,
        pagination: {
            el: '.reviews-swiper .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            575: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
        }
    });

    var number = document.querySelector('.numbers-num1'),
        numberTop = number.getBoundingClientRect().top,
        start = +number.innerHTML, end = +number.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            var interval = setInterval(function () {
                number.innerHTML = ++start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 1);
        }
    });
    var number1 = document.querySelector('.numbers-num2'),
        number1Top = number1.getBoundingClientRect().top,
        start1 = +number1.innerHTML, end1 = +number1.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > number1Top - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            var interval1 = setInterval(function () {
                number1.innerHTML = ++start1;
                if (start1 == end1) {
                    clearInterval(interval1);
                }
            }, 50);
        }
    });
    var number2 = document.querySelector('.numbers-num3'),
        number2Top = number2.getBoundingClientRect().top,
        start2 = +number2.innerHTML, end2 = +number2.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > number2Top - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            var interval2 = setInterval(function () {
                number2.innerHTML = ++start2;
                if (start2 == end2) {
                    clearInterval(interval2);
                }
            }, 25);
        }
    });
    var number3 = document.querySelector('.numbers-num4'),
        number3Top = number3.getBoundingClientRect().top,
        start3 = +number3.innerHTML, end3 = +number3.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > number3Top - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            var interval3 = setInterval(function () {
                number3.innerHTML = ++start3;
                if (start3 == end3) {
                    clearInterval(interval3);
                }
            }, 10);
        }
    });

})