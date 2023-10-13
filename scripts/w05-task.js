/* W05: Programming Tasks */

/* Declare and initialize global variables */

// Declare a const variable named templesElement
const templesElement = document.getElementById('temples');

// Declare a global empty array variable to store a list of temples named templeList
const templeList = [];

/* async displayTemples Function */

// Define a function to display only the temple names and images
const displayTemples = (temples) => {
    const templesContainer = document.getElementById("temples");

    // Clear the existing content in the templesContainer
    templesContainer.innerHTML = "";

    temples.forEach((temple) => {
        // Create an HTML <article> element
        const article = document.createElement("article");

        // Create an HTML <h3> element and add the temple's templeName property to this new element
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        // Create an HTML <img> element
        const img = document.createElement("img");

        // Add the temple's imageUrl property to the src attribute
        img.src = temple.imageUrl;

        // Append the <h3> element and the <img> element to the <article> element as children
        article.appendChild(h3);
        article.appendChild(img);

        // Append the <article> element to the templesContainer
        templesContainer.appendChild(article);
    });
};

/* async getTemples Function using fetch() */

const getTemplesData = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (!response.ok) {
        console.error("Network response was not ok.");
        return;
    }

    const data = await response.json();

    // Store the fetched temple data in the global variable templeList
    templeList.push(...data);

    // Call the initial display function with all temples
    displayTemples(templeList);
};

// Call the getTemples function to fetch and process data
getTemplesData();

/* reset Function */

const reset = () => {
    const templesContainer = document.getElementById("temples");

    // Check if templesContainer exists
    if (templesContainer) {
        while (templesContainer.firstChild) {
            templesContainer.removeChild(templesContainer.firstChild);
        }
    } else {
        console.error("templesContainer not found.");
    }
};

/* sortBy Function */

// Define a function to handle sorting and filtering

const sortBy = (filter) => {
    switch (filter) {
        case "utah":
            displayTemples(templeList.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(templeList.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(templeList);
            break;
        default:
            console.error("Invalid filter value.");
    }
};

/* Event Listener */

// Add an event listener for the select element with ID "sortBy"
document.getElementById("sortBy").addEventListener("change", (event) => {
    sortBy(event.target.value);
});

// Call the reset function when needed to clear the <article> elements
reset();