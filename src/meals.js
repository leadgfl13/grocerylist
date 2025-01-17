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
const diced_tomatoes = new Ingredients("diced tomatos", "produce");
const venison = new Ingredients("venison", "meat");
const groundmeat = new Ingredients("ground meat", "meat");
const wontonwrappers = new Ingredients("wonton wrappers", "produce");
const cabbage = new Ingredients("cabbage", "produce");
const salmon = new Ingredients("salmon", "meat");
const papertowels = new Ingredients("paper towels", "nonfood");
const icecream = new Ingredients("ice cream", "frozen");
const popsicles = new Ingredients("popsicles", "frozen");
const napkins = new Ingredients("napkins", "nonfood");
const handsoap = new Ingredients("handsoap", "nonfood");
const dishsoap = new Ingredients("dishsoap", "nonfood");
const laundrydetergent = new Ingredients("laundry detergent", "nonfood");
const dishwasher_pods = new Ingredients("dishwasher pods", "nonfood");
const chips = new Ingredients("chips", "other");
const advil = new Ingredients("advil", "nonfood");

let macaroniandcheese = new Meal(
	"macaroni and cheese",
	["all", "hot", "creamy"],
	napkins
);
let Advil = new Meal("advil", ["nonfood", "all"]);
let Chips = new Meal("chips", ["nonfood", "all", "snacks"], chips);
let Napkins = new Meal("napkins", ["nonfood", "all"], napkins);
let Handsoap = new Meal("handsoap", ["nonfood", "all"], handsoap);
let Dishsoap = new Meal("dishsoap", ["nonfood", "all"], dishsoap);
let Laundrydetergent = new Meal(
	"laundrydetergent",
	["nonfood", "all"],
	laundrydetergent
);
let dishwasherpods = new Meal(
	"dishwasher popds",
	["nonfood", "all"],
	dishwasher_pods
);
let paperTowels = new Meal("paper towels", ["nonfood", "all"], [papertowels]);
let iceCream = new Meal("ice cream", ["frozen", "all"], [icecream]);
let Popsicles = new Meal("popsicles", ["frozen", "all"], [popsicles]);

let Salmon = new Meal(
	"salmon",
	["fish", "seafood", ",meat", "healthy", "all"],
	[salmon]
);

let potstickers = new Meal(
	"potstickers",
	["hot", "crispy", "savory", "ethnic", "all"],
	[groundmeat, wontonwrappers, cabbage, carrots, garlic]
);
let chicken_soup = new Meal(
	"chicken soup",
	["dinner", "soup", "hot", "chicken", "all"],
	[chickenstock, onion, cream, carrots, celery, chicken]
);

let venison_chili = new Meal(
	"venison chili",
	["venison", "chili", "hot", "all"],

	[venison, onion, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let marrymechicken = new Meal(
	"marry me chicken",
	["chicken", "creamy", "hot", "all"],
	[chicken, cream, garlic, chickenstock, chili_beans, diced_tomatoes]
);
let pasta_fagiole = new Meal(
	"pasta_fagiole",
	["italian", "soup", "hot", "all"],

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
	iceCream,
	Popsicles,
	Napkins,
	Laundrydetergent,
	dishwasherpods,
	Handsoap,
	Dishsoap,
	Chips,
	Advil,
	macaroniandcheese,
];
