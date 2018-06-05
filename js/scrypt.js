var popup = document.querySelector(".modal")
var modal_show = document.querySelector(".button-contacts")
var modal_close = document.querySelector(".modal-close")
var modal_name = document.querySelector(".modal-name")
var slider = document.querySelector(".sliders")
var slider_control_1 = document.querySelector(".slider-control-1")
var slider_control_2 = document.querySelector(".slider-control-2")
var slider_control_3 = document.querySelector(".slider-control-3")
var catalog_item = document.querySelectorAll(".catalog-item")
var item_info = document.querySelectorAll(".catalog-item-info")

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

slider_control_1.addEventListener("click", function (evt) {
  slider.classList.remove("js-show-slider-2");
  slider.classList.remove("js-show-slider-3");
  slider.classList.add("js-show-slider-1");
});

slider_control_2.addEventListener("click", function (evt) {
  slider.classList.remove("js-show-slider-1");
  slider.classList.remove("js-show-slider-3");
  slider.classList.add("js-show-slider-2");
});

slider_control_3.addEventListener("click", function (evt) {
  slider.classList.remove("js-show-slider-1");
  slider.classList.remove("js-show-slider-2");
  slider.classList.add("js-show-slider-3");
});

// for (var i = 0; i < catalog_item.length; i++) {
//   catalog_item[i]
//   function
// }

// catalog_item.addEventListener("mouseover", function (evt) {
//   evt.preventDefault();
//   console.log("Yep");
//   item_info.classList.add("js-catalog-item-info-slide-up");
// });
//
// catalog_item.addEventListener("mouseout", function (evt) {
//   evt.preventDefault();
//   item_info.classList.remove("js-catalog-item-info-slide-up");
//   item_info.classList.add("js-catalog-item-info-slide-down")
// });
