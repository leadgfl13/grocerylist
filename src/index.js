import "./style.css";
import { meallist } from "./meals";

let possiblemeals = [];
//acts as the array to hold meals that are selected as possible options, stores them as the full objects
let selectedmeals = [];
let finallist = [];
let list_of_meals = document.getElementById("meal_list");

// global variables
let middle = document.getElementById("middle");
let createlist = document.getElementById("create_list");
const listofMeals = document.getElementById("meal_list");
let submitbutton = document.getElementById("submit");
let groceries = document.getElementById("groceries");

//Once submit button is clicked, goes through and gets all checked values
//Turns the values into an array called taglist.  Everytime it is clicked it wipes it clean and remakes the list
function getTags() {
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
//this checks to see if the tag elements are in each food elements
function crossCheck(taglist) {
	middle.innerHTML = "";
	possiblemeals = [];

	for (let meal of meallist) {
		//for every meal in meal list
		//calls isSubset to see if the tagarray matches the tag array of that meal.
		//If theres a match, create a new copy of the meal, and then put it into an array of possible meals
		if (isSubset(taglist, meal.tags) == true) {
			let possiblemeal = meal;
			possiblemeals.push(possiblemeal);
		}
	}
}

//makes buttons for the meals based on the tags that match
function makeElement(type, identity, where, text) {
	let poops = document.createElement(type);
	poops.setAttribute("class", identity);
	poops.innerHTML = text;
	where.append(poops);
	poops.addEventListener("click", () => addToGroceryList(poops));
}

//when the meal button is pressed, make sure that it matches a meal, and then add that meal object to a final array
function addToGroceryList(themeal) {
	for (let i = 0; i < meallist.length; i++) {
		if (themeal.innerHTML === meallist[i].name) {
			let finalmeal = meallist[i];
			finallist.push(finalmeal);
			console.log(finallist);
		}
	}
	displayMeals();
}
//removes some item from an array
function Remove(thingy) {
	console.log("this is an array?");
	console.log(finallist);
	console.log("position in array");
	finallist.splice(thingy, 1);
	displayMeals(finallist);
}
//displays the meals in finallist as buttons
function displayMeals() {
	list_of_meals.innerHTML = "";
	console.log("This is the begininning of display meals " + finallist);
	for (let i = 0; i < finallist.length; i++) {
		let finalbutton = document.createElement("button");
		finalbutton.setAttribute("class", "listmeal");
		finalbutton.setAttribute("id", "button"[i]);
		finalbutton.innerHTML = finallist[i].name;
		list_of_meals.append(finalbutton);
		finalbutton.addEventListener("mouseover", () => {
			for (let j = 0; j < finallist[i].ingredients.length; j++) {
				finalbutton.innerHTML += finallist[i].ingredients[j].name + " ";
			}
		});
		finalbutton.addEventListener("mouseleave", () => {
			finalbutton.innerHTML = finallist[i].name;
		});
		finalbutton.addEventListener("click", () => {
			finallist.splice([i], 1);
			displayMeals();
		});
	}
}

//adds the titles to the grocery list
function addmiddleTitle(doc, id, cls, inner, cell) {
	let box = document.getElementById(cell);
	doc = document.createElement("div");
	doc.setAttribute("id", id);
	doc.setAttribute("class", cls);
	doc.innerHTML = inner;
	box.append(doc);
}

function addListElement(finallist, ingredients, location, cell) {
	for (let i = 0; i < finallist.length; i++) {
		for (let j = 0; j < finallist[i].ingredients.length; j++) {
			if (finallist[i].ingredients[j].location === location) {
				let produce = document.getElementById(cell); //gets the cell and assigns it a name
				let produceitem = document.createElement("button");
				produceitem.setAttribute("class", "listitems");
				produceitem.innerHTML = finallist[i].ingredients[j].name;
				produceitem.addEventListener("click", () => {
					produceitem.remove();
				});

				produce.append(produceitem);
			}
		}
	}
}

function makeGroceryList() {
	//convert the middle page to the list of groceries
	middle.innerHTML = "";
	middle.setAttribute("id", "grocerymiddle");
	makeGrid(2, 4);

	addmiddleTitle("dairytitle", "title1", "title", "Dairy", "cell00");
	addmiddleTitle("Produce", "title2", "title", "Produce", "cell01");
	addmiddleTitle("Bread", "title3", "title", "Breads", "cell02");
	addmiddleTitle("Meats", "title4", "title", "Meats", "cell03");
	//for every meal in the list
	addListElement(finallist, finallist.ingredients, "produce", "cell11");
	addListElement(finallist, finallist.ingredients, "dairy", "cell10");
	addListElement(finallist, finallist.ingredients, "meat", "cell13");
	addListElement(finallist, finallist.ingredients, "breads", "cell12");
}

function makeGrid(rows, cols) {
	let grid = document.getElementById("grocerymiddle");
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			const gridItem = document.createElement("div");
			gridItem.setAttribute("class", "gridlyfe");
			gridItem.id = `cell${i}${j}`;
			grid.appendChild(gridItem);
		}
	}
}

function makeGrid2(rows, cols) {
	middle.innerHTML = "";
	let grid2 = document.getElementById("middle");
	grid2.setAttribute("id", "newgrid");
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			const gridelement = document.createElement("div");

			gridelement.id = `gridel${i}${j}`;
			gridelement.setAttribute("class", "gridelement");
			grid2.appendChild(gridelement);
		}
	}
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ACTUAL EXECUTING CODE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
submitbutton.addEventListener("click", () => {
	crossCheck(getTags());

	for (let i = 0; i < possiblemeals.length; i++) {
		makeElement("button", "possiblemeal", middle, possiblemeals[i].name);
	}
});

groceries.addEventListener("click", () => {
	makeGroceryList();
});
