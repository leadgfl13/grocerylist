import "./style.css";

class Meal {
	constructor(name, tags, ingredients) {
		this.name = name;
		this.tags = tags;
		this.ingredients = ingredients;
	}
}

const meallist = [];
let possiblemeals = [];
//acts as the array to hold meals that are selected as possible options, stores them as the full objects
let selectedmeals = [];

let chicken_soup = new Meal(
	"Chicken soup",
	["dinner", "soup", "hot", "chicken"],
	["chicken stock", "onion", "celery", "carrots", "chicken"]
);

let venison_chili = new Meal(
	"Venison Chili",
	["venison", "chili", "hot"],

	[
		"Venison",
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

meallist.push(chicken_soup);
meallist.push(marrymechicken);
meallist.push(venison_chili);

// global variables
let middle = document.getElementById("middle");
let createlist = document.getElementById("create_list");
const listofMeals = document.getElementById("meal_list");
let submitbutton = document.getElementById("submit");

//Once submit button is clicked, goes through and gets all checked values
//Turns the values into an array called taglist.  Everytime it is clicked it wipes it clean and remakes the list
function make_meal_list() {
	let taglist = [];
	const checkboxes = document.querySelectorAll(
		'input[type="checkbox"]:checked'
	);
	for (let i = 0; i < checkboxes.length; i++) {
		taglist.push(checkboxes[i].value);
	}
	if (taglist.length == 0) {
		alert("Please make a selection");
		return;
	} else {
		return taglist;
	}
}

//checks if the second array is a subset of the first array
function isSubset(tagarray, mealarray) {
	return tagarray.every((element) => mealarray.includes(element));
}

//Make a function so when button is clicked, it
//this checks to see if the tag elements are in each food elements
function crossCheck(thingy) {
	middle.innerHTML = "";
	possiblemeals = [];

	for (let meal of meallist) {
		//for every meal in meal list
		//calls isSubset to see if the tagarray matches the tag array of that meal.
		//If theres a match, create a new copy of the meal, and then put it into an array of possible meals
		if (isSubset(thingy, meal.tags) == true) {
			let possiblemeal = meal;
			possiblemeals.push(possiblemeal);
		}
	}
	console.log(possiblemeals);
}

function makeElement(type, identity, where, text) {
	let poops = document.createElement(type);
	poops.setAttribute("class", identity);
	poops.innerHTML = text;
	where.append(poops);
}
function displayPossibles() {
	for (let i = 0; i < possiblemeals.length; i++) {
		console.log("Hello");
	}
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ACTUAL EXECUTING CODE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
submitbutton.addEventListener("click", () => {
	crossCheck(make_meal_list());
	for (let i = 0; i < possiblemeals.length; i++) {
		makeElement("button", "possiblemeal", middle, possiblemeals[i].name);
	}
});
