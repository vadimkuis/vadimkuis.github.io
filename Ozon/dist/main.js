/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\n\n\n\n\n\n// Работа с корзиной\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// Загрузка рендера\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// Поиск по сайту\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n// Поиск по каталогу\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n// Поиск по цене\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://js-ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\nfunction cart() {\n    const cartButton = document.getElementById('cart');\n    const cart = document.querySelector('.cart');\n    const goodsWrapper = document.querySelector('.goods');\n    const cartTotal = cart.querySelector('.cart-total > span');\n    const cartWrapper = cart.querySelector('.cart-wrapper');\n    const cartSendBtn = cart.querySelector('.cart-confirm');\n    const cartsCounter = cartButton.querySelector('.counter');\n\n    changeTotalCounter();\n\n    cartButton.addEventListener('click', openCart);\n\n    cart.addEventListener('click', (Event) => {\n        if (Event.target == event.currentTarget || Event.target.className.indexOf('cart-close') != -1) {\n            closeCart();\n        }\n    });\n\n    goodsWrapper.addEventListener('click', (Event) => {\n        if (Event.target.classList.contains('btn-primary')) {\n            addToCart(Event);\n        }\n    });\n\n    cartWrapper.addEventListener('click', (Event) => {\n        if (Event.target.classList.contains('btn-primary')) {\n            removeToCart(Event);\n        }\n    });\n\n    cartSendBtn.addEventListener('click', (Event) => {\n        const cartArray = getCarts();\n\n        (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cartArray).then((data) => {\n            localStorage.removeItem('cart');\n            cartRender(getCarts());\n            changeTotalCounter();\n        });\n\n    });\n\n    function openCart() {\n        const cartArray = getCarts();\n\n        cart.style.display = 'flex';\n        document.body.style.overflowY = 'hidden';\n\n        cartRender(cartArray);\n    }\n\n    function closeCart() {\n        cart.style.display = 'none';\n        document.body.style.overflowY = 'auto';\n    }\n\n    function addToCart(Event) {\n        const card = Event.target.closest('.card');\n        const key = card.dataset.key;\n        const goods = JSON.parse(localStorage.getItem('goods'));\n        const cartArray = getCarts();\n\n        const goodItem = goods.find((item) => {\n            return item.id === +key;\n        });\n\n        if (goodItem) {\n            cartArray.push(goodItem);\n\n            localStorage.setItem('cart', JSON.stringify(cartArray));\n\n            changeTotalCounter();\n        }\n    }\n\n    function removeToCart(Event) {\n        const card = Event.target.closest('.card');\n        const key = card.dataset.key;\n        const cartArray = getCarts();\n        const index = cartArray.findIndex((item) => {\n            return item.id ===  +key;\n        });\n\n        cartArray.splice(index, 1);\n\n        localStorage.setItem('cart', JSON.stringify(cartArray));\n\n        changeTotalCounter();\n\n        cartRender(cartArray);\n    }\n\n    function getCarts() {\n         return localStorage.getItem('cart') ?\n            JSON.parse(localStorage.getItem('cart')) :\n            [];\n    }\n\n    function cartRender(cartArray) {\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cartArray);\n        cartTotal.textContent = getTotalPrice(cartArray);\n    }\n\n    function getTotalPrice(cartArray) {\n        return cartArray.reduce((res, cur) => {\n            return res + cur.price;\n        }, 0);\n    }\n\n    function changeTotalCounter() {\n        const cartArray = getCarts();\n        cartsCounter.textContent = cartArray.length;\n    }\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\nfunction catalog() {\n    const catalog =  document.querySelector('.catalog-button');\n    const btnCatalog = catalog.querySelector('button');\n    const catalogModal = document.querySelector('.catalog');\n\n    let isOpen = false;\n\n    btnCatalog.addEventListener('click', () => toggleModal());\n\n    catalogModal.addEventListener('click', (Event) => {\n        if (Event.target.tagName == 'LI') {\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, Event.target.textContent));\n            });\n            toggleModal();\n        }\n    });\n\n    document.addEventListener('click', (Event) => {\n       if (!catalog.contains(Event.target) && isOpen) {\n           toggleModal();\n       }\n    });\n\n    function toggleModal() {\n        if (isOpen) {\n            catalogModal.style.display = 'none';\n        }\n        else {\n            catalogModal.style.display = 'block';\n        }\n        isOpen = !isOpen;\n    }\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\nfunction filter() {\n    const filter = document.querySelector('.filter');\n    const saleCheck = filter.querySelector('#discount-checkbox');\n    const checkMark = filter.querySelector('.filter-check_checkmark');\n    let price = {\n        minPrice: '',\n        maxPrice: '',\n    };\n\n    filter.addEventListener('input', (Event) => {\n        switch (Event.target.id) {\n            case 'min':\n                price.minPrice = Event.target.value;\n                changeFilter();\n                break;\n            case 'max': {\n                price.maxPrice = Event.target.value;\n                changeFilter();\n                break;\n            }\n        }\n    });\n\n    saleCheck.addEventListener('change', () => {\n        checkMark.classList.toggle('checked');\n        changeFilter();\n    });\n\n    function changeFilter() {\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, price, saleCheck.checked));\n        });\n    }\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\n\n\nfunction searchFilter(items, value) {\n    return  items.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));\n}\n\nfunction categoryFilter(items, value) {\n    return  items.filter((item) => item.category.includes(value));\n}\n\nfunction priceFilter(items, values, sale) {\n    return items.filter((item) => {\n        if (values.maxPrice != '') {\n            if (sale) {\n                return +item.price >= +values.minPrice && +item.price  <= +values.maxPrice && item.sale == sale;\n            }\n            else {\n                console.log(2);\n                return +item.price >= +values.minPrice && +item.price  <= +values.maxPrice;\n            }\n        }\n        else if (sale) {\n            return +item.price >= +values.minPrice && item.sale == sale;\n        }\n        else {\n            return +item.price >= +values.minPrice;\n        }\n    });\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\nfunction getData() {\n    return fetch('https://test-697ec-default-rtdb.firebaseio.com/goods.json')\n        .then((res) => res.json());\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\nfunction load() {\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\nfunction postData(cart) {\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\n        method: 'POST',\n        body: JSON.stringify(cart),\n        headers: {\n            'Content-type': 'application/json; charset=UTF-8',\n        },\n    }).then(res => res.json());\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\nfunction renderCart(goods) {\n    const  cartWrapper = document.querySelector('.cart-wrapper');\n\n    cartWrapper.innerHTML = \"\";\n\n    if (goods.length === 0) {\n        cartWrapper.insertAdjacentHTML('beforeend', `\n            <div id=\"cart-empty\">\n                Ваша корзина пока пуста\n            </div>\n        `);\n    } else  {\n        goods.forEach((data) => {\n            cartWrapper.insertAdjacentHTML('beforeend', `\n            <div class=\"card\" data-key=\"${data.id}\">\n                <div class=\"card-img-wrapper\">\n                    ${data.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n                    <span class=\"card-img-top\"\n                    style=\"background-image: url('${data.img}')\"></span>\n                </div>\n                <div class=\"card-body justify-content-between\">\n                    <div class=\"card-price\">${data.price} ₽</div>\n                    <h5 class=\"card-title\">${data.title}</h5>\n                    <button class=\"btn btn-primary\">Удалить</button>\n                </div>\n            </div>\n        `\n            );\n        });\n    }\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\nfunction renderGoods(goods) {\n    const  goodsWrapper = document.querySelector('.goods');\n\n    localStorage.setItem('goods', JSON.stringify(goods));\n\n    goodsWrapper.innerHTML = \"\";\n\n    goods.forEach((data) => {\n        goodsWrapper.insertAdjacentHTML('beforeend', `\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n                <div class=\"card\" data-key=\"${data.id}\">\n                    <div class=\"card-img-wrapper\">\n                        ${data.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n                        <span class=\"card-img-top\"\n                        style=\"background-image: url('${data.img}')\"></span>\n                    </div>\n                    <div class=\"card-body justify-content-between\">\n                        <div class=\"card-price\">${data.price} ₽</div>\n                        <h5 class=\"card-title\">${data.title}</h5>\n                        <button class=\"btn btn-primary\">В корзину</button>\n                    </div>\n                </div>\n            </div>\n        `\n        );\n    });\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\nfunction search() {\n    const searchInput = document.querySelector('.search-wrapper_input');\n\n    searchInput.addEventListener('input', (Event) => {\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n           (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, searchInput.value));\n        });\n    });\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;