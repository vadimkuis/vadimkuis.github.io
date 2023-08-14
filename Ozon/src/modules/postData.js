'use strict';

export default postData;

function postData(cart) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(res => res.json());
}