import "./style.css";

let testbutton = document.getElementById("test");
testbutton.addEventListener("click", () => {
	alert(chicken_soup.ingredients);
});
class Meal {
	constructor(name, tags, ingredients) {
		this.name = name;
		this.tags = tags;
		this.ingredients = ingredients;
	}
}

let chicken_soup = new Meal(
	"Chicken soup",
	["dinner", "soup", "hot", "chicken"],
	["chicken stock", "onions", "celery", "carrots", "chicken"]
);
