let fruits = ["john", "1234", "apples", 3, "banana", 4];

let nameVar = "username"
//key value pair
let userCart = {
	username :"john",
	password :1234,
	isUserSignedIn: true,
	cart : {
		apple : 2,
		banana : 1,
		pear: 5,
	},
	prices: {
		apple:0.5,
		banana :0.8,
		pear: 0.2,
	}
	
};



userCart["username"] = "josh"; //changed username
//userCart["password"] = "1235"

console.log(userCart["cart"]["pear"])
console.log(userCart["prices"]["pear"])

let choice = prompt("Choose your fruit")

let numberFruit = userCart["cart"][choice.toLowerCase()]
let pricePerFruit = userCart["prices"][choice.toLowerCase()]
let totalPrice = numberFruit * pricePerFruit;
let tax = totalPrice * 0.17 //tax of 17%

alert("the "+ choice.toLowerCase() +"/s cost "+ totalPrice + tax + " shekel/s to " + userCart["username"]+ " with tax")
console.log(totalPrice)
