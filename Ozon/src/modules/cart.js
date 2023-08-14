'use strict';

import renderCart from "./renderCart";
import postData from "./postData";

export default cart;

function cart() {
    const cartButton = document.getElementById('cart');
    const cart = document.querySelector('.cart');
    const goodsWrapper = document.querySelector('.goods');
    const cartTotal = cart.querySelector('.cart-total > span');
    const cartWrapper = cart.querySelector('.cart-wrapper');
    const cartSendBtn = cart.querySelector('.cart-confirm');
    const cartsCounter = cartButton.querySelector('.counter');

    changeTotalCounter();

    cartButton.addEventListener('click', openCart);

    cart.addEventListener('click', (Event) => {
        if (Event.target == event.currentTarget || Event.target.className.indexOf('cart-close') != -1) {
            closeCart();
        }
    });

    goodsWrapper.addEventListener('click', (Event) => {
        if (Event.target.classList.contains('btn-primary')) {
            addToCart(Event);
        }
    });

    cartWrapper.addEventListener('click', (Event) => {
        if (Event.target.classList.contains('btn-primary')) {
            removeToCart(Event);
        }
    });

    cartSendBtn.addEventListener('click', (Event) => {
        const cartArray = getCarts();

        postData(cartArray).then((data) => {
            localStorage.removeItem('cart');
            cartRender(getCarts());
            changeTotalCounter();
        });

    });

    function openCart() {
        const cartArray = getCarts();

        cart.style.display = 'flex';
        document.body.style.overflowY = 'hidden';

        cartRender(cartArray);
    }

    function closeCart() {
        cart.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }

    function addToCart(Event) {
        const card = Event.target.closest('.card');
        const key = card.dataset.key;
        const goods = JSON.parse(localStorage.getItem('goods'));
        const cartArray = getCarts();

        const goodItem = goods.find((item) => {
            return item.id === +key;
        });

        if (goodItem) {
            cartArray.push(goodItem);

            localStorage.setItem('cart', JSON.stringify(cartArray));

            changeTotalCounter();
        }
    }

    function removeToCart(Event) {
        const card = Event.target.closest('.card');
        const key = card.dataset.key;
        const cartArray = getCarts();
        const index = cartArray.findIndex((item) => {
            return item.id ===  +key;
        });

        cartArray.splice(index, 1);

        localStorage.setItem('cart', JSON.stringify(cartArray));

        changeTotalCounter();

        cartRender(cartArray);
    }

    function getCarts() {
         return localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) :
            [];
    }

    function cartRender(cartArray) {
        renderCart(cartArray);
        cartTotal.textContent = getTotalPrice(cartArray);
    }

    function getTotalPrice(cartArray) {
        return cartArray.reduce((res, cur) => {
            return res + cur.price;
        }, 0);
    }

    function changeTotalCounter() {
        const cartArray = getCarts();
        cartsCounter.textContent = cartArray.length;
    }
}