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
    console.log("Apply first theme");
  } else if (currentTheme === 2) {
    console.log("Apply second theme");
  } else if (currentTheme === 3) {
    console.log("Apply third theme");
  }
});
