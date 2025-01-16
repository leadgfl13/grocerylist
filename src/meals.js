export { meallist };
class Meal {
	constructor(name, tags, ingredients) {
		this.name = name;
		this.tags = tags;
		this.ingredients = ingredients;
	}
}
class Ingredients {
	constructor(name, location) {
		(this.name = name), (this.location = location);
	}
}

const cream = new Ingredients("cream", "dairy");
const chickenstock = new Ingredients("chicken stock", "produce");
const onion = new Ingredients("onion", "produce");
const chicken = new Ingredients("chicken", "meat");
const bacon = new Ingredients("bacon", "meat");
const chili_beans = new Ingredients("chili beans", "produce");
const garlic = new Ingredients("garlic", "produce");
const celery = new Ingredients("celery", "produce");
const carrots = new Ingredients("carrots", "produce");
const cannelini_beans = new Ingredients("cannelini_beans", "produce");
const tomato_paste = new Ingredients("tomato paste", "produce");
const diced_tomatoes = new Ingredients("Diced Tomatos", "produce");
const venison = new Ingredients("Venison", "meat");
const groundmeat = new Ingredients("Ground meat", "meat");
const wontonwrappers = new Ingredients("Wonton wrappers", "produce");
const cabbage = new Ingredients("Cabbage", "produce");
const salmon = new Ingredients("Salmon", "meat");
const papertowels = new Ingredients("Paper Towels", "nonfood");

let paperTowels = new Meal("paper towels", ["nonfood"], [papertowels]);
let Salmon = new Meal(
	"Salmon",
	["fish", "seafood", ",meat", "healthy"],
	[salmon]
);

let potstickers = new Meal(
	"Potstickers",
	["hot", "crispy", "savory", "ethnic"],
	[groundmeat, wontonwrappers, cabbage, carrots, garlic]
);
let chicken_soup = new Meal(
	"Chicken soup",
	["dinner", "soup", "hot", "chicken"],
	[chickenstock, onion, cream, carrots, celery, chicken]
);

let venison_chili = new Meal(
	"Venison Chili",
	["venison", "chili", "hot"],

	[venison, onion, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let marrymechicken = new Meal(
	"Marry Me Chicken",
	["chicken", "creamy", "hot"],
	[chicken, cream, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let pasta_fagiole = new Meal(
	"Pasta_fagiole",
	["italian", "soup", "hot"],

	[bacon, onion, garlic, chickenstock, cannelini_beans, tomato_paste]
);
const meallist = [
	venison_chili,
	marrymechicken,
	chicken_soup,
	pasta_fagiole,
	potstickers,
	Salmon,
	paperTowels,
];
