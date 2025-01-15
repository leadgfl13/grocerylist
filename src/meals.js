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

const garlic = new Ingredients("garlic", "produce");
const cannelini_beans = new Ingredients("cannelini_beans", "produce");
const tomato_paste = new Ingredients("tomato paste", "produce");

let chicken_soup = new Meal(
	"Chicken soup",
	["dinner", "soup", "hot", "chicken"],
	[chickenstock, onion, cream, "celery", "carrots", chicken]
);

let venison_chili = new Meal(
	"Venison Chili",
	["venison", "chili", "hot"],

	[
		"venison",
		"onion",
		"garlic",
		"chicken stock",
		"chili beans",
		"diced tomatos",
	]
);
let marrymechicken = new Meal(
	"Marry Me Chicken",
	["chicken", "creamy", "hot"],

	[
		"Chicken",
		"cream",
		"garlic",
		"chicken stock",
		"chili beans",
		"diced tomatos",
	]
);
let pasta_fagiole = new Meal(
	"Pasta_fagiole",
	["italian", "soup", "hot"],

	[bacon, onion, garlic, chickenstock, cannelini_beans, tomato_paste]
);
const meallist = [venison_chili, marrymechicken, chicken_soup, pasta_fagiole];
