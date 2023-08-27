window.onload = function () {
    new WOW().init();
    var $page = $("html, body");
    $('a[href*="#"]').click(function () {
        $page.animate(
            {
                scrollTop: $($.attr(this, "href")).offset().top,
            },
            400,
        );
        return false;
    });

    $('.menu__btn').click(function () {
        $('.header__menu-items').toggleClass('menu--open');
        $('.menu__close').toggleClass('menu__close--open');
    });

    $('.menu__close, .menu__item-link').click(function () {
        $('.menu__close').removeClass('menu__close--open');
        $('.header__menu-items').removeClass('menu--open');
    });

    $(".sale__item-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: false,
        asNavFor: ".sale__item-slider-nav-content",
        prevArrow: ".sale__item-slider-nav-prev",
        nextArrow: ".sale__item-slider-nav-next",
    });

    $(".sale__item-slider-nav-content").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        asNavFor: ".sale__item-slider",
        prevArrow: ".sale__item-slider-nav-prev",
        nextArrow: ".sale__item-slider-nav-next",
    });

    if ($(window).width() < 768) {
        $(".sale__item-slider-mobile").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: ".sale__item-slider-nav-mobile-content",
        });

        $(".sale__item-slider-nav-mobile-content").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            dots: false,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: true,
            asNavFor: ".sale__item-slider-mobile",
            prevArrow: ".sale__item-slider-nav-mobile-prev",
            nextArrow: ".sale__item-slider-nav-mobile-next",
        });
    }
    ;

    $(".reviews__items").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:
            '<button class="reviews__slider-btnprev">\n' +
            '    <img src="../images/prev.png" alt="">\n' +
            "</button>",
        nextArrow:
            '<button class="reviews__slider-btnnext">\n' +
            '    <img src="../images/next.png" alt="">\n' +
            "</button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content",
        header: ".accordion-item > .accordion-header",
    });

    $(".accordion .ui-accordion-header-active .ui-accordion-header-icon ").on("click", function () {
        $(".accordion").accordion({
            collapsible: true,
            active: false,
        });
    });

    const tabItem = document.querySelectorAll(".tabs__btn-item");
    const tabContent = document.querySelectorAll(".tabs__content-item");

    tabItem.forEach(function (element) {
        element.addEventListener("click", tabs);
    });

    function tabs(evt) {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        tabItem.forEach(function (item) {
            item.classList.remove("tabs__btn-item--active");
        });
        tabTarget.classList.add("tabs__btn-item--active");
        tabContent.forEach(function (item) {
            item.classList.remove("tabs__content-item--active");
        });
        document.querySelector(`#${button}`).classList.add("tabs__content-item--active");
    }
};
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*Модальное окно*/
const modal = $(".modal");
$(".products__desc-btn").click(function () {
    modal.css("display", "block");
});

const zakazClose = $(".modal__content-close");
zakazClose.click(function (event) {
    event.preventDefault();
    modal.css("display", "none");
    location.reload();
});

$('.modal__content-btn').on('click', function () {
    modal.css("display", "none");
});

let borderName = $(".name");
let borderPhone = $(".phone");
let zakazName = $(".name");
let zakazPhone = $(".phone");
let zakazBtn = $(".modal__content-button");
let form = $("#form");
let zakazDone = $(".zakaz__done");

$("#submit").click(function (e) {
    e.preventDefault();

    let name = $("#name");
    let phone = $("#phone");
    let hasError = false;

    $(".error__input-name").hide();
    $(".error__input-phone").hide();

    borderName.css("border", "2px solid #000000");
    borderPhone.css("border", "2px solid #000000");

    if (!name.val()) {
        name.next().show();
        borderName.css("border", "2px solid #ff0035");
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        borderPhone.css("border", "2px solid #ff0035");
        hasError = true;
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), phone: phone.val()},
        }).done(function (msg) {
            if (msg.success) {
                zakazName.css("display", "none");
                zakazPhone.css("display", "none");
                zakazBtn.css("display", "none");
                zakazDone.css("display", "contents");
                zakazClose.css("display", "flex");
            } else {
                alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!");
            }
        });
    }
});
