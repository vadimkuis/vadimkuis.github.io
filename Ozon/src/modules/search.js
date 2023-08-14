'use strict';

import getData from "./getData";
import renderGoods from "./renderGoods";
import {searchFilter} from "./filters";

export default search;

function search() {
    const searchInput = document.querySelector('.search-wrapper_input');

    searchInput.addEventListener('input', (Event) => {
        getData().then((data) => {
           renderGoods(searchFilter(data, searchInput.value));
        });
    });
}