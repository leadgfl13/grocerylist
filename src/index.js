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
//when you submit the tags
let createlist = document.getElementById("create_list");
const listofMeals = document.getElementById("meal_list");
let submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", () => {
	crossCheck(make_meal_list());
});
//when you click the make a grocery list
createlist.addEventListener("click", () => {
	let htmllist = makeList(listofMeals);
	makeAList(htmllist, meallist);
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
		return taglist;
	}
}

//checks if the second array is a subset of the first array
function isSubset(tagarray, mealarray) {
	return tagarray.every((element) => mealarray.includes(element));
}

//make a function to take the array of innerHTML, check to see if it matches the meal array, and if so, print the tags from the matching meal
function makeAList(htmlarray, mealarray) {
	for (let i = 0; i < htmlarray.length; i++) {
		for (let j = 0; j < mealarray.length; j++) {
			if (htmlarray[i] === mealarray[j].name) {
				alert(
					"The meal is " +
						mealarray[j].name +
						"ingredients include " +
						mealarray[j].ingredients
				);
			} else {
				console.log("No match");
			}
		}
	}
}
//need a function to create a button on the right side of the page if a meal is clicked to remove itself from the page
function removeButton(specificbutton) {
	specificbutton.remove();
}

//function to make an array of all the child elements of a div
function makeList(divcontainer) {
	const divElement = document.getElementById("meal_list");
	const innerHtmlArray = Array.from(divElement.children).map(
		(child) => child.innerHTML
	);
	return innerHtmlArray;

	console.log(innerHtmlArray);
}
//Make a function so when button is clicked, it
//this checks to see if the tag elements are NOT in each food elements
function crossCheck(thingy) {
	middle.innerHTML = "";
	for (let el of meallist) {
		//for every meal in meal list
		//calls checkMatch to see if a true value is returned if the search tags are a subset of the meal tags
		if (isSubset(thingy, el.tags) == true) {
			let mealbutton = document.createElement("button"); //if the mealist item tag does include the tags, make a meal button
			mealbutton.setAttribute("id", "mealbutton");
			mealbutton.innerHTML += el.name; //give the meal button the name of the meal list item
			mealbutton.addEventListener("click", () => {
				//creates a button on the right side, and when the button is clicked it removes it from the right side
				let mealfinal = document.createElement("button");
				mealfinal.innerHTML = el.name;
				mealfinal.addEventListener("click", () => {
					removeButton(mealfinal);
				});
				meal_list.append(mealfinal);
			});
			middle.append(mealbutton); //add the button to the middle
		} else {
			//*** ISSUE HERE>  IT IS RETURNING TRUE FOR ALL?!? */
			//if the meallist item  tags dont include the tags
		}
	}
}
