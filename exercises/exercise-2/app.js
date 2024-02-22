"use strict";

//selecting DOM elements
const BMRForm = document.querySelector(".bmr-form");
const BMRResult = document.querySelector(".bmr-result__value");

//Function to calculate Basal Metabolic Rate using Harris and Benedict Equation
const calculateBMR = (age, gender, height, weight) => {
  const bmr =
    gender === "female"
      ? 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age
      : 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;

  return bmr.toFixed(2);
};

// Function to handle form submission, calculate BMR, and display the result.
const onBMRFormSubmit = (e) => {
  e.preventDefault();
  const age = document.querySelector(".bmr-age__input").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const height = document.querySelector(".bmr-height__input").value;
  const weight = document.querySelector(".bmr-weight__input").value;

  BMRResult.innerHTML = calculateBMR(age, gender, height, weight);
};

// Listens for form submission and calls the onBMRFormSubmit function.
BMRForm.addEventListener("submit", onBMRFormSubmit);
