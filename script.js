"use strict";

/*PRELOADER*/

let loader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("preloader-fade");
  }, 1200);
  setTimeout(function () {
    loader.style.display = "none";
  }, 1500);
});
