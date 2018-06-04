var popap = document.querySelector(".modal")
var modal_show = document.querySelector(".button-contacts")
var modal_close = document.querySelector(".modal-close")
var catalog_item = document.querySelectorAll(".catalog-item")
var item_info = document.querySelectorAll(".catalog-item-info")

modal_show.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("js-modal-show");
});

modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.remove("js-modal-show");
});

for (var i = 0; i < catalog_item.length; i++) {
    catalog_item[i].addEventListener('mouseover', function(evt) {
          event.preventDefault();
          item_info.classList.add("js-catalog-item-info-slide-up");
      });
  }

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
