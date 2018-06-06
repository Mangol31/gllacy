var modalWindowEnter = document.querySelector(".modal-window-enter");
var modalWindowSearch = document.querySelector(".modal-window-search");
var modalCartOrder = document.querySelector(".modal-window-order");

var enterButton = document.querySelector(".search-enter-cart_item__enter-button");

var searchButton = document.querySelector(".search-enter-cart_item__search-button");

var cartButton = document.querySelector(".search-enter-cart_item__cart-button");

enterButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindowEnter.classList.toggle("visually-hidden");
});

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindowSearch.classList.toggle("visually-hidden");
});

cartButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCartOrder.classList.toggle("visually-hidden");
});