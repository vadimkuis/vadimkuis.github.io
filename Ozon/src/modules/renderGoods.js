'use strict';

export default renderGoods;

function renderGoods(goods) {
    const  goodsWrapper = document.querySelector('.goods');

    localStorage.setItem('goods', JSON.stringify(goods));

    goodsWrapper.innerHTML = "";

    goods.forEach((data) => {
        goodsWrapper.insertAdjacentHTML('beforeend', `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card" data-key="${data.id}">
                    <div class="card-img-wrapper">
                        ${data.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                        <span class="card-img-top"
                        style="background-image: url('${data.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${data.price} ₽</div>
                        <h5 class="card-title">${data.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            </div>
        `
        );
    });
}