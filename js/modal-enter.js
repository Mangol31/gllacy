var modalWindowEnter = document.querySelector(".modal-window-enter");
var enterButton = document.querySelector(".search-enter-cart_item__enter-button");

enterButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindowEnter.classList.remove("visually-hidden");
});



