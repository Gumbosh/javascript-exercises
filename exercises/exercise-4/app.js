"use strict";

// Select HTML elements
const hoursSelector = document.querySelector(".hours");
const minutesSelector = document.querySelector(".minutes");
const secondsSelector = document.querySelector(".seconds");

// Function to format time with leading zeros if needed
const formatTime = (time) => (time < 10 ? "0" + time : time);

// Function to update the time and display it in the browser
const updateTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hoursSelector.innerHTML = formatTime(hours);
  minutesSelector.innerHTML = formatTime(minutes);
  secondsSelector.innerHTML = formatTime(seconds);
};

// Initial call to display the current time when page is loaded
updateTime();

// Update and display time every second
setInterval(() => {
  updateTime();
}, 1000);
