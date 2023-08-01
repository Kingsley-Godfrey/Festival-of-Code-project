// Function to display recipes in the HTML page
function displayRecipes(recipes) {
    const recipeContainer = document.querySelector(".recipe-container");

    // Loop through recipes and create HTML elements for each recipe
    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Display recipe details
        recipeCard.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="images/${recipe.image}" alt="${recipe.title}">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
        `;

        // Append the recipe card to the container
        recipeContainer.appendChild(recipeCard);
    });
    console.log("display recipes")
}

// Fetch recipes from the server (uncomment the fetch code if using a server)
// fetch('/recipes')
//   .then((response) => response.json())
//   .then((data) => displayRecipes(data))
//   .catch((error) => console.error('Error fetching recipes:', error));
