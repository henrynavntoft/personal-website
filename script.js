"use strict";

//PRELOADER

let loader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("preloader-fade");
  }, 1200);
  setTimeout(function () {
    loader.style.display = "none";
  }, 1500);
});

//THEME SWITCHER

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  const htmlElement = document.documentElement;

  themeToggle.addEventListener("change", () => {
    if (htmlElement.getAttribute("data-theme") === "light") {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
  });
});

//BURGERMENU

document.querySelector(".burger-menu").addEventListener("click", function () {
  let dropdownMenu = document.querySelector(".dropdown-menu");
  let burger = document.querySelector(".burger");

  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
    burger.classList.remove("burger-open");
  } else {
    dropdownMenu.style.display = "flex";
    burger.classList.add("burger-open");
    let items = document.querySelectorAll(".dropdown-item");
    items.forEach(function (item, index) {
      item.style.animation = "none";
      item.offsetHeight;
      item.style.animation = "dropdown-item-fall 0.5s forwards";
      item.style.animationDelay = index * 0.1 + "s";
    });
  }
  let items = document.querySelectorAll(".dropdown-item");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      dropdownMenu.style.display = "none";
      burger.classList.remove("burger-open");
    });
  });
});

console.log(`
 _   _ 
| | | |
| |_| |
|  _  |
| | | |
|_| |_|


`);
