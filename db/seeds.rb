Category.create([
	{ name: 'Chinese' },
	{ name: 'French' },
	{ name: 'Italian' },
	{ name: 'Japanese' }
]);

User.create([
	{ username: 'kaylee', email: 'kaylee@gmail.com', password: 'rainbows' },
	{ username: 'tylerq', email: 'tyler@gmail.com', password: 'momomomo'},
	{ username: 'ellamilla', email: 'ellamilla@gmail.com', password: 'waterfire'},
	{ username: 'yingyee', email: 'yingyee@gmail.com', password: 'meowmeow'},
	{ username: 'ivyhievia', email: 'ivehie@gmail.com', password: 'funfunfun'},
	{ username: 'brianh', email: 'brianh@gmail.com', password: 'hihihihihi'},
	{ username: 'cocoaexpert', email: 'cocoaforlife@gmail.com', password: 'byebyebye'}
])

Recipe.create([
	{ title: 'Crepes', difficulty: 2, time: 35, servings: 12, ingredients: ['1 cup all-purpose flour', '1 teaspoon white sugar', '1/4 teaspoon salt', '3 eggs', '2 cups milk', '2 tablespoons butter, melted'],
		directions: ['Sift together flour, sugar and salt; set aside. In a large bowl, beat eggs and milk together with an electric mixer. Beat in flour mixture until smooth; stir in melted butter.', 'Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 2 tablespoons for each crepe. Tip and rotate pan to spread batter as thinly as possible. Brown on both sides and serve hot.'],
		category_id: 2, author_id: rand(1..7)
	},
	{ title: 'Baked Ziti', difficulty: 4, time: 75, servings: 8,
		ingredients: ['1 pound dry ziti pasta', '1 onion, chopped', '1 pound lean ground beef', '2 (26 ounce) jars spaghetti sauce', '6 ounces provolone cheese, sliced', '1 1/2 cups sour cream', '6 ounces mozzarella cheese, shredded', '2 tablespoons grated Parmesan cheese'],
		directions: ['Bring a large pot of lightly salted water to a boil. Add ziti pasta, and cook until al dente, about 8 minutes; drain.', 
			'In a large skillet, brown onion and ground beef over medium heat. Add spaghetti sauce, and simmer 15 minutes.', 
			'Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13 inch baking dish. Layer as follows: 1/2 of the ziti, Provolone cheese, sour cream, 1/2 sauce mixture, remaining ziti, mozzarella cheese and remaining sauce mixture. Top with grated Parmesan cheese.', 
			'Bake for 30 minutes in the preheated oven, or until cheeses are melted.'],
		category_id: 3, author_id: rand(1..7)
	},
	{ title: 'Rocket and Parma Ham Salad', difficulty: 1, time: 5, servings: 2,
		ingredients: ['1 (7 ounce) bag arugula', '7 ounces Parma ham, torn into thin strips', '1/4 cup olive oil', '1/4 cup balsamic vinegar'],
		directions: ['Arrange arugula on a large, flat platter.', 
			'Top arugula with Parma ham.', 
			'Drizzle olive oil and balsamic vinegar over the salad.'],
		category_id: 3, author_id: rand(1..7)
	},
	{ title: 'Sushi Rice', difficulty: 2, time: 25, servings: 15,
		ingredients: ['2 cups uncooked glutinous white rice (sushi rice)', '3 cups water', '1/2 cup rice vinegar', '1 tablespoon vegetable oil', '1/4 cup white sugar', '1 teaspoon salt'],
		directions: ['Rinse the rice in a strainer or colander until the water runs clear. Combine with water in a medium saucepan. Bring to a boil, then reduce the heat to low, cover and cook for 20 minutes. Rice should be tender and water should be absorbed. Cool until cool enough to handle.', 
		'In a small saucepan, combine the rice vinegar, oil, sugar and salt. Cook over medium heat until the sugar dissolves. Cool, then stir into the cooked rice. When you pour this in to the rice it will seem very wet. Keep stirring and the rice will dry as it cools.'],
		category_id: 4, author_id: rand(1..7)
	},
	{ title: 'Oyakodon', difficulty: 3, time: 40, servings: 2,
		ingredients: ['1 cup uncooked short-grain white rice', '2 cups water', '1 cup chicken stock', '1/4 cup soy sauce', '2 tablespoons brown sugar', '1/2 onion, thinly sliced', '1/2 cup shiitake mushrooms, thinly sliced', '1 skinless, boneless chicken breast half - cut into strips', '4 green onions, cut into 1-inch pieces', '2 eggs, beaten', '6 snow peas, thinly sliced'],
		directions: ['Bring the rice and water to a boil in a saucepan; reduce heat to medium-low, cover, and simmer until the rice is tender and the liquid has been absorbed, 20 to 25 minutes.', 
			'Bring the chicken stock to a boil in a small saucepan. Stir in the soy sauce and brown sugar until the sugar has dissolved. Reduce heat to low; keep warm.', 
			'Heat several tablespoons of the chicken sauce in a skillet over medium heat. Cook and stir the onion and shiitake mushrooms in the sauce until the onion has softened, about 3 minutes. Add the chicken, green onions, and a few more tablespoons of the sauce; continue cooking until the chicken is no longer pink in the center, about 5 minutes more. Spread the chicken mixture evenly over the skillet; pour the beaten egg overtop. Reduce heat to medium-low and sprinkle with the snow peas. Cook and stir until the egg has firmed and is no longer runny, about 3 minutes.', 
			'Divide the rice between two bowls and spoon the egg mixture evenly overtop. Pour additional chicken sauce over the rice to serve.'],
		category_id: 4, author_id: rand(1..7)
	},
	{ title: 'Chinese Steamed Buns', difficulty: 5, time: 60, servings: 24,
		ingredients: ['1 tablespoon active dry yeast', '1 teaspoon white sugar', '1/4 cup all-purpose flour', '1/4 cup water', '1/2 cup warm water', '1 1/2 cups all-purpose flour', '1/4 teaspoon salt', '2 tablespoons white sugar', '1 tablespoon vegetable oil', '1/2 teaspoon baking powder'],
		directions: ['Mix together yeast, 1 teaspoon sugar, 1/4 cup flour, and 1/4 cup warm water. Allow to stand for 30 minutes.', 
			'Mix in 1/2 cup warm water, flour, salt, 2 tablespoons sugar, and vegetable oil. Knead until dough surface is smooth and elastic. Roll over in a greased bowl, and let stand until triple in size, about 2 1/2 to 3 hours.', 
			'Punch down dough, and spread out on a floured board. Sprinkle baking powder evenly on surface, and knead for 5 minutes. Divide dough into 2 parts, and place the piece you are not working with in a covered bowl. Divide each half into 12 parts. Shape each part into a ball with smooth surface up. Put each ball on a wax paper square. Let stand covered until double, about 30 minutes.', 
			'Bring water to a boil in wok, and reduce heat to medium; the water should still be boiling. Place steam-plate on a small wire rack in the middle of the wok. Transfer as many buns on wax paper as will comfortably fit onto steam-plate leaving 1 to 2 inches between the buns. At least 2 inches space should be left between steam-plate and the wok. Cover wok with lid. Steam buns over boiling water for 15 minutes.', 
			'REMOVE LID BEFORE you turn off heat, or else water will drip back onto bun surface and produce yellowish "blisters" on bun surfaces. Continue steaming batches of buns until all are cooked.'],
		category_id: 1, author_id: rand(1..7)
	},
	{ title: 'Chinese Green Bean Stir-Fry', difficulty: 3, time: 35, servings: 40,
		ingredients: ['1 cup vegetable oil', '13 pounds fresh green beans, trimmed', '5 tablespoons minced garlic', '5 tablespoons minced fresh ginger root', '2 tablespoons kosher salt', '1 tablespoon coarsely ground black pepper', '2 (8 ounce) bottles black bean sauce'],
		directions: ['In a large wok, heat oil over medium-high heat. Stir in green beans; cook, stirring frequently, for 1 to 2 minutes. Stir in garlic and ginger; cook, stirring frequently, for 3 to 4 minutes.', 
			'Season with salt and pepper, and then stir in black bean sauce. Continue cooking until green beans are tender.'],
			category_id: 1, author_id: rand(1..7)
		},
	{ title: 'Creme Brulee', difficulty: 3, time: 40, servings: 4,
		ingredients: ['1/2 cup semi-sweet chocolate chips', '2 cups heavy cream', '1/4 cup white sugar', '1 pinch salt', '2 teaspoons vanilla extract', '5 egg yolks', '4 tablespoons white sugar'],
		directions: ['Preheat the oven to 300 degrees F (150 degrees C).', 
			'Place about 2 tablespoons of the chocolate chips into each of four 6 ounce ramekins. Place them in the microwave, and heat on full power for 30 second intervals. Stir, and continue heating until chocolate has melted. Spread to cover the sides and bottom of each ramekin.', 
			'Bring a large pot of water to a boil.', 
			'Meanwhile, in a saucepan, whisk together the cream, 1/4 cup sugar, and salt. Set over medium heat, and warm until steam rises from the surface. Then in a separate bowl, whisk together the egg yolks and vanilla. When the cream is hot, ladle a little bit into the egg yolks while whisking quickly. Ladle in a bit more to bring the yolks up to a high temperature without scrambling them. Whisk the yolk mixture into the rest of the cream. Ladle into the chocolate lined ramekins.', 
			'Place a towel in the bottom of a baking dish, and place the filled ramekins on top of the towel. Place in the oven, and pour boiling water carefully into the baking dish until it comes half way up the sides of the ramekins. Cover the dish loosely with aluminum foil.', 
			'Bake for 35 to 40 minutes in the preheated oven, just until the custard is set. Remove ramekins from the dish, and refrigerate for 4 to 6 hours.', 
			'Before serving, sprinkle 1 tablespoon of sugar over the top of each creme brulee. Use a kitchen torch or your oven broiler to caramelize the sugar. It may take 2 to 3 minutes in the broiler. Serve immediately.'],
		category_id: 2, author_id: rand(1..7)
	},
	{ title: 'Ratatouille', difficulty: 3, time: 60, servings: 4,
		ingredients: ['2 tablespoons olive oil', '3 cloves garlic, minced', '2 teaspoons dried parsley', '1 eggplant, cut into 1/2 inch cubes', 'salt to taste', '1 cup grated Parmesan cheese', '2 zucchini, sliced', '1 large onion, sliced into rings', '2 cups sliced fresh mushrooms', '1 green bell pepper, sliced', '2 large tomatoes, chopped'],
		directions: ['Preheat oven to 350 degrees F (175 degrees C). Coat bottom and sides of a 1 1/2 quart casserole dish with 1 tablespoon olive oil.', 
			'Heat remaining 1 tablespoon olive oil in a medium skillet over medium heat. Cook and stir garlic until lightly browned. Mix in parsley and eggplant. Cook and stir until eggplant is soft, about 10 minutes. Season with salt to taste.', 
			'Spread eggplant mixture evenly across bottom of prepared casserole dish. Sprinkle with a few tablespoons of Parmesan cheese. Spread zucchini in an even layer over top. Lightly salt and sprinkle with a little more cheese. Continue layering in this fashion, with onion, mushrooms, bell pepper, and tomatoes, covering each layer with a sprinkling of salt and cheese.', 
			'Bake in preheated oven for 45 minutes.'],
		category_id: 2, author_id: rand(1..7)
	},
	{ title: 'Baked Chicken Cordon Bleu', difficulty: 4, time: 60, servings: 6,
		ingredients: ['6 skinless, boneless chicken breast halves - pounded to 1/2 inch thickness', '6 string cheese sticks', '6 slices ham', '1/2 cup butter, melted', '1 cup seasoned dry bread crumbs', 'toothpicks'],
		directions: ['Preheat the oven to 350 degrees F (175 degrees C).', 
			'Lay out the pounded chicken breasts on a clean surface. Place a slice of ham on each piece, then one stick of cheese. Roll the chicken up around the cheese and ham, and secure with toothpicks. Dip each roll in melted butter, then roll in bread crumbs. Place in a shallow baking dish.', 
			'Bake for 40 minutes in the preheated oven, or until chicken is browned and juices run clear.'],
		category_id: 2, author_id: rand(1..7)
	},
	{ title: 'Zuppa Toscana', difficulty: 4, time: 70, servings: 6,
		ingredients: ['1 (16 ounce) package smoked sausage', '2 potatoes, cut into 1/4-inch slices', '3/4 cup chopped onion', '6 slices bacon', '1 1/2 teaspoons minced garlic', '2 cups kale - washed, dried, and shredded', '2 tablespoons chicken bouillon powder', '1 quart water', '1/3 cup heavy whipping cream'],
		directions: ['Preheat oven to 300 degrees F (150 degrees C).', 
			'Layer the sausage links onto a baking sheet and bake for 25 minutes, or until done. Cut in half length-wise, then cut at an angle into 1/2 inch slices.', 
			'Place onions and bacon in a large saucepan and cook over medium heat until onions are almost clear.', 
			'Remove bacon and crumble. Set aside.', 
			'Add garlic to the onions and cook an additional 1 minute. Add chicken base or bouillon, water, and potatoes, simmer 15 minutes.', 
			'Add crumbled bacon, sausage, kale, and cream. Simmer 4 minutes and serve.'],
		category_id: 3, author_id: rand(1..7)
	},
	{ title: 'Japanese-Style Deep-Fried Shrimp', difficulty: 3, time: 20, servings: 4,
		ingredients: ['1 pound medium shrimp, peeled (tails left on) and deveined', '1/2 teaspoon salt', '1/2 teaspoon ground black pepper', '1/2 teaspoon garlic powder', '1 cup all-purpose flour', '1 teaspoon paprika', '2 eggs, beaten', '1 cup panko crumbs', '1 quart vegetable oil for frying'],
		directions: ['Place the shrimp in a bowl and season with salt, pepper and garlic powder. In a small bowl, stir together the flour and paprika. Place eggs and panko crumbs into separate bowls.', 
			'Heat the oil in a deep-fryer or deep skillet to 375 degrees F (190 degrees C). Dip each shrimp into the flour mixture, then into the egg, and finally into the panko crumbs to coat. Fry a few at a time until golden brown. This should take no longer than 5 minutes. Remove with a slotted spoon and drain on paper towels before serving.'],
			category_id: 4, author_id: rand(1..7)
		},
	{ title: 'Sesame Seared Tuna', difficulty: 3, time: 20, servings: 4,
		ingredients: ['1/4 cup soy sauce', '1 tablespoon mirin (Japanese sweet wine)', '1 tablespoon honey', '2 tablespoons sesame oil', '1 tablespoon rice wine vinegar', '4 (6 ounce) tuna steaks', '1/2 cup sesame seeds', 'wasabi paste', '1 tablespoon olive oil'],
		directions: ['In a small bowl, stir together the soy sauce, mirin, honey and sesame oil. Divide into two equal parts. Stir the rice vinegar into one part and set aside as a dipping sauce.', 
			'Spread the sesame seeds out on a plate. Coat the tuna steaks with the remaining soy sauce mixture, then press into the sesame seeds to coat.', 
			'Heat olive oil in a cast iron skillet over high heat until very hot. Place steaks in the pan, and sear for about 30 seconds on each side. Serve with the dipping sauce and wasabi paste.'],
		category_id: 4, author_id: rand(1..7)
	},
	{ title: 'Honey Walnut Shrimp', difficulty: 3, time: 30, servings: 4,
		ingredients: ['1 cup water', '2/3 cup white sugar', '1/2 cup walnuts', '4 egg whites', '2/3 cup mochiko (glutinous rice flour)', '1/4 cup mayonnaise', '1 pound large shrimp, peeled and deveined', '2 tablespoons honey', '1 tablespoon canned sweetened condensed milk', '1 cup vegetable oil for frying'],
		directions: ['Stir together the water and sugar in a small saucepan. Bring to a boil and add the walnuts. Boil for 2 minutes, then drain and place walnuts on a cookie sheet to dry.', 
			'Whip egg whites in a medium bowl until foamy. Stir in the mochiko until it has a pasty consistency. Heat the oil in a heavy deep skillet over medium-high heat. Dip shrimp into the mochiko batter, and then fry in the hot oil until golden brown, about 5 minutes. Remove with a slotted spoon and drain on paper towels.', 
			'In a medium serving bowl, stir together the mayonnaise, honey and sweetened condensed milk. Add shrimp and toss to coat with the sauce. Sprinkle the candied walnuts on top and serve.'],
		category_id: 1, author_id: rand(1..7)
	},
	{ title: 'Pork Dumplings', difficulty: 4, time: 35, servings: 6,
		ingredients: ['100 (3.5 inch square) wonton wrappers', '1 3/4 pounds ground pork', '1 tablespoon minced fresh ginger root', '4 cloves garlic, minced', '2 tablespoons thinly sliced green onion', '4 tablespoons soy sauce', '3 tablespoons sesame oil', '1 egg, beaten', '5 cups finely shredded Chinese cabbage'],
		directions: ['In a large bowl, combine the pork, ginger, garlic, green onion, soy sauce, sesame oil, egg and cabbage. Stir until well mixed.', 
			'Place 1 heaping teaspoon of pork filling onto each wonton skin. Moisten edges with water and fold edges over to form a triangle shape. Roll edges slightly to seal in filling. Set dumplings aside on a lightly floured surface until ready to cook.', 
			'To Cook: Steam dumplings in a covered bamboo or metal steamer for about 15 to 20 minutes. Serve immediately.'],
		category_id: 1, author_id: rand(1..7)
	},
	{ title: 'Chicken Milano', difficulty: 3, time: 30, servings: 4,
		ingredients: ['1 tablespoon butter', '2 cloves garlic, minced', '1/2 cup sun-dried tomatoes, chopped', '1 cup chicken broth, divided', '1 cup heavy cream', '1 pound skinless, boneless chicken breast halves', 'salt and pepper to taste', '2 tablespoons vegetable oil', '2 tablespoons chopped fresh basil', '8 ounces dry fettuccini pasta'],
		directions: ['In a large saucepan over low heat, melt butter; add garlic and cook for 30 seconds. Add the tomatoes and 3/4 cup of the chicken broth; increase to medium heat and bring to a boil. Reduce heat and simmer, uncovered, for about 10 minutes or until the tomatoes are tender. Add the cream and bring to a boil; stirring. Simmer over medium heat until the sauce is thick enough to coat the back of a spoon.',
			'Sprinkle the chicken with salt and pepper on both sides. In a large skillet over medium heat, warm oil and saute chicken. Press on chicken occasionally with a slotted spatula. Cook for about 4 minutes per side or until the meat feels springy and is no longer pink inside. Transfer to a board; cover and keep warm. Discard the fat from the skillet.',
			'In the same skillet, over medium heat, bring 1/4 cup chicken broth to a boil; stirring the pan juices. Reduce slightly and add to the cream sauce; stir in basil and adjust seasonings to taste.',
			'Meanwhile, bring a large pot of lightly salted water to a boil. Add fettuccine and cook for 8 to 10 minutes or until al dente; drain, transfer to a bowl and toss with 3 to 4 tablespoons of the sauce.', 'Cut each chicken breast into 2 to 3 diagonal slices. Reheat the sauce gently if needed. Transfer the pasta to serving plates; top with chicken and coat with the cream sauce; serve.'],
		category_id: 3, author_id: rand(1..7)
	},
	{ title: 'Omelet in a Bag', difficulty: 2, time: 30, servings: 1,
		ingredients: ['2 eggs', '2 slices ham, chopped (optional)', '1/2 cup shredded Cheddar cheese', '1 tablespoon chopped onion (optional)', '1 tablespoon chopped green bell pepper (optional)', '2 tablespoons chopped fresh tomato (optional)', '1 tablespoon chunky salsa (optional)', '2 fresh mushrooms, sliced (optional)'],
		directions: ['Crack the eggs into a large resealable freezer bag. Press out most of the air, and seal. Shake or squeeze to beat the eggs. Open the bag, and add the ham, cheese, onion, green pepper, tomato, salsa, and mushrooms. Squeeze out as much of the air as you can, and seal the bag.', 'Bring a large pot of water to a boil. Place up to 8 bags at a time into the boiling water. Cook for exactly 13 minutes. Open the bag, and let the omelet roll out onto a plate. The omelet should roll out easily.'],
		category_id: 2, author_id: rand(1..7)
	},
	{ title: 'Okonomiyaki', difficulty: 4, time: 45, servings: 4,
		ingredients: ['12 ounces sliced bacon', '1 1/3 cups water', '4 eggs', '3 cups all-purpose flour', '1 teaspoon salt', '1 medium head cabbage, cored and sliced', '2 tablespoons minced pickled ginger', '1/4 cup tonkatsu sauce or barbeque sauce'],
		directions: ['Fry the bacon in a large skillet over medium heat until slightly crispy. Remove to paper towels to drain and set aside.', 
			'In a large bowl, stir together the water and eggs. Gradually stir in the flour and salt until smooth. Add the cabbage and ginger; stir until evenly distributed.', 
			'Heat a skillet over medium heat and coat with cooking spray. Pour about 1/4 of the batter into the center of the skillet. Place 4 slices of cooked bacon in the center. Use a spatula to shape the pancake into a circle. Fry for about 5 minutes or until the edges are dry. Flip and cook on the other side until the center is stable and it is browned on both sides. Remove from the pan and drizzle with tonkatsu sauce to serve. Continue with remaining batter and bacon.'],
		category_id: 4, author_id: rand(1..7)
	},
	{ title: 'Beef Bourguignon', difficulty: 4, time: 200, servings: 4,
		ingredients: ['1/4 cup all-purpose flour', '1 teaspoon salt', '1/2 teaspoon ground black pepper', '2 pounds cubed stew meat', '4 tablespoons butter', '1 onion, chopped', '2 carrots, chopped', '1 clove garlic, minced', '2 cups red wine', '1 bay leaf', '3 tablespoons chopped fresh parsley', '1/2 teaspoon dried thyme', '1 (6 ounce) can sliced mushrooms', '1 (16 ounce) can canned onions'],
		directions: ['In a small bowl, combine the flour, salt and ground black pepper. Coat the beef cubes with this mixture.', 
			'Melt the butter or margarine in a large skillet over medium high heat. Add the meat and brown well on all sides. Pour this into a 2 quart casserole dish.', 
			'Return the skillet to the heat and add the onion, carrots and garlic to it. Saute for 5 to 10 minutes, or until onion is tender. add the wine, bay leaf, parsley, thyme, and liquid from the mushrooms. Pour over meat.', 
			'Bake, covered, at 350 degrees F (175 degrees C) for 2 1/2 hours. Remove cover, add canned onions and mushroom crowns, and bake for 30 more minutes.'],
		category_id: 2, author_id: rand(1..7)
	},
	{ title: 'Creamy Au Gratin Potatoes', difficulty: 3, time: 120, servings: 4,
		ingredients: ['4 russet potatoes, sliced into 1/4 inch slices', '1 onion, sliced into rings', 'salt and pepper to taste', '3 tablespoons butter', '3 tablespoons all-purpose flour', '1/2 teaspoon salt', '2 cups milk', '1 1/2 cups shredded Cheddar cheese'],
		directions: ['Preheat oven to 400 degrees F (200 degrees C). Butter a 1 quart casserole dish.', 
			'Layer 1/2 of the potatoes into bottom of the prepared casserole dish. Top with the onion slices, and add the remaining potatoes. Season with salt and pepper to taste.', 
			'In a medium-size saucepan, melt butter over medium heat. Mix in the flour and salt, and stir constantly with a whisk for one minute. Stir in milk. Cook until mixture has thickened. Stir in cheese all at once, and continue stirring until melted, about 30 to 60 seconds. Pour cheese over the potatoes, and cover the dish with aluminum foil.', 
			'Bake 1 1/2 hours in the preheated oven.'],
		category_id: 2, author_id: rand(1..7)
	}
])

35.times do
	Favorite.create(user_id: rand(1..7), recipe_id: rand(1..20))
end