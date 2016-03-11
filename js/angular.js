(function(){
var app = angular.module('menu', []);

// Controllers...

app.controller('MenuController', function(){
	
});

app.controller('AppetizerController', function(){
	this.products = appetizers;
});

app.controller('SoupsSaladsController', function(){
	this.products = soupsSalads;
});

app.controller('SidesController', function(){
	this.products = sides;
});

app.controller('CarteController', function(){
	this.products = carte;
});

app.controller('FareController', function(){
	this.products = fare;
});

app.controller('DessertsController', function(){
	this.products = desserts;
});

// Menu objects...

var appetizers = [
	{
		item: "Cumberland Wings",
		subDescription: "Jamaican Jerk, Honey Chipotle or Spicy Buffalo",
		description: "Served with Ranch and Celery Sticks",
		price: "4.95 (5)",
		secondPrice: "8.95 (10)"
	},
	{
		item: "Roasted Red Pepper Hummus",
		description: "Served with Grilled Pita, Fresh Tomatoes & Cucumbers",
		price: "7.95"
	},
	{
		item: "Cumberland Beer Cheese",
		subDescription: "Original or Habanero",
		description: "A Blend Of Sharp Cheese, Pale Ale & Spices. Served Chilled with Crackers & Jalapenos",
		price: "7.95"
	},
	{
		item: "Spinach Queso",
		description: "Slightly Spicy Blend of Sharp Cheddar, Spinach and Peppers. Served with Fresh Tortilla Chips and Diced Tomatoes",
		price: "6.95"
	},
	{
		item: "Cheese Fries",
		description: "Topped with Spinach Queso, Mozzarella & Cheddar Cheese & Diced Tomatoes",
		price: "7.95"
	},
	{
		item: "Black Bean Nachos",
		description: "Topped with Spinach Queso, Black Beans, Mozzarella & Cheddar Cheese & Diced Tomatoes. Served with sides of Cilantro Sour Cream & Habanero Salsa",
		price: "6.95"
	},
	{
		item: "Habanero Salsa",
		description: "Homemade Salsa Served with Fresh Tortilla Chips",
		price: "6.95"
	},
	{
		item: "Fried Green Tomatoes",
		description: "Served with Diablo Sauce",
		price: "6.95"
	},
	{
		item: "Sweet Potato Fries",
		description: "Served with Cinnamon Sugar Cream Cheese Dip",
		price: "5.95"
	},
	{
		item: "Rolled Oysters",
		description: "Three Breaded Oysters Served with Cocktail Sauce and Oyster Crackers",
		price: "7.95"
	},
	{
		item: "Flatbread Pizza",
		description: "Topped with Homemade Marinara, Seasonal Veggies and Cheese",
		price: "7.95"
	},
	{
		item: "Quesadilla",
		subDescription: "Black Bean, Vegeatable or Quesadilla of the Day",
		description: "Served with Sides of Habanero Salsa & Cilantro Sour Cream",
		price: "8.95"
	}
]

var soupsSalads = [
	{
		item: "Grilled Chicken Salad",
		description: "Served Over Mixed Greens with Bleu Cheese Crumbles, Slilced Almonds & Green Apples. Tossed in Balsamic Vinaigrette",
		price: "10.25"
	},
	{
		item: "Cumberland Pub Salad",
		description: "Fresh Greens, Cucumbers, Tomatoes, Tortilla Strips & Parmesan Cheese",
		price: "5.25"
	},
	{
		item: "Dressings",
		description: "Buttermilk Ranch, Honey Mustard, Bleu Cheese, Balsamic Vinaigrette, Mediterranean Feta, Oil & Vinegar"
	},
	{
		item: "Bison Chili",
		description: "Our Homemade Spicy Chili",
		price: "3.95 Cup",
		secondPrice: "5.95 Bowl"
	},
	{
		item: "Soup of the Day",
		description: "Soups are Made Fresh Daily",
		price: "2.95 Cup",
		secondPrice: "4.95 Bowl"
	}
]

var sides = [
	{
		item: "Grilled Portabella",
		price: "3.00"
	},
	{
		item: "Pita Bread (2)",
		price: "2.50"
	},
	{
		item: "Vegeatable of the Day",
		price: "3.00"
	},
	{
		item: "Steak Fries",
		price: "2.50"
	},
	{
		item: "Ranch & Celery",
		price: "2.00"
	},
	{
		item: "Side Salad",
		price: "3.00"
	}
]

var carte = [
	{
		item: "Beer Cheese 4oz",
		price: "3.50"
	},
	{
		item: "Roasted Red Pepper Hummus",
		price: "3.50"
	},
	{
		item: "Spinach Queso",
		price: "3.50"
	},
	{
		item: "Grilled Chicken Breast",
		price: "3.25"
	},
	{
		item: "Habanero Salsa",
		price: "3.50"
	}
]

var fare = [
	{
		item: "Bison Burger",
		description: "8oz. Grilled to Order with One Cheese or Topping of Your Choice",
		price: "10.50"
	},
	{
		item: "Buffalo Chicken Sandwich",
		description: "Breaded & Tossed in Buffalo Sauce & Topped with Bleu Cheese",
		price: "10.50"
	},
	{
		item: "Jerk Chicken Sandwich",
		description: "Breaded & Tossed in Jamaican Jerk Sauce with a Side of Ranch",
		price: "10.50"
	},
	{
		item: "Chicken Cordon Bleu",
		description: "Breaded Chicken Breast Topped with Honey Baked Ham & Swiss with a Side of Honey Mustard",
		price: "10.50"
	},
	{
		item: "Grilled Chicken",
		description: "Pepper Grilled Chicken Breast Served with a Side of Chipotle Mayonnaise",
		price: "10.50"
	},
	{
		item: "Bar B Q Sandwich",
		description: "Hickory Smoked Pulled Pork Topped with Bar B Q Sauce",
		price: "9.95"
	},
	{
		item: "BLT",
		description: "Triple Decker with Hickory Smoked Bacon with a Side of Chipotle Mayonnaise",
		price: "9.95"
	},
	{
		item: "Ham & Cheese",
		description: "Grilled Honey Baked Ham & American Cheese",
		price: "8.95"
	},
	{
		item: "Fried Bologna",
		description: "Topped with White & Yellow American Cheese",
		price: "7.95"
	},
	{
		item: "Fish on Rye",
		description: "Piled High Southern Fried Whitefish with a Side of Cajun Tartar Sauce",
		price: "10.50"
	},
	{
		item: "Blackened Salmon Burger",
		description: "Grilled Salmon Patty Served with a Side of Cajun Tartar Sauce",
		price: "10.50"
	},
	{
		item: "Fish Tacos (2)",
		description: "Fried Whitefish on Corn Tortillas Topped with White American & Cheddar Cheese, Lettuce, Tomato & Jalapenos with Sides of Habanero Salsa, Cilantro Sour Cream & Fresh Tortilla Chips",
		price: "8.95"
	},
	{
		item: "Veggie Burger",
		description: "Falafel Patty Topped with Grilled Portabella Mushrooms & Spicy Pepper Jack Cheese with a Side of Guacamole",
		price: "9.95"
	},
	{
		item: "Grilled Cheese",
		description: "White & Yellow American Cheese Melted on Texas Toast",
		price: "7.95"
	},
	{
		item: "Fried Green Tomato Sandwich",
		description: "Breaded Tomatoes with a Side of Diablo Sauce",
		price: "9.95"
	},
	{
		item: "Grilled Veggie Sandwich",
		description: "Seasonal Vegeatables on Herb Flatbread with a Side of Guacamole",
		price: "8.95"
	},
]

var desserts = [
	{
		item: "Chocolate Malt Cup",
		description: "6oz Chocolate Ice Cream Made with Malt from Our Nitro Porter Beer",
		price: "2.50"
	},
	{
		item: "Ice Cream",
		description: "Vanilla Ice Cream Topped with Chocolate Syrup",
		price: "2.50"
	},
	{
		item: "Soda Floats",
		description: "Choose from Root Beer, Coke, Sprite or Red Cream Soda",
		price: "3.95"
	},
	{
		item: "Cake",
		description: "(When Available) Ask Your Server",
		price: "2.95"
	},
]
})();