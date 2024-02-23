"use strict";

// HTML elements selectors
const mealSelector = document.querySelector(".recipe__meal");
const categorySelector = document.querySelector(".recipe__category");
const imageSelector = document.querySelector(".recipe__image");
const ingredientsSelector = document.querySelector(".recipe__ingredients");
const instructionsSelector = document.querySelector(".recipe__instructions");
const sourceSelector = document.querySelector(".recipe__source");
const newRecipeBtnSelector = document.querySelector(".header__new-recipe-btn");

// Debounce function
function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

// Fetch data from www.themealdb.com to get random recipe data.
async function fetchData() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    if (!response.ok) {
      throw new Error("Could not fetch data");
    }

    const data = await response.json();
    const recipe = data.meals[0];

    const meal = recipe.strMeal;
    const category = recipe.strCategory;
    const instructions = recipe.strInstructions;
    const image = recipe.strMealThumb;
    const source = recipe.strSource;

    // Create object representing each ingredient along with its corresponding measurement
    let ingredientIndex = 1;
    const ingredients = [];
    while (
      recipe[`strIngredient${ingredientIndex}`] !== null &&
      recipe[`strIngredient${ingredientIndex}`] !== "" &&
      recipe[`strMeasure${ingredientIndex}`] !== null &&
      recipe[`strMeasure${ingredientIndex}`] !== ""
    ) {
      const ingredient = {
        name: recipe[`strIngredient${ingredientIndex}`],
        measure: recipe[`strMeasure${ingredientIndex}`],
      };
      ingredients.push(ingredient);
      ingredientIndex++;
    }

    // Display data in the browser
    mealSelector.innerHTML = meal;
    categorySelector.innerHTML = category;
    instructionsSelector.innerHTML = instructions;
    imageSelector.src = image;
    imageSelector.alt = `Image shows ${meal}`;
    sourceSelector.href = source;
    ingredientsSelector.innerHTML = ingredients
      .map(
        (ingredient) =>
          `<tr><td>${ingredient.measure}</td><td>${ingredient.name}</td></tr>`
      )
      .join("");
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();

// Add event listener to the "New Recipe" button with debounced function
newRecipeBtnSelector.addEventListener("click", debounce(fetchData, 300));
