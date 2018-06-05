var popup = document.querySelector(".modal")
var modal_show = document.querySelector(".button-contacts")
var modal_close = document.querySelector(".modal-close")
var modal_name = document.querySelector(".modal-name")

modal_show.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("js-modal-show");
  modal_name.focus();
});

modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("js-modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
          evt.preventDefault();
    if (popup.classList.contains("js-modal-show")) {
      popup.classList.remove("js-modal-show");
    }
  }
});
