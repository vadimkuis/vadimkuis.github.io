document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
});

let loader = $('.loader');
let borderProduct = $('.order__info-choice-input');
let borderName = $('.order__info-data-input-name');
let borderPhone = $('.order__info-data-input-number');
let form = $('#form');
let zakazDone = $('.zakaz__done');

    $('#submit').click(function () {
        let product = $('#product');
        let name = $('#name');
        let phone = $('#phone');
        let hasError = false;

        borderProduct.css('border', '2px solid #760c22');
        borderName.css('border', '2px solid #760c22');
        borderPhone.css('border', '2px solid #760c22');

        loader.css('display', 'flex');

        $('.error__input').hide();

        if (!product.val()) {
            product.next().show();
            hasError = true;
            loader.hide();
            borderProduct.css('border', '2px solid #ff0035');
        }
        if (!name.val()) {
            name.next().show();
            borderName.css('border', '2px solid #ff0035');
            hasError = true;
            loader.hide();
        }
        if (!phone.val()) {
            phone.next().show();
            borderPhone.css('border', '2px solid #ff0035');
            hasError = true;
            loader.hide();
        }
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {product: product.val(), name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        form.css('display', 'none');
                        zakazDone.css('display','flex');
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ")
                    }
                });
        }
    });