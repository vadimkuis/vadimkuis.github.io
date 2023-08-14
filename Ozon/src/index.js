import cart from "./modules/cart";
import load from "./modules/load";
import search from "./modules/search";
import catalog from "./modules/catalog";
import filter from "./modules/filter";

// Работа с корзиной
cart();

// Загрузка рендера
load();

// Поиск по сайту
search();

// Поиск по каталогу
catalog();

// Поиск по цене
filter();
