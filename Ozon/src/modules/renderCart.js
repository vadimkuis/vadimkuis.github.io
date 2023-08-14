'use strict';

export default renderCart;

function renderCart(goods) {
    const  cartWrapper = document.querySelector('.cart-wrapper');

    cartWrapper.innerHTML = "";

    if (goods.length === 0) {
        cartWrapper.insertAdjacentHTML('beforeend', `
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        `);
    } else  {
        goods.forEach((data) => {
            cartWrapper.insertAdjacentHTML('beforeend', `
            <div class="card" data-key="${data.id}">
                <div class="card-img-wrapper">
                    ${data.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <span class="card-img-top"
                    style="background-image: url('${data.img}')"></span>
                </div>
                <div class="card-body justify-content-between">
                    <div class="card-price">${data.price} ₽</div>
                    <h5 class="card-title">${data.title}</h5>
                    <button class="btn btn-primary">Удалить</button>
                </div>
            </div>
        `
            );
        });
    }
}