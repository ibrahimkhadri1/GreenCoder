const ingredientNutrition = {
    "chicken": { calories: 239, protein: 27, carbs: 0, fat: 14 },
   "beef": { calories: 250, protein: 26, carbs: 0, fat: 17 },
   "pork": { calories: 242, protein: 25, carbs: 0, fat: 16 },
   "fish": { calories: 206, protein: 22, carbs: 0, fat: 12 },
   "shrimp": { calories: 99, protein: 24, carbs: 0.2, fat: 0.3 },
   "salmon": { calories: 208, protein: 20, carbs: 0, fat: 13 },
   "tuna": { calories: 144, protein: 30, carbs: 0, fat: 1.3 },
   // Vegetables
   "tomato": { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
   "onion": { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1 },
   "carrot": { calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2 },
   "broccoli": { calories: 55, protein: 3.7, carbs: 11.2, fat: 0.6 },
   "spinach": { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
   "potato": { calories: 77, protein: 2, carbs: 17, fat: 0.1 },
   "sweet potato": { calories: 86, protein: 1.6, carbs: 20, fat: 0.1 },
   "bell pepper": { calories: 31, protein: 1, carbs: 6, fat: 0.3 },
   "mushroom": { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3 },
   "zucchini": { calories: 17, protein: 1.2, carbs: 3.1, fat: 0.3 },
   "cucumber": { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1 },
   "eggplant": { calories: 25, protein: 1, carbs: 6, fat: 0.2 },
   // Fruits
   "banana": { calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3 },
   "apple": { calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2 },
   "orange": { calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1 },
   "strawberry": { calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
   "blueberry": { calories: 57, protein: 0.7, carbs: 14.5, fat: 0.3 },
   "grape": { calories: 69, protein: 0.7, carbs: 18, fat: 0.2 },
   "mango": { calories: 60, protein: 0.8, carbs: 15, fat: 0.4 },
   "pineapple": { calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1 },
   "watermelon": { calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2 },
   "pear": { calories: 57, protein: 0.4, carbs: 15, fat: 0.1 },
   // Grains & Legumes
   "rice": { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
   "brown rice": { calories: 111, protein: 2.6, carbs: 23, fat: 0.9 },
   "quinoa": { calories: 120, protein: 4.1, carbs: 21.3, fat: 1.9 },
   "lentils": { calories: 116, protein: 9, carbs: 20, fat: 0.4 },
   "chickpeas": { calories: 164, protein: 8.9, carbs: 27.4, fat: 2.6 },
   "black beans": { calories: 132, protein: 8.9, carbs: 23.7, fat: 0.5 },
   "oats": { calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9 },
   "bread": { calories: 265, protein: 9, carbs: 49, fat: 3.2 },
   // Dairy
   "milk": { calories: 42, protein: 3.4, carbs: 5, fat: 1 },
   "cheese": { calories: 402, protein: 25, carbs: 1.3, fat: 33 },
   "yogurt": { calories: 59, protein: 3.5, carbs: 7, fat: 1.5 },
   "butter": { calories: 717, protein: 0.9, carbs: 0, fat: 81 },
   "eggs": { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
   // Condiments & Oils
   "olive oil": { calories: 884, protein: 0, carbs: 0, fat: 100 },
   "vegetable oil": { calories: 884, protein: 0, carbs: 0, fat: 100 },
   "mayonnaise": { calories: 680, protein: 1, carbs: 1, fat: 75 },
   "ketchup": { calories: 101, protein: 1.2, carbs: 27, fat: 0.1 },
   "mustard": { calories: 66, protein: 4.4, carbs: 5, fat: 4 },
   "soy sauce": { calories: 53, protein: 8, carbs: 4, fat: 0.6 },
   "honey": { calories: 304, protein: 0.3, carbs: 82, fat: 0 },
   "sugar": { calories: 387, protein: 0, carbs: 100, fat: 0 },
   // Nuts & Seeds
   "almonds": { calories: 579, protein: 21, carbs: 22, fat: 50 },
   "peanuts": { calories: 567, protein: 25, carbs: 16, fat: 49 },
   "walnuts": { calories: 654, protein: 15, carbs: 14, fat: 65 },
   "chia seeds": { calories: 486, protein: 16.5, carbs: 42, fat: 31 },
   "flaxseeds": { calories: 534, protein: 18, carbs: 29, fat: 42 },
   // Beverages
   "coffee": { calories: 2, protein: 0.3, carbs: 0, fat: 0.1 },
   "tea": { calories: 1, protein: 0, carbs: 0.3, fat: 0 },
   "orange juice": { calories: 45, protein: 0.7, carbs: 10, fat: 0.2 }
};

const recipes = [
{
name: "Chicken Rice Bowl",
ingredients: ["chicken", "rice", "onion"],
instructions: [
   "Heat oil in a pan and sauté onions until golden brown.",
   "Add chicken and cook until no longer pink.",
   "Add cooked rice and mix well, seasoning to taste.",
   "Serve hot with garnishes of your choice."
]
},
{
name: "Tomato Omelette",
ingredients: ["egg", "tomato", "onion"],
instructions: [
   "Beat eggs in a bowl and mix in chopped tomatoes and onions.",
   "Heat oil in a pan and pour in the mixture.",
   "Cook on low heat until set, then flip and cook the other side.",
   "Serve hot with toast or rice."
]
},
{
name: "Cheesy Mashed Potatoes",
ingredients: ["potato", "cheese", "milk"],
instructions: [
   "Boil potatoes until soft and mash them.",
   "Mix in cheese and warm milk until smooth and creamy.",
   "Season with salt and pepper to taste.",
   "Serve as a side dish or enjoy on its own."
]
},
{
name: "Beef Stir Fry",
ingredients: ["beef", "bell pepper", "onion"],
instructions: [
   "Slice beef and bell peppers into thin strips.",
   "Heat oil in a pan and sauté onions until soft.",
   "Add beef and cook until browned.",
   "Add bell peppers and stir fry for a few more minutes.",
   "Serve hot with rice or noodles."
]
},
{
name: "Grilled Salmon with Broccoli",
ingredients: ["salmon", "broccoli", "olive oil"],
instructions: [
   "Preheat grill to medium-high heat.",
   "Brush salmon with olive oil and season with salt and pepper.",
   "Grill salmon for 4-5 minutes per side or until cooked through.",
   "Steam or sauté broccoli until tender.",
   "Serve salmon with a side of broccoli."
]
},
{
name: "Vegetable Quinoa Salad",
ingredients: ["quinoa", "tomato", "cucumber", "bell pepper", "olive oil"],
instructions: [
   "Cook quinoa according to package instructions.",
   "Chop tomatoes, cucumber, and bell pepper into small pieces.",
   "Mix the cooked quinoa with the vegetables.",
   "Drizzle olive oil over the salad and season with salt and pepper.",
   "Toss to combine and serve chilled."
]
},
{
name: "Shrimp and Spinach Stir Fry",
ingredients: ["shrimp", "spinach", "onion"],
instructions: [
   "Heat oil in a pan and sauté onions until soft.",
   "Add shrimp and cook until pink.",
   "Add spinach and cook until wilted.",
   "Season with salt and pepper to taste.",
   "Serve hot with rice or noodles."
]
},
{
name: "Pork and Apple Stir Fry",
ingredients: ["pork", "apple", "onion", "olive oil"],
instructions: [
   "Slice pork and apple into thin strips.",
   "Heat olive oil in a pan and sauté onions until soft.",
   "Add pork and cook until browned.",
   "Add apple and stir fry for a few more minutes.",
   "Serve with rice or on its own."
]
},
{
name: "Potato and Egg Scramble",
ingredients: ["potato", "egg", "onion"],
instructions: [
   "Peel and cube potatoes, then boil until tender.",
   "Heat oil in a pan and sauté onions until golden.",
   "Add boiled potatoes and cook until crispy.",
   "Beat eggs and pour over the potatoes and onions.",
   "Cook until eggs are scrambled and set.",
   "Serve hot with toast or as is."
]
},
{
name: "Spinach and Cheese Stuffed Chicken",
ingredients: ["chicken", "spinach", "cheese", "olive oil"],
instructions: [
   "Preheat oven to 375°F (190°C).",
   "Season chicken with salt and pepper, then slice it to create a pocket.",
   "Sauté spinach in olive oil until wilted, then stuff it inside the chicken pocket.",
   "Add cheese on top of spinach and secure with toothpicks.",
   "Bake for 25-30 minutes or until chicken is cooked through."
]
},
{
name: "Tomato and Cucumber Salad",
ingredients: ["tomato", "cucumber", "olive oil", "salt"],
instructions: [
   "Chop tomatoes and cucumber into bite-sized pieces.",
   "Toss them in a bowl with olive oil and salt.",
   "Serve chilled as a refreshing side dish."
]
},
{
name: "Banana Smoothie",
ingredients: ["banana", "milk", "yogurt"],
instructions: [
   "Blend banana, milk, and yogurt until smooth.",
   "Pour into a glass and serve chilled."
]
},
{
name: "Eggplant Stir Fry",
ingredients: ["eggplant", "onion", "olive oil"],
instructions: [
   "Slice eggplant and onions into strips.",
   "Heat olive oil in a pan and sauté onions until soft.",
   "Add eggplant and cook until tender and golden.",
   "Serve with rice or as a side dish."
]
},
{
name: "Sweet Potato Fries",
ingredients: ["sweet potato", "olive oil", "salt"],
instructions: [
   "Preheat oven to 425°F (220°C).",
   "Peel and slice sweet potatoes into fries.",
   "Toss in olive oil and season with salt.",
   "Bake for 20-25 minutes, flipping halfway through, until crispy."
]
},
{
name: "Quinoa and Black Bean Salad",
ingredients: ["quinoa", "black beans", "tomato", "olive oil"],
instructions: [
   "Cook quinoa according to package instructions.",
   "Rinse and drain black beans.",
   "Chop tomatoes and mix with quinoa and black beans.",
   "Drizzle with olive oil and season with salt and pepper.",
   "Toss well and serve cold or at room temperature."
]
},
{
name: "Grilled Tuna Steak",
ingredients: ["tuna", "olive oil", "soy sauce"],
instructions: [
   "Brush tuna steaks with olive oil and soy sauce.",
   "Grill on medium-high heat for 2-3 minutes per side.",
   "Serve with a side of vegetables or rice."
]
},
{
name: "Pork and Potato Skillet",
ingredients: ["pork", "potato", "onion", "olive oil"],
instructions: [
   "Cube potatoes and boil until tender.",
   "Heat olive oil in a skillet and sauté onions until golden.",
   "Add pork and cook until browned.",
   "Add boiled potatoes and cook until crispy.",
   "Season with salt, pepper, and herbs of choice, then serve."
]
},
{
name: "Salmon with Mango Salsa",
ingredients: ["salmon", "mango", "onion", "lime"],
instructions: [
   "Season salmon with salt and pepper, then grill or bake until cooked through.",
   "Chop mango and onion into small pieces.",
   "Mix mango, onion, and a squeeze of lime to make salsa.",
   "Top the cooked salmon with mango salsa and serve."
]
},
{
name: "Broccoli and Cheese Soup",
ingredients: ["broccoli", "cheese", "milk", "butter"],
instructions: [
   "In a pot, melt butter and sauté chopped broccoli until tender.",
   "Add milk and bring to a simmer.",
   "Blend the soup until smooth, then return to heat.",
   "Stir in cheese until melted and season with salt and pepper."
]
},
{
name: "Eggplant Parmesan",
ingredients: ["eggplant", "cheese", "tomato", "olive oil"],
instructions: [
   "Slice eggplant and coat with olive oil, salt, and pepper.",
   "Bake or fry the eggplant slices until golden and crispy.",
   "Top with tomato sauce and cheese, then bake until cheese is melted."
]
},
{
name: "Lentil Soup",
ingredients: ["lentils", "onion", "carrot", "tomato", "olive oil"],
instructions: [
   "Sauté onions and carrots in olive oil until softened.",
   "Add lentils and chopped tomatoes, then cover with water or broth.",
   "Simmer for 30 minutes or until lentils are tender.",
   "Season with salt, pepper, and herbs of choice, then serve."
]
},
{
name: "Chicken Tacos",
ingredients: ["chicken", "onion", "bell pepper", "tortilla"],
instructions: [
   "Cook chicken in a skillet until browned and cooked through.",
   "Sauté onions and bell peppers until softened.",
   "Warm tortillas and fill with chicken, onions, and peppers.",
   "Top with your favorite taco toppings and serve."
]
},
{
name: "Grilled Vegetable Skewers",
ingredients: ["zucchini", "bell pepper", "onion", "olive oil"],
instructions: [
   "Cut zucchini, bell peppers, and onions into chunks.",
   "Thread the vegetables onto skewers and brush with olive oil.",
   "Grill until tender and slightly charred, about 10 minutes."
]
},
{
name: "Peanut Butter Banana Smoothie",
ingredients: ["banana", "peanut butter", "milk", "yogurt"],
instructions: [
   "Blend banana, peanut butter, milk, and yogurt until smooth.",
   "Serve chilled in a glass."
]
},
{
name: "Stuffed Bell Peppers",
ingredients: ["bell pepper", "rice", "ground beef", "tomato", "cheese"],
instructions: [
   "Cut the tops off bell peppers and remove seeds.",
   "Cook rice and ground beef together, then mix with chopped tomatoes.",
   "Stuff the mixture into the peppers and top with cheese.",
   "Bake at 375°F (190°C) for 25 minutes or until the peppers are tender."
]
},
{
name: "Cucumber and Yogurt Salad",
ingredients: ["cucumber", "yogurt", "garlic", "olive oil"],
instructions: [
   "Chop cucumber into small pieces.",
   "Mix with yogurt, minced garlic, and a drizzle of olive oil.",
   "Season with salt and pepper, then serve chilled."
]
},
{
name: "Tuna Salad",
ingredients: ["tuna", "tomato", "onion", "olive oil"],
instructions: [
   "Mix canned tuna, chopped tomatoes, and onions in a bowl.",
   "Drizzle with olive oil and season with salt and pepper.",
   "Serve as a light lunch or snack."
]
},
{
name: "Sweet Potato and Black Bean Chili",
ingredients: ["sweet potato", "black beans", "onion", "tomato", "spices"],
instructions: [
   "Dice sweet potatoes and cook until soft.",
   "Sauté onions and add chopped tomatoes.",
   "Add black beans and cooked sweet potatoes to the pot.",
   "Season with chili powder, cumin, and salt, then simmer for 20 minutes."
]
},
{
name: "Apple Cinnamon Oatmeal",
ingredients: ["oats", "apple", "cinnamon", "milk"],
instructions: [
   "Cook oats in milk until soft and creamy.",
   "Chop apple into small pieces and stir into the oatmeal.",
   "Add a sprinkle of cinnamon and serve warm."
]
},
{
name: "Broccoli and Rice Casserole",
ingredients: ["broccoli", "rice", "cheese", "milk"],
instructions: [
   "Preheat oven to 375°F (190°C).",
   "Cook rice and steam broccoli until tender.",
   "Mix rice, broccoli, cheese, and milk in a casserole dish.",
   "Bake for 20-25 minutes until bubbly and golden."
]
},
{
name: "Almond and Flaxseed Energy Balls",
ingredients: ["almonds", "flaxseeds", "honey", "peanut butter"],
instructions: [
   "Blend almonds and flaxseeds in a food processor until finely ground.",
   "Mix in honey and peanut butter until it forms a sticky dough.",
   "Roll into small balls and refrigerate for an hour before serving."
]
},
{
name: "Cheese and Tomato Toast",
ingredients: ["bread", "cheese", "tomato", "butter"],
instructions: [
   "Butter slices of bread and place cheese and tomato on top.",
   "Grill in a pan until the bread is golden and the cheese is melted."
]
},
{
name: "Vegetable Soup",
ingredients: ["carrot", "potato", "tomato", "onion", "olive oil"],
instructions: [
   "Chop vegetables into bite-sized pieces.",
   "Sauté onion in olive oil until soft, then add the rest of the vegetables.",
   "Cover with water or broth and simmer until vegetables are tender."
]
},
{
name: "Zucchini Fritters",
ingredients: ["zucchini", "egg", "flour", "cheese"],
instructions: [
   "Grate zucchini and squeeze out excess water.",
   "Mix zucchini with beaten egg, flour, and cheese.",
   "Form into small patties and fry in a pan until golden on both sides."
]
},
{
name: "Mango and Strawberry Salad",
ingredients: ["mango", "strawberry", "lime"],
instructions: [
   "Chop mango and strawberries into small pieces.",
   "Toss them together and squeeze lime juice over the salad.",
   "Serve chilled as a refreshing snack."
]
},
{
name: "Pear and Cheese Salad",
ingredients: ["pear", "cheese", "walnuts", "olive oil"],
instructions: [
   "Slice pear and cheese into thin pieces.",
   "Toss with walnuts and drizzle with olive oil.",
   "Season with salt and pepper, then serve chilled."
]
},
{
name: "Honey Roasted Carrots",
ingredients: ["carrot", "honey", "olive oil"],
instructions: [
   "Preheat oven to 400°F (200°C).",
   "Peel and slice carrots, then toss with honey and olive oil.",
   "Roast for 25-30 minutes, stirring halfway through, until tender."
]
},
{
name: "Garlic Bread",
ingredients: ["bread", "butter", "garlic", "parsley"],
instructions: [
   "Preheat oven to 375°F (190°C).",
   "Mix softened butter with minced garlic and chopped parsley.",
   "Spread the garlic butter mixture on slices of bread.",
   "Toast in the oven for 10-15 minutes or until golden and crispy."
]
},
{
name: "Tomato Bruschetta",
ingredients: ["tomato", "garlic", "basil", "bread"],
instructions: [
   "Chop tomatoes and garlic and mix with chopped basil.",
   "Toast slices of bread and top with the tomato mixture.",
   "Drizzle with olive oil and serve as an appetizer."
]
},
{
name: "Classic Grilled Cheese",
ingredients: ["bread", "cheese", "butter"],
instructions: [
   "Butter two slices of bread and place cheese between them.",
   "Grill in a pan over medium heat until both sides are golden and cheese is melted."
]
},
{
name: "Peanut Butter and Jelly Sandwich",
ingredients: ["bread", "peanut butter", "jelly"],
instructions: [
   "Spread peanut butter on one slice of bread.",
   "Spread jelly on the other slice of bread.",
   "Press the slices together and serve."
]
},
{
name: "Scrambled Eggs",
ingredients: ["eggs", "butter", "milk", "salt", "pepper"],
instructions: [
   "Crack eggs into a bowl and whisk with milk, salt, and pepper.",
   "Melt butter in a pan over medium heat.",
   "Pour in the egg mixture and cook, stirring occasionally, until scrambled."
]
},
{
name: "Cucumber Sandwiches",
ingredients: ["bread", "cucumber", "cream cheese", "herbs"],
instructions: [
   "Slice cucumber thinly.",
   "Spread cream cheese on slices of bread and top with cucumber slices.",
   "Sprinkle with herbs, then serve as an appetizer or light lunch."
]
},
{
name: "Pasta Aglio e Olio",
ingredients: ["spaghetti", "garlic", "olive oil", "chili flakes", "parsley"],
instructions: [
   "Cook spaghetti according to package instructions.",
   "In a pan, heat olive oil and sauté garlic until golden.",
   "Add chili flakes and cooked pasta to the pan, toss to combine.",
   "Garnish with parsley and serve."
]
},
{
name: "Fruit Salad",
ingredients: ["apple", "banana", "orange", "strawberry"],
instructions: [
   "Chop all fruits into bite-sized pieces.",
   "Toss together and serve chilled as a refreshing snack."
]
},
{
name: "Mashed Potatoes",
ingredients: ["potato", "butter", "milk", "salt", "pepper"],
instructions: [
   "Peel and chop potatoes, then boil until tender.",
   "Mash potatoes with butter and milk until smooth.",
   "Season with salt and pepper and serve."
]
},
{
name: "Grilled Chicken Breast",
ingredients: ["chicken breast", "olive oil", "garlic", "lemon", "salt", "pepper"],
instructions: [
   "Marinate chicken with olive oil, minced garlic, lemon juice, salt, and pepper.",
   "Grill chicken on medium heat for 6-7 minutes per side or until cooked through."
]
},
{
name: "Baked Potatoes",
ingredients: ["potato", "olive oil", "salt", "pepper"],
instructions: [
   "Preheat oven to 400°F (200°C).",
   "Rub potatoes with olive oil, salt, and pepper.",
   "Bake for 45-60 minutes or until tender when pierced with a fork."
]
},
{
name: "Tomato Soup",
ingredients: ["tomato", "onion", "garlic", "olive oil", "cream"],
instructions: [
   "Sauté onions and garlic in olive oil until soft.",
   "Add chopped tomatoes and cook until tender.",
   "Blend the mixture until smooth, then stir in cream and simmer for 5 minutes."
]
},
{
name: "Fried Rice",
ingredients: ["rice", "egg", "carrot", "peas", "soy sauce"],
instructions: [
   "Cook rice and set aside.",
   "In a pan, scramble an egg and set aside.",
   "Sauté chopped carrot and peas, then add cooked rice and scrambled egg.",
   "Season with soy sauce and cook until everything is heated through."
]
},
{
name: "Chocolate Mug Cake",
ingredients: ["flour", "sugar", "cocoa powder", "milk", "butter", "baking powder"],
instructions: [
   "Mix all ingredients in a microwave-safe mug.",
   "Microwave on high for 1-2 minutes or until the cake has risen."
]
},
{
name: "Omelette",
ingredients: ["egg", "cheese", "onion", "spinach", "salt", "pepper"],
instructions: [
   "Whisk eggs with salt and pepper.",
   "Sauté onions and spinach in a pan until softened.",
   "Pour in egg mixture and cook until set, then add cheese and fold the omelette."
]
},
{
name: "Baked Apples",
ingredients: ["apple", "cinnamon", "honey"],
instructions: [
   "Core apples and stuff with a bit of honey and cinnamon.",
   "Bake at 350°F (175°C) for 25-30 minutes until soft."
]
},
{
name: "Chia Pudding",
ingredients: ["chia seeds", "milk", "honey", "vanilla"],
instructions: [
   "Mix chia seeds, milk, honey, and vanilla in a jar.",
   "Let it sit in the fridge overnight to thicken."
]
},
{
name: "Avocado Toast",
ingredients: ["bread", "avocado", "lemon", "salt", "pepper"],
instructions: [
   "Toast a slice of bread.",
   "Mash avocado with lemon juice, salt, and pepper.",
   "Spread the avocado mixture on the toast and serve."
]
},
{
name: "Peanut Butter Toast",
ingredients: ["bread", "peanut butter"],
instructions: [
"Toast the bread to your desired crispiness.",
"Spread a generous layer of peanut butter on the toast.",
"Serve immediately as a quick snack or breakfast."
]
}


];

const validIngredientPairs = {
"rice": ["chicken", "broccoli", "carrot", "onion"],
"onion": ["chicken", "tomato", "potato", "beef"],
"mushroom": ["beef", "chicken", "spinach", "cheese"]
};
