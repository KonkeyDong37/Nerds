var slider = document.querySelector(".sliders")
var slider_control_1 = document.querySelector(".slider-control-1")
var slider_control_2 = document.querySelector(".slider-control-2")
var slider_control_3 = document.querySelector(".slider-control-3")

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
