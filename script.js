//"use strict";

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

let theme = localStorage.getItem("data-theme");
const checkbox = document.getElementById("switch");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
};

if (theme === "dark") {
  changeThemeToDark();
}

checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
