//плавный скролл
document.getElementById('main-action-btn').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});

}

//плавный скролл из меню
let links = document.querySelectorAll('.menu__item > a');

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    }
}

//скролл из карточки в форму
let btns = document.getElementsByClassName('product__button');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: 'smooth'});
    }
}
//валидация формы
let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');

document.getElementById('order-action').onclick = function () {
    let hasError = false;
    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.background = '';
        }
    });
    //результат валидации
    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}

//изменение курса валют
let prices = document.getElementsByClassName('products__items-price');

document.getElementById('change-currency').onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let cofficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        cofficient = 80;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        cofficient = 2.80;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        cofficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        cofficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * cofficient).toFixed(1)+ " " + newCurrency;
    }
}