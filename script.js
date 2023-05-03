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
    retreatItems();
    setTimeout(() => {
      dropdownMenu.style.display = "none";
    }, 500);
    burger.classList.remove("burger-open");
  } else {
    dropdownMenu.style.display = "flex";
    burger.classList.add("burger-open");
    fallItems();
  }

  let items = document.querySelectorAll(".dropdown-item");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      retreatItems();
      setTimeout(() => {
        dropdownMenu.style.display = "none";
      }, 500);
      burger.classList.remove("burger-open");
    });
  });
});

function fallItems() {
  let items = document.querySelectorAll(".dropdown-item");
  items.forEach(function (item, index) {
    item.style.animation = "dropdown-item-fall 0.5s forwards";
    item.style.animationDelay = index * 0.1 + "s";
  });
}

function retreatItems() {
  let items = document.querySelectorAll(".dropdown-item");
  items.forEach(function (item, index) {
    item.style.animation = "dropdown-item-rise 0.5s forwards";
    item.style.animationDelay = index * 0.1 + "s";
  });
}

console.log(`
 _   _ 
| | | |
| |_| |
|  _  |
| | | |
|_| |_|

`);
