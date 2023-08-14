'use strict';

export default getData;

function getData() {
    return fetch('https://test-697ec-default-rtdb.firebaseio.com/goods.json')
        .then((res) => res.json());
}