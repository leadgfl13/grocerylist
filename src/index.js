import "./style.css";

class Meal {
	constructor(name, tags, ingredients) {
		this.name = name;
		this.tags = tags;
		this.ingredients = ingredients;
	}
}

const meallist = [];

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

let submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", () => {
	var tags = makeBoxes(make_meal_list());
	console.log(tags);
});

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
		console.log(taglist);
		return taglist;
	}
}

function makeBoxes(the_list) {
	middle.innerHTML = "";
	if (!the_list) {
		return;
	}
	for (let i = 0; i < the_list.length; i++) {
		let newdiv = document.createElement("div");
		newdiv.setAttribute("class", "mealbox");
		newdiv.innerHTML = the_list[i];
		middle.append(newdiv);
	}
}
//I need a function to cross reference the values from one list, and see if they match
//Then a function to create buttons based on the names in the list
