/* LESSON 3 - Programming Tasks */

/* Profile Object */
// Add properties to the myprofile object
let myProfile = {};
myProfile.name = "Lindiwe Mokoena";
myProfile.photo = "images/mypicture.jpg";
myProfile.favoriteFoods = [
  "Samp",
  "Spaghetti",
  "Beef stew",
  "Burger",
  "Ice cream",
  "Pizza",
  "Potato salad"
];
myProfile.hobbies = [
  "Reading",
  "Watching movies",
  "Camping",
  "Listening to music",
  "Cooking"
];
myProfile.placesLived = [];

/* Populate Profile Object with placesLive objects */
// Add an item to the placesLived array as an object with two properties: place and length.

let placeLived1 = {
  place: "Soweto, South Africa",
  length: "7 years"
};
myProfile.placesLived.push(placeLived1);

// Add additional objects to the placesLived array for each place you have lived.

let placeLived2 = {
  place: "Tembisa, South Africa",
  length: "20 years"
};
myProfile.placesLived.push(placeLived2);

let placeLived3 = {
  place: "Boksburgh, South Africa",
  length: "2 years"
};
myProfile.placesLived.push(placeLived3);

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List */
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
// Create a list of items for each hobby and append them to the HTML <ul> element with an ID of hobbies.
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
// Create HTML <dt> and <dd> elements for each place lived and append them to the HTML <dl> element with an ID of places-lived.

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  let dl = document.querySelector('#places-lived');
  dl.appendChild(dt);
  dl.appendChild(dd);
});







