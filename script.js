"use strict";

const toggleEl = document.querySelector(".toggle");
const toggleDotEl = document.querySelector(".toggle__dot");
const root = document.querySelector(":root");

//Theme switching (START)
let currentTheme = 1;
toggleEl.addEventListener("click", function () {
  // Inner functions (start)
  const changeVariableColor = function (varName, newColor) {
    root.style.setProperty(varName, newColor);
  };
  // Inner functions (end)

  currentTheme++;
  //No such theme, go back to 1
  if (currentTheme === 4) {
    currentTheme = 1;
  }

  if (currentTheme === 1) {
    //Moving toggle dot
    toggleDotEl.classList.add("dot-location-1");
    toggleDotEl.classList.remove("dot-location-2");
    toggleDotEl.classList.remove("dot-location-3");
    changeVariableColor("--main-text-color", "white");
    changeVariableColor("--keypad-bg-color", "hsl(223, 31%, 20%)");
    changeVariableColor("--screen-bg-color", "hsl(224, 36%, 15%)");
    changeVariableColor("--main-bg-color", "hsl(222, 26%, 31%)");
    changeVariableColor("--cancel-key-bg-color", "hsl(225, 21%, 49%)");
    changeVariableColor("--cancel-key-shadow-color", "hsl(224, 28%, 35%)");
    changeVariableColor("--equals-bg-color", "hsl(6, 63%, 50%)");
    changeVariableColor("--equals-shadow-color", "hsl(6, 70%, 34%)");
    changeVariableColor("--key-bg-color", "hsl(30, 25%, 89%)");
    changeVariableColor("--key-shadow-color", "hsl(28, 16%, 65%)");
    changeVariableColor("--dark-text-color", "hsl(221, 14%, 31%)");
  } else if (currentTheme === 2) {
    toggleEl.classList.remove("dot-location-1");
    toggleDotEl.classList.add("dot-location-2");
    toggleDotEl.classList.remove("dot-location-3");
    changeVariableColor("--main-text-color", "hsl(60, 10%, 19%)");
    changeVariableColor("--keypad-bg-color", "hsl(0, 5%, 81%)");
    changeVariableColor("--screen-bg-color", "hsl(0, 0%, 93%)");
    changeVariableColor("--main-bg-color", "hsl(0, 0%, 90%)");
    changeVariableColor("--cancel-key-bg-color", "hsl(185, 42%, 37%)");
    changeVariableColor("--cancel-key-shadow-color", "hsl(185, 58%, 25%)");
    changeVariableColor("--equals-bg-color", "hsl(25, 98%, 40%)");
    changeVariableColor("--equals-shadow-color", "hsl(25, 99%, 27%)");
    changeVariableColor("--key-bg-color", "hsl(30, 25%, 89%)");
    changeVariableColor("--key-shadow-color", "hsl(28, 16%, 65%)");
    changeVariableColor("--dark-text-color", "hsl(221, 14%, 31%)");
  } else if (currentTheme === 3) {
    //Moving toggle dot
    toggleDotEl.classList.remove("dot-location-1");
    toggleDotEl.classList.remove("dot-location-2");
    toggleDotEl.classList.add("dot-location-3");
    changeVariableColor("--main-text-color", "white");
    changeVariableColor("--keypad-bg-color", "hsl(268, 71%, 12%)");
    changeVariableColor("--screen-bg-color", "hsl(268, 71%, 12%)");
    changeVariableColor("--main-bg-color", "hsl(268, 75%, 9%)");
    changeVariableColor("--key-bg-color", "hsl(268, 47%, 21%)");
    changeVariableColor("--key-shadow-color", "hsl(290, 70%, 36%)");
    changeVariableColor("--dark-text-color", "hsl(52, 100%, 62%)");
    changeVariableColor("--equals-bg-color", "hsl(176, 100%, 44%)");
    changeVariableColor("--equals-shadow-color", "hsl(177, 92%, 70%)");
    changeVariableColor("--main-text-color", "hsl(52, 100%, 62%)");
    changeVariableColor("--cancel-key-bg-color", "hsl(281, 89%, 26%)");
    changeVariableColor("--cancel-key-shadow-color", "hsl(285, 91%, 52%)");
  }
});
//Theme switching (END)

//Button animations (START)
const keys = Array.from(document.querySelectorAll(".key"));
for (const key of keys) {
  let hold = true;
  key.addEventListener("pointerdown", () => {
    key.classList.add("clicked");
    console.log("key down");
  });
  key.addEventListener("pointerup", () => {
    key.classList.remove("clicked");
    console.log("key down");
  });
}
//Button animations (END)
