"use strict";

const toggleEl = document.querySelector(".toggle");
const toggleDotEl = document.querySelector(".toggle__dot");

//When toggle clicked on mobile
let currentTheme = 1;
toggleEl.addEventListener("click", function () {
  currentTheme++;
  //No such theme, go back to 1
  if (currentTheme === 4) {
    currentTheme = 1;
  }
  //Changing theme visually
  if (currentTheme === 1) {
    toggleDotEl.classList.add("dot-location-1");
    toggleDotEl.classList.remove("dot-location-2");
    toggleDotEl.classList.remove("dot-location-3");
  } else if (currentTheme === 2) {
    toggleEl.classList.remove("dot-location-1");
    toggleDotEl.classList.add("dot-location-2");
    toggleDotEl.classList.remove("dot-location-3");
  } else if (currentTheme === 3) {
    toggleDotEl.classList.remove("dot-location-1");
    toggleDotEl.classList.remove("dot-location-2");
    toggleDotEl.classList.add("dot-location-3");
  }
});
