export type MenuItem = {
  name: string
  description: string
  price: number
  vegetarian?: boolean
}

export type MenuCategory = {
  id: string
  label: string
  tagline: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    tagline: "To begin the Italian way",
    items: [
      {
        name: "Parmigiana",
        description: "Eggplants, Grana Padano, mozzarella cheese, tomato sauce, basil, EVO",
        price: 1550,
        vegetarian: true,
      },
      {
        name: "Mix Italian Formaggi",
        description: "Caciotta, smoked Scamorza, Taleggio, Caciocavallo",
        price: 2200,
        vegetarian: true,
      },
      {
        name: "Burrata Italian Style",
        description: "Burrata cheese served with fresh tomatoes, basil, EVO",
        price: 1750,
        vegetarian: true,
      },
      {
        name: "Burrata Stuffed with Pesto or Mushrooms",
        description: "Burrata cheese stuffed with Genovese pesto or button mushrooms, EVO and parsley",
        price: 2200,
        vegetarian: true,
      },
      {
        name: "Caprese Salad",
        description: "Fiordilatte cow mozzarella, fresh tomatoes, basil, EVO",
        price: 1550,
        vegetarian: true,
      },
      {
        name: "Mix Salumi & Formaggi",
        description: "Parma ham, Mortadella Bologna, Milano salami, chili salami, Coppa di Parma, Caciotta, smoked Scamorza, Taleggio, Caciocavallo",
        price: 3000,
      },
      {
        name: "Beef Carpaccio, Cipriani Style",
        description: "Eye of silverside, Grana Padano, rocket salad, Cipriani sauce (mayo based)",
        price: 1650,
      },
      {
        name: "Prawns Cocktail",
        description: "Prawns, cocktail sauce (mayo and ketchup based) on green salad",
        price: 1550,
      },
      {
        name: "Smoked Fish Carpaccio",
        description: "Sliced smoked marlin carpaccio, served with capers, onions, olives",
        price: 1650,
      },
      {
        name: "Vegetable Soup",
        description: "Mix fresh vegetables, fresh mushrooms, cherry tomato, EVO",
        price: 750,
        vegetarian: true,
      },
      {
        name: "Mixed Mushrooms Creamy Soup",
        description: "With Porcini, fresh mushrooms and cream",
        price: 1000,
        vegetarian: true,
      },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    tagline: "Fresh, light and generous",
    items: [
      {
        name: "Mix Salad",
        description: "Green salad, carrots, onions, rocket, olives, sweet corn, cherry tomatoes, vinaigrette",
        price: 800,
        vegetarian: true,
      },
      {
        name: "Avocado and Prawns Salad",
        description: "Avocado, prawns, tomatoes, carrots, cucumber, onions, lettuce, vinaigrette",
        price: 1750,
      },
      {
        name: "Caesar Salad",
        description: "Grilled chicken, Grana Padano, green salad, croutons, olives, cherry tomatoes, vinaigrette",
        price: 1700,
      },
      {
        name: "Seafood Salad",
        description: "Green salad, prawns, octopus, calamari, cherry tomatoes, celery, carrots, cucumbers, olives, parsley, vinaigrette",
        price: 1850,
      },
    ],
  },
  {
    id: "homemade-pasta",
    label: "Homemade Pasta",
    tagline: "Handmade pasta, cooked to order",
    items: [
      {
        name: "Gnocchi Gorgonzola and Walnuts",
        description: "Gnocchi of potato with Gorgonzola cheese, walnuts, cream, butter, parsley",
        price: 1750,
        vegetarian: true,
      },
      {
        name: "Tagliatelle Bolognese",
        description: "Tagliatelle with mince beef, celery, carrots, onions, tomatoes, parsley",
        price: 1650,
      },
      {
        name: "Fettuccine Mix Mushrooms",
        description: "Fettuccine with Porcini, fresh mushrooms, Grana Padano, cream, garlic, parsley",
        price: 1850,
        vegetarian: true,
      },
      {
        name: "Fettuccine Lobster",
        description: "Fettuccine with lobster, fresh tomatoes, garlic, parsley, finished with white wine",
        price: 2400,
      },
      {
        name: "Lasagna Classic Bolognese",
        description: "Lasagna with beef Bolognese sauce, Grana Padano, mozzarella and béchamel",
        price: 1800,
      },
      {
        name: "Lasagna Vegetarian",
        description: "Lasagna with pumpkin cream, sweet peppers, mushrooms, zucchini, carrots, broccoli, Grana Padano mozzarella and béchamel",
        price: 1650,
        vegetarian: true,
      },
      {
        name: "Ravioli Ricotta and Spinach",
        description: "Ravioli filling Grana Padano, ricotta cheese, spinach, nutmeg, black pepper cooked in butter-and-sage sauce",
        price: 1700,
        vegetarian: true,
      },
      {
        name: "Ravioli Ricotta and Mushroom",
        description: "Ravioli filling ricotta cheese, fresh mushrooms, nutmeg, black pepper, Grana Padano served with Porcini mushrooms and cream sauce",
        price: 1850,
        vegetarian: true,
      },
      {
        name: "Cappellacci with Red Snapper in Orange Sauce",
        description: "Italian Cappellacci filled with red snapper, potatoes milk, onions, EVO, finished with white wine and served on orange and butter sauce",
        price: 1850,
      },
    ],
  },
  {
    id: "italian-pasta",
    label: "Italian Pasta",
    tagline: "Classics from the Italian regions",
    items: [
      {
        name: "Penne Arrabbiata",
        description: "Fresh tomatoes, Grana Padano, red chilli, onions, basil, garlic",
        price: 1350,
        vegetarian: true,
      },
      {
        name: "Spaghetti Pesto Genovese",
        description: "Genovese pesto: Grana Padano, Pecorino Romano cheese, cashew nuts, basil",
        price: 1850,
        vegetarian: true,
      },
      {
        name: "Spaghetti Carbonara",
        description: "Guanciale, eggs, Grana Padano, Pecorino Romano cheese, black pepper",
        price: 1950,
      },
      {
        name: "Spaghetti Amatriciana",
        description: "Pancetta tesa, fresh tomatoes, Pecorino Romano cheese, parsley, splash of white wine",
        price: 1950,
      },
      {
        name: "Spaghetti Seafood",
        description: "Prawns, calamari, mussels, octopus, red snapper fillet, fresh tomatoes finished with a splash of white wine",
        price: 1950,
      },
      {
        name: "Penne Salmon",
        description: "Fresh cooked salmon, cream, splash of white wine, parsley",
        price: 2000,
      },
      {
        name: "Spaghetti Forest Pesto",
        description: "Pesto based with Pecorino cheese, walnuts, basil, sundried tomatoes, garlic, EVO",
        price: 2000,
        vegetarian: true,
      },
      {
        name: "Linguine Mediterranean Calamari",
        description: "Italian linguine, calamari, Taggiasca olives, EVO, served with cherry tomatoes",
        price: 2000,
      },
    ],
  },
  {
    id: "risotti",
    label: "Risotti",
    tagline: "Slow-cooked Carnaroli or Arborio rice",
    items: [
      {
        name: "Risotto Mix Mushrooms",
        description: "Carnaroli or Arborio rice, Porcini and fresh mushrooms, Grana Padano",
        price: 1950,
        vegetarian: true,
      },
      {
        name: "Risotto Vegetarian",
        description: "Carnaroli or Arborio rice, Grana Padano, fresh mushrooms, French beans, broccoli, onions, carrots, celery, zucchini",
        price: 1550,
        vegetarian: true,
      },
      {
        name: "Risotto Seafood",
        description: "Carnaroli or Arborio rice, prawns, calamari, mussels, octopus, red snapper fillet, chopped fresh tomatoes finished with a splash of white wine",
        price: 2000,
      },
      {
        name: "Risotto Bolognese",
        description: "Carnaroli or Arborio rice, mince beef meat, celery, carrots, onions, tomatoes, parsley",
        price: 1700,
      },
    ],
  },
  {
    id: "meat",
    label: "Meat",
    tagline: "Grilled to perfection over fire",
    items: [
      {
        name: "Grill Fillet (230g)",
        description: "Beef fillet, marinated with herbs, EVO, salt, balsamic vinegar, black pepper. Sauces: Black Pepper, Mix-Mushroom or 4 Cheeses (+450)",
        price: 2000,
      },
      {
        name: "Straccetti alla Romana (230g)",
        description: "Thinly sliced beef fillet, rocket, cherry tomatoes, balsamic vinegar, Grana Padano",
        price: 2200,
      },
      {
        name: "Tagliata Toscana al Rosmarino (230g)",
        description: "Cut grilled beef steak, rosemary infused in EVO, black pepper",
        price: 2100,
      },
      {
        name: "Fillet “La Terrazza” (230g)",
        description: "Beef fillet, butter, onions, red wine, garlic, rosemary",
        price: 2300,
      },
      {
        name: "Grilled Lamb Chops (400g)",
        description: "Marinated with herbs, EVO, salt, balsamic vinegar, black pepper",
        price: 2350,
      },
      {
        name: "Ossobuco with Rice (450g)",
        description: "Beef shank slow cooked with carrots, celery, onion, EVO and red wine, served with rice and parsley on top",
        price: 2900,
      },
    ],
  },
  {
    id: "chicken",
    label: "Chicken",
    tagline: "Tender and full of flavour",
    items: [
      {
        name: "Grilled Chicken (230g)",
        description: "Boneless legs, marinated with herbs, EVO, salt, balsamic vinegar, black pepper",
        price: 1800,
      },
      {
        name: "Scaloppine with Lemon (230g)",
        description: "Boneless legs, floured, butter, lemon and parsley",
        price: 1900,
      },
      {
        name: "Cotoletta Milanese (200g)",
        description: "Chicken breast, eggs, floured and breadcrumbs, black pepper served with tartare sauce (mayo base)",
        price: 1950,
      },
      {
        name: "Chicken Mushroom (230g)",
        description: "Boneless legs, served with Porcini and fresh mushrooms, cream, parsley, black pepper",
        price: 2200,
      },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    tagline: "Fresh from the ocean",
    items: [
      {
        name: "Grilled Fish (230g)",
        description: "Red snapper fillet, marinated in herbs, lemon, EVO, balsamic vinegar, salt, pepper",
        price: 1950,
      },
      {
        name: "Fish Fillet alla Puttanesca (230g)",
        description: "Red snapper fillet, olives, butter, cherry tomatoes, EVO, splash of white wine, parsley",
        price: 2150,
      },
      {
        name: "Fish Fillet Mugnaià (230g)",
        description: "Floured red snapper fillet, butter, lime juice and parsley",
        price: 2150,
      },
      {
        name: "Salmon Fillet (200g)",
        description: "Marinated in EVO, vinegar and fennel, served on fresh salad leaves, cherry tomatoes finished with a splash of white wine",
        price: 2900,
      },
      {
        name: "Fried Calamari (200g)",
        description: "Calamari breaded with flour and eggs, then fried, served with tartare sauce (mayo based)",
        price: 2300,
      },
      {
        name: "Grilled Octopus (200g)",
        description: "Marinated with herbs and EVO, croutons, lettuce, cherry tomatoes, balsamic vinegar, black pepper, sweet peppers, olives",
        price: 2350,
      },
      {
        name: "Grilled King Prawns (6 pcs)",
        description: "Marinated in EVO, lemon salt, pepper, balsamic vinegar",
        price: 3500,
      },
      {
        name: "Grilled Jumbo Prawns (4 pcs)",
        description: "Marinated in EVO, lemon, salt, pepper, balsamic vinegar",
        price: 4500,
      },
      {
        name: "Gran Mix Mare (Grilled)",
        description: "Whole lobster, grilled calamari, 1 jumbo prawn, 2 king prawns, red snapper marinated in EVO, lemon, salt, pepper, balsamic vinegar",
        price: 5500,
      },
      {
        name: "Lobster Grilled",
        description: "Whole grilled lobster, served with mashed potatoes and fresh lettuce, EVO",
        price: 5500,
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    tagline: "To complete your plate",
    items: [
      {
        name: "Mashed Potatoes",
        description: "Potatoes, milk, butter",
        price: 550,
        vegetarian: true,
      },
      {
        name: "Grilled Vegetables",
        description: "Eggplants, zucchini, carrots, onions, sweet pepper, mushrooms, tomatoes",
        price: 700,
        vegetarian: true,
      },
      {
        name: "Buttered Spinach",
        description: "Cooked spinach in butter, cream",
        price: 450,
        vegetarian: true,
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    tagline: "Wood-fired, stone-baked, Italian",
    items: [
      {
        name: "Margherita",
        description: "Tomato sauce, mozzarella, basil, EVO",
        price: 1100,
        vegetarian: true,
      },
      {
        name: "Vegetarian",
        description: "Tomato sauce, mozzarella, eggplants, zucchini, artichokes, fresh mushrooms, EVO",
        price: 1350,
        vegetarian: true,
      },
      {
        name: "Mushroom",
        description: "Tomato sauce, mozzarella, fresh mushrooms, EVO",
        price: 1500,
        vegetarian: true,
      },
      {
        name: "Formaggi",
        description: "Mozzarella, Gorgonzola, smoked Scamorza, Caciotta, Grana Padano, EVO",
        price: 1650,
        vegetarian: true,
      },
      {
        name: "Capricciosa",
        description: "Tomato sauce, mozzarella, fresh mushrooms, artichokes, sweet peppers, EVO",
        price: 1550,
        vegetarian: true,
      },
      {
        name: "Napoli",
        description: "Tomato sauce, mozzarella, anchovies, capers, basil, EVO",
        price: 1550,
      },
      {
        name: "Seafood",
        description: "Tomato sauce, mozzarella, prawns, calamari, red snapper, mussels, octopus, parsley, EVO",
        price: 1750,
      },
      {
        name: "Parma Ham",
        description: "Tomato sauce, mozzarella, Parma ham, EVO",
        price: 1750,
      },
      {
        name: "Diavola",
        description: "Tomato sauce, mozzarella, Italian chilli salami, EVO",
        price: 1650,
      },
      {
        name: "Chicken",
        description: "Tomato sauce, mozzarella, grilled chicken, onions, EVO",
        price: 1750,
      },
      {
        name: "Burrata and Pesto Genovese",
        description: "Tomato sauce, burrata, pesto Genovese sauce, rocket, cherry tomatoes, EVO",
        price: 2000,
      },
    ],
  },
]

export const formatKsh = (price: number) => `Ksh ${price.toLocaleString("en-US")}`