var modalWindowEnter = document.querySelector(".modal-window-enter");
var modalWindowSearch = document.querySelector(".modal-window-search");
var modalCartOrder = document.querySelector(".modal-window-order");

var enterButton = document.querySelector(".secondary-menu_item__enter-button");

var searchButton = document.querySelector(".search-button");

var cartButton = document.querySelector(".cart-button");

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