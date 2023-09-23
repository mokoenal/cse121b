/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Lindiwe Mokoena";
let currentYear = new Date().getFullYear();
var profilePicture = "images/mypicture.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("picture img"); 

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ["Samp", "Spaghetti", "Beef stew", "Burger", "Ice cream", "Pizza", "Potato salad"];

// Display the favorite foods in the HTML element
foodElement.textContent = favoriteFoods.join(', ');

// Declare and instantiate a variable for a new favorite food
const newFavoriteFood = "Bananas";

// Add the new favorite food to the existing favoriteFoods array
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${newFavoriteFood}`; 

// Remove the first element in the favoriteFoods array
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`; 

// Remove the last element in the favoriteFoods array
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join("<br>")}`;