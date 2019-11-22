export const initialData = {
    filteredRecipes: [],
    recipe: [
        {
            id: 1,
            title: 'Filipino Beef Steak',
            description: 'This is a very easy recipe to make. A tender cut of beef is sliced thin and marinated with lemon juice and soya sauce for at least an hour or longer.',
            dish: 'beef',
            ingredients: [
                "1 lemon, juiced",
                "3 tablespoons soy sauce",
                "1 teaspoon white sugar",
                "salt and pepper to taste",
                "4 pounds New York strip steak, sliced thin",
                "1 tablespoon cornstarch",
                "1/4 cup vegetable oil",
                "3 tablespoons olive oil",
                "1 onion, chopped",
                "2 cloves garlic, chopped",
            ],   
            procedures: [
                "Whisk the lemon juice, soy sauce, sugar, salt, and pepper together in a small bowl. Place the sliced steak in a large bowl; pour the lemon juice mixture over the steak and toss to coat. Sprinkle with the cornstarch and lightly mix. Cover with plastic wrap and refrigerate at least 1 hour, up to overnight.",
                "Heat 1/4 cup vegetable oil in a large skillet. Remove the beef slices from the marinade, shaking to remove any excess liquid. Fry the beef slices in batches in the hot oil until they start to firm, and are reddish-pink and juicy in the center, 2 to 4 minutes per side. Remove the beef slices from the skillet and set aside on a serving platter.",
                "Heat the olive oil in a small skillet over medium heat. Cook and stir the onion and garlic in the hot oil until the onion is golden brown, 5 to 7 minutes; pour over the beef slices."
            ],
            date: 'August 9, 2019 4:29 PM'
        },
        {
            id: 2,
            title: 'Fried Porkchop',
            description: 'Who wants their fried pork chop a little salty? We do! In this recipe, we’ve marinated the pork chop in Datu Puti Patis and calamansi. We let them roll around the Golden Fiesta Big Crunch Breading Mix and fried them using the Golden Fiesta Oil. Don’t forget to serve this with rice and catsup to fill your family’s tummies for the rest of the day!',
            dish: 'pork',
            ingredients: [
                "1 kilo Pork chop (5 pieces, 1-inch thick)",
                "1 Tbsp Datu Puti Patis",
                "1/2 tsp UFC Ground black pepper",
                "3 pieces Calamansi, juiced"
            ],   
            procedures: [
                "Marinate pork in Datu Puti Patis, pepper, and calamansi for 5 minutes. Steam for 5 minutes then let stand to dry for 30 minutes.",
                "Coat each pork chop evenly with Golden Fiesta Big Crunch Breading Mix. ",
                "Heat Golden Fiesta Oil in a pan, then fry pork chops until golden brown and crispy, about 5 minutes.",
                "Serve with Papa Banana Catsup. "
            ],
            date: 'September 21, 2019 11:10 AM'
        },
        {
            id: 3,
            title: 'Crispy Fried Chicken',
            dish: 'chicken',
            description: 'If youve wanted to learn how to make crispy fried chicken, this is the recipe for you. Always a picnic favorite, this deep fried chicken recipe is delicious either hot or cold. Kids call it my Kentucky Fried Chicken! —Jeanne Schnitzler, Lima, Montana',
            ingredients: [
                "4 cups all-purpose flour, divided",
                "2 tablespoons garlic salt",
                "1 tablespoon paprika",
                "3 teaspoons pepper, divided",
                "2-1/2 teaspoons poultry seasoning"
            ],   
            procedures: [
                "In a large shallow dish, combine 2-2/3 cups flour, 2 tablespoons garlic salt, 1 tablespoon paprika, 2-1/2 teaspoons pepper and 2-1/2 teaspoons poultry seasoning. In another shallow dish, beat eggs and 1-1/2 cups water; add 1 teaspoon salt and the remaining 1-1/3 cup flour and 1/2 teaspoon pepper. Dip chicken in egg mixture, then place in the flour mixture, a few pieces at a time. Turn to coat.",
                "In a deep-fat fryer, heat oil to 375°. Working in batches, fry chicken, several pieces at a time, until golden brown and a thermometer inserted into chicken reads 165°, about 7-8 minutes on each side. Drain on paper towels."
            ],
            date: 'October 10, 2019 2:51 PM'
        },
        {
            id: 4,
            title: 'Pork Sinigang',
            description: 'Sinigang is a sour soup native to the Philippines. This recipe uses pork as the main ingredient. Other proteins and seafood can also be used. Beef, shrimp, fish are commonly used to cook sinigang. The chicken version, on the other hand, is called sinampalukang manok. I prefer to use either pork belly or buto-buto when cooking sinigang. The latter refers to cuts with bones intact. These are either pork neck bones, chopped spare ribs, and chopped baby back ribs. Pork shoulder and ham can also be used when cooking sinigang.',
            dish: 'pork',
            ingredients: [
                "2 lbs pork belly or buto-buto",
                "1 bunch spinach or kang-kong",
                "3 tablespoons fish sauce",
                "12 pieces string beans sitaw, cut in 2 inch length",
                "2 pieces tomato quartered",
                "3 pieces chili or banana pepper",
                "1 tablespoons cooking oil",
                "2 quarts water",
                "1 piece onion sliced",
                "2 pieces taro gabi, quartered",
                "1 pack sinigang mix good for 2 liters water"
            ],   
            procedures: [
                "Heat the pot and put-in the cooking oil ",
                "Sauté the onion until its layers separate from each other ",
                "Add the pork belly and cook until outer part turns light brown ",
                "Put-in the fish sauce and mix with the ingredients ",
                "Pour the water and bring to a boil ",
                "Add the taro and tomatoes then simmer for 40 minutes or until pork is tender ",
                "Put-in the sinigang mix and chili ",
                "Add the string beans (and other vegetables if there are any) and simmer for 5 to 8 minutes ",
                "Put-in the spinach, turn off the heat, and cover the pot. Let the spinach cook using the remaining heat in the pot. ",
                "Serve hot. Share and enjoy! "
            ],
            date: 'November 2, 2019 8:28 AM'
        },
        {
            id: 5,
            title: 'Garlic Butter Shrimp',
            description: 'Garlic Butter Shrimp is a super easy dish to make. This recipe guides you on how to cook it Filipino style. The result is a rich and flavorful shrimp dish that can be best enjoyed with rice.',
            dish: 'seafood',
            ingredients: [
                "2 lbs shrimp",
                "2 tbsp parsley finely chopped",
                "½ cup butter",
                "4 tbsp garlic minced",
                "1 cup lemon soda",
                "salt and pepper to taste"
            ],   
            procedures: [
                "Marinate the shrimp in lemon soda for about 10 minutes",
                "Melt the butter in a pan and heat it up until hot enough to cook the garlic",
                "Add the garlic and cook until the color turns light to golden brown",
                "Put-in the shrimp and then cook until the color turns orange.",
                "Pour-in the remaining lemon soda. Let the liquid evaporate completely.",
                "Sprinkle the parsley.",
                "Add some ground black pepper and salt as needed.",
                "Serve hot. Share and Enjoy!"
            ],
            date: 'November 10, 2019 6:15 PM'
        },
        {
            id: 6,
            title: 'Calamares',
            description: 'Calamares is the Filipino version of the Mediterranean breaded fried squid dish, Calamari. There are different methods on how to make this dish; the most usual does not involve breadcrumbs. However, I chose to add breadcrumbs for this recipe for visual appeal and a crunchier texture.',
            dish: 'seafood',
            ingredients: [
                "1/2 lb medium to large sized squid cleaned and sliced into rings",
                "3/4 cup all-purpose flour",
                "1 piece raw egg beaten",
                "3/4 cup breadcrumbs",
                "1 teaspoon salt",
                "1/2 teaspoon ground black pepper",
                "2 cups cooking oil"
            ],   
            procedures: [
                "Combine squid, salt, and ground black pepper then mix well. Let stand for 10 minutes.",
                "Heat a cooking pot the pour-in cooking oil.",
                "Dredge the squid in flour then dip in beaten egg and roll over breadcrumbs.",
                "When the oil is hot enough, deep-fry the squid until the color of the coating turns brown. Note: This should only take about 2 to 3 minutes in medium heat. Do not overcook the squid.",
                "Remove the fried squid from the cooking pot and transfer in a plate lined with paper towels.",
                "Serve with sinamak or Asian dipping sauce.",
                "Share and enjoy!"
            ],
            date: 'November 11, 2019 6:15 AM'
        },
        {
            id: 7,
            title: 'Chop Suey',
            description: 'Chop Suey is a stir-fried vegetable dish that is cooked with meats such as chicken and pork. Shrimp and seafood can also be added. This chop suey recipe is special because it has almost every ingredient present. Chicken, pork, shrimp, and boiled quail eggs were all included in the recipe, along with fresh veggies.',
            dish: 'vegetable',
            ingredients: [
                "7 pieces shrimp cleaned and deveined",
                "3 ounces pork sliced",
                "3 ounces boneless chicken breast sliced",
                "1 ½ cup cauliflower florets",
                "1 medium carrot sliced crosswise into thin pieces",
                "12 to 15 pieces snow peas",
                "6 to 8 pieces baby corn",
                "1 piece bell pepper sliced into squares",
                "1 piece green bell pepper sliced into squares",
                "1 ½ cups cabbage chopped",
                "12 pieces quail eggs boiled",
                "1 piece yellow onion sliced",
                "4 cloves garlic crushed",
                "¼ cup soy sauce",
                "1 ½ tablespoons oyster sauce",
                "¾ cup water",
                "1 tablespoon cornstarch diluted in ½ cup water",
                "¼ teaspoon ground black pepper",
                "3 tablespoons cooking oil"
            ],   
            procedures: [
                "Heat oil in a wok or pan.",
                "Pan fry the shrimp for 1 minute per side. Remove from the wok. Set aside.",
                "Saute onion. Add garlic and continue to saute until the onion becomes soft.",
                "Add pork and chicken. Stir fry until light brown.",
                "Add soy sauce and oyster sauce. Stir.",
                "Pour water. Let boil. Cover and cook in medium heat for 15 minutes.",
                "Add cauliflower, carrots, bell peppers, snow peas, and young corn. Stir.",
                "Add cabbage. Toss. Cover and cook for 5 to 7 minutes.",
                "Put the pan-fried shrimp into the pot and add ground black pepper.",
                "Add the boiled quail eggs and cornstarch diluted in water. Toss.",
                " Transfer to a serving plate. Serve.",
                "Share and enjoy!"
            ],
            date: 'November 12, 2019 8:29 AM'
        },
        {
            id: 8,
            title: 'Mango Float',
            description: 'One fruit that I eat a lot every time I go home to the Philippines is mango. Philippine mango tastes different from the Altaulfo mango, the one that is being sold here in Vancouver. My maternal grandmother used to have several mango trees in her hometown and growing up, we always got a supply of mangoes when they were in season. I miss Philippine mango so much, every time I go home, I always have them as much as I can.',
            dish: 'desert',
            ingredients: [
                "5 ripe mangoes or more as needed",
                "2 cups whipping cream",
                "1/2 cup sweetened condensed milk",
                "1/2 tsp vanilla extract",
                "1/2 box (400g) Honey Maid wafers or graham crackers"
            ],   
            procedures: [
                "Peel the mangoes, slice in half and then slice the cut halves lengthwise into thin strips. Set aside.",
                "Using an electric mixer, beat the whipping cream in a medium bowl until double in size. Add condensed milk and vanilla extract; mix until well combined.",
                "Put a layer of graham crackers at the bottom of an 8-inch square glass baking dish or any similar container, filling the gaps with trimmed crackers. Spread 1/3 of the cream mixture evenly on top of the crackers and then top with a layer of mango slices.",
                "Place another layer of graham crackers, cream mixture and slices of mango; repeat the process one more time, ending with slices of mango.",
                "Refrigerate the mango float overnight to set completely before serving."
            ],
            date: 'November 13, 2019 9:33 PM'
        },
        {
            id: 9,
            title: 'Chicken Curry',
            description: 'Chicken curry stewed in coconut milk and curry spices is a hearty and tasty dish the whole family will love. Easy to make and cooks in one pan!',
            dish: 'chicken',
            ingredients: [
                "1/4 cup canola oil",
                "2 medium potatoes, peeled and quartered",
                "2 large carrots, peeled and cubed",
                "1/2 green bell pepper, cored, seeded and cut into cubes",
                "1/2 red bell pepper, cored, seeded and cut into cubes",
                "1 onion, peeled and cubed",
                "3 cloves garlic, peeled and minced",
                "1 (3 pounds) bone-in chicken, cut into serving pieces",
                "1 tablespoon fish sauce",
                "1 cup coconut milk",
                "1 cup water",
                "2 tablespoons curry powder",
                "salt and pepper to taste"
            ],   
            procedures: [
                "In a wide pan over medium heat, heat oil. Add potatoes and cook for about 2 to 3 minutes or until lightly browned and tender. Remove from pan and drain on paper towels.",
                "Add carrots and cook for about 1 to 2 minutes. Remove from pan and drain on paper towels.",
                "Remove excess oil from pan except for about 1 tablespoon. Add bell peppers and cook for about 30 to 40 seconds. Remove from pan and set aside.",
                "Add onions and garlic and cook until softened.",
                "Add chicken and cook, stirring occasionally until lightly browned.",
                "Add fish sauce and continue to cook for about 1 minute.",
                "Add coconut milk and water. Bring to a simmer.. skimming any scum that may float on top.",
                "Lower heat, cover, and simmer for about 20 to 30 minutes or until chicken is cooked.",
                "Add potatoes and carrots and cook for about 3 to 5 minutes or until tender.",
                "Add curry powder and stir to combine. Continue to cook for about 2 to 3 minutes or until sauce starts to thicken.",
                "Season with salt and pepper to taste.",
                "Add bell peppers and cook for about 1 minute or until tender yet crisp. Serve hot."
            ],
            date: 'November 15, 2019 4:42 PM'
        }
    ]
}




