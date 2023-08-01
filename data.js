var elements = document.getElementsByClassName("recipe-container");
// Loop through each recipe container
for (let i = 0; i < elements.length; i++) {
  // Get the elements inside the current recipe container
  var h2 = elements[i].getElementsByTagName("h2")[0];
  var ingredientsList = elements[i].getElementsByClassName("ingredients-list")[0];
  var instructionsList = elements[i].getElementsByClassName("instructions-list")[0];

  console.log(ingredientsList)
  console.log(instructionsList)
  
  // Update the content for each element
  h2.innerHTML = recipes[i].title;
  ingredientsList.innerHTML = recipes[i].ingredients.map(ingredient => `<li>${ingredient}</li>`).join("");
  instructionsList.innerHTML = recipes[i].instructions.split(".").map(instruction => instruction.trim()).filter(Boolean).map(step => `<li>${step}</li>`).join("");
}
