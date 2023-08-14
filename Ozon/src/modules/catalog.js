"use strict";

import getData from "./getData";
import renderGoods from "./renderGoods";
import {categoryFilter} from "./filters";

export default catalog;

function catalog() {
    const catalog =  document.querySelector('.catalog-button');
    const btnCatalog = catalog.querySelector('button');
    const catalogModal = document.querySelector('.catalog');

    let isOpen = false;

    btnCatalog.addEventListener('click', () => toggleModal());

    catalogModal.addEventListener('click', (Event) => {
        if (Event.target.tagName == 'LI') {
            getData().then((data) => {
                renderGoods(categoryFilter(data, Event.target.textContent));
            });
            toggleModal();
        }
    });

    document.addEventListener('click', (Event) => {
       if (!catalog.contains(Event.target) && isOpen) {
           toggleModal();
       }
    });

    function toggleModal() {
        if (isOpen) {
            catalogModal.style.display = 'none';
        }
        else {
            catalogModal.style.display = 'block';
        }
        isOpen = !isOpen;
    }
}