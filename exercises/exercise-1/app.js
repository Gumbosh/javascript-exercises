"use strict";

const darkSwitchBtn = document.querySelector(".light-switch-trigger__dark");
const lightSwitchBtn = document.querySelector(".light-switch-trigger__light");
const rootElement = document.documentElement;

const changeTheme = (newTheme) => {
  let dataTheme = rootElement.getAttribute("data-theme");
  if (dataTheme != newTheme) {
    rootElement.setAttribute("data-theme", newTheme);
  }
};

darkSwitchBtn.addEventListener("click", () => changeTheme("dark"));
lightSwitchBtn.addEventListener("click", () => changeTheme("light"));
