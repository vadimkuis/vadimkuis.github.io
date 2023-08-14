'use strict';
import getData from "./getData";
import renderGoods from "./renderGoods";

export default load;

function load() {
    getData().then((data) => renderGoods(data));
}