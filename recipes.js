const recipes = [
  {
    title: "Veggie Stir-Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Tofu", "Soy Sauce"],
    instructions: "1. Chop veggies and tofu. 2. Stir-fry in a pan with soy sauce. 3. Serve hot.",
    image: "veggie-stir-fry.jpg",
  },
  {
    title: "Quinoa Salad",
    ingredients: ["Cooked Quinoa", "Cucumbers", "Tomatoes", "Red Onion", "Olive Oil", "Lemon Juice"],
    instructions: "1. Combine all ingredients in a bowl. 2. Mix well. 3. Chill before serving.",
    image: "quinoa-salad.jpg",
  },
  {
    title: "Mango Smoothie",
    ingredients: ["Mango", "Greek Yogurt", "Honey", "Ice Cubes"],
    instructions: "1. Blend all ingredients until smooth. 2. Serve chilled.",
    image: "mango-smoothie.jpg",
  },
  {
    title: "Avocado Toast",
    ingredients: ["Ripe Avocado", "Whole Grain Bread", "Lemon Juice", "Salt", "Black Pepper", "Red Pepper Flakes"],
    instructions: "1. Mash avocado and mix with lemon juice, salt, and pepper. 2. Spread on toasted bread. 3. Sprinkle red pepper flakes on top.",
    image: "avocado-toast.jpg",
  },
  {
    title: "Rainbow Veggie Bowl",
    ingredients: ["Sweet Potato", "Broccoli", "Red Cabbage", "Carrots", "Edamame", "Avocado", "Sesame Seeds", "Tahini Sauce"],
    instructions: "1. Roast sweet potato and broccoli. 2. Arrange vegetables in a bowl. 3. Top with avocado, sesame seeds, and tahini sauce.",
    image: "rainbow veggie bowl.jpg",
  },
  {
    title: "Quinoa-Stuffed Bell Peppers",
    ingredients: ["Quinoa", "Bell Peppers", "Black Beans", "Corn", "Onion", "Garlic", "Cumin", "Chili Powder", "Salt", "Pepper", "Cilantro"],
    instructions: "1. Cook quinoa. 2. Sauté onion and garlic. 3. Mix cooked quinoa with sautéed vegetables, black beans, and corn. 4. Season with cumin, chili powder, salt, and pepper. 5. Stuff the mixture into halved bell peppers. 6. Bake until peppers are tender.",
    image: "quinoa-stuffed-bell-peppers.jpg",
  },
  {
    title: "Grilled Chicken and Vegetable Skewers",
    ingredients: ["Chicken Breast", "Bell Peppers", "Zucchini", "Red Onion", "Cherry Tomatoes", "Olive Oil", "Lemon Juice", "Garlic", "Oregano", "Salt", "Pepper"],
    instructions: "1. Cut chicken and vegetables into chunks. 2. Thread them onto skewers. 3. Make a marinade with olive oil, lemon juice, minced garlic, oregano, salt, and pepper. 4. Marinate the skewers for 30 minutes. 5. Grill until chicken is cooked through and vegetables are tender.",
    image: "grilled-chicken-vegetable-skewers.jpg",
  },
  {
    title: "Cauliflower Fried Rice",
    ingredients: ["Cauliflower Rice", "Carrots", "Peas", "Scallions", "Garlic", "Ginger", "Eggs", "Soy Sauce", "Sesame Oil"],
    instructions: "1. Sauté garlic, ginger, and scallions. 2. Add carrots and peas. 3. Stir in cauliflower rice and cook until tender. 4. Push the mixture to the side and scramble eggs in the pan. 5. Combine everything and season with soy sauce and sesame oil.",
    image: "cauliflower-fried-rice.jpg",
  },
  {
    title: "Spinach and Feta Stuffed Chicken",
    ingredients: ["Chicken Breasts", "Spinach", "Feta Cheese", "Sun-Dried Tomatoes", "Garlic", "Olive Oil", "Paprika", "Salt", "Pepper"],
    instructions: "1. Make a pocket in the chicken breasts. 2. Mix spinach, feta, sun-dried tomatoes, garlic, olive oil, paprika, salt, and pepper. 3. Stuff the mixture into the chicken breasts. 4. Bake until chicken is cooked through.",
    image: "spinach-feta-stuffed-chicken.jpg",
  },
  {
    title: "Zucchini Noodles with Pesto",
    ingredients: ["Zucchini", "Basil", "Pine Nuts", "Parmesan Cheese", "Garlic", "Lemon Juice", "Olive Oil", "Salt", "Pepper"],
    instructions: "1. Spiralize zucchini into noodles. 2. Make pesto by blending basil, pine nuts, parmesan, garlic, lemon juice, olive oil, salt, and pepper. 3. Toss the zucchini noodles with pesto.",
    image: "zucchini-noodles-with-pesto.jpg",
  },
  {
    title: "Salmon and Asparagus Foil Packets",
    ingredients: ["Salmon Fillets", "Asparagus Spears", "Lemon Slices", "Garlic", "Dill", "Salt", "Pepper"],
    instructions: "1. Place salmon fillets and asparagus on a piece of foil. 2. Top with lemon slices, minced garlic, dill, salt, and pepper. 3. Seal the foil packet and bake until salmon is cooked.",
    image: "salmon-asparagus-foil-packets.jpg",
  },
  {
    title: "Greek Chickpea Salad",
    ingredients: ["Chickpeas", "Cucumbers", "Cherry Tomatoes", "Red Onion", "Kalamata Olives", "Feta Cheese", "Lemon Juice", "Olive Oil", "Oregano", "Salt", "Pepper"],
    instructions: "1. Mix chickpeas, diced cucumbers, halved cherry tomatoes, sliced red onion, Kalamata olives, and crumbled feta cheese. 2. Dress with lemon juice, olive oil, oregano, salt, and pepper.",
    image: "greek-chickpea-salad.jpg",
  },
  {
    title: "Pineapple and Cucumber Gazpacho",
    ingredients: ["Pineapple", "Cucumber", "Red Bell Pepper", "Red Onion", "Lime Juice", "Cilantro", "Jalapeno", "Salt", "Pepper"],
    instructions: "1. Blend pineapple, cucumber, red bell pepper, red onion, lime juice, cilantro, jalapeno, salt, and pepper until smooth. 2. Chill before serving.",
    image: "pineapple-cucumber-gazpacho.jpg",
  },
  {
    title: "Eggplant Rollatini",
    ingredients: ["Eggplant", "Ricotta Cheese", "Spinach", "Marinara Sauce", "Mozzarella Cheese", "Parmesan Cheese", "Basil", "Salt", "Pepper"],
    instructions: "1. Slice eggplant thinly and grill until tender. 2. Mix ricotta cheese with sautéed spinach, salt, and pepper. 3. Roll the mixture into the grilled eggplant slices. 4. Top with marinara sauce, mozzarella, and parmesan cheese. 5. Bake until cheese is bubbly.",
    image: "eggplant-rollatini.jpg",
  },
  {
    title: "Black Bean and Quinoa Burrito Bowl",
    ingredients: ["Cooked Quinoa", "Black Beans", "Avocado", "Cherry Tomatoes", "Corn", "Red Onion", "Cilantro", "Lime Juice", "Cumin", "Chili Powder", "Salt", "Pepper"],
    instructions: "1. Mix cooked quinoa with black beans, diced avocado, halved cherry tomatoes, corn, chopped red onion, and cilantro. 2. Dress with lime juice, cumin, chili powder, salt, and pepper.",
    image: "black-bean-quinoa-burrito-bowl.jpg",
  },
];
