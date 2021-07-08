//function userInfo (name,age) {
	//console.log("My name is "+name+" and my age is "+age)
//}

//userInfo("Ralph",14)

//exercise in class
//exercise 1

//function ages (myAge) {
	//let momAge = myAge*2
	//let dadAge = momAge*1.2
	//console.log("my moms age is "+ momAge)
	//console.log("my moms age is "+ dadAge)
//}

//ages(10)

//exercise 2

//function ages (myAge) {
	//let momAge = myAge*2
	//return momAge
//}
//console.log(ages(20))

//XP EXERCISES
//EXERCISE 1
//part 1
function infoAboutMe() {
	console.log("My name is ralph im 14 i like computers")
}
//infoAboutMe()

//part 2

function infoAboutPerson(personName, personAge, personFavoriteColor) {
	console.log("your name is "+personName+" you are "+personAge+" years old your favorite color is "+ personFavoriteColor)
}

//infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
//infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

//part 3

function infoAboutPerson(personName, personAge, personFavoriteColor,personHobbies) {
	console.log("your name is "+personName+" you are "+personAge+" years old your favorite color is "+ personFavoriteColor)
	for (i in personHobbies) {
		console.log("one of your hobbies is: "+ personHobbies[i])
	}
}
//infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
//infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

//EXERCISE 2

//let userAge = prompt("Enter ur age")

function checkDriverAge(age) {
	if (age<18) {
		console.log("ur too young.")
	} else if (age>18) {
		console.log("enjoy driving")
	} else {
		console.log("happy 18! enjoy driving")
	}
}

//checkDriverAge(userAge)

//exercise 3

function checkNumber() {
	for (let o=0; o<101; o++) {
		if (o%2==0) {
			console.log(o+ "is even")
		} else {
			console.log(o+ "is odd")
		}
	}
}

//checkNumber()
//exercise 4
let sum=0
function isDivisible() {
	for (i=0;i<501;i++) {
		if (i%23==0) {
			console.log(i+ " is divisible by 23")
			sum+=i
		}
		
	}
	console.log("sum "+sum)

}
//isDivisible()
//EXERCISE 5
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
	let asking=prompt("Enter an item")
	if (asking.toLowerCase in amazonBasket) {
		console.log(asking+" is in the basket.")
	} else {
		console.log("item not in basket")
	}
}

//checkBasket() //HOW DO YOU GET KEYS

//EXERCISE 6
//Quarters  = 0.25
//Dimes = 0.10
//Nickels = 0.05
//Pennies = 0.01
function changeEnough([Quarters,Dimes,Nickels,Pennies],price) {
	if (Quarters*0.25+Dimes*0.10+Nickels*0.05+Pennies*0.01>=price) {
		console.log("You have enough change")
	} else
	console.log ("you dont have enough change.")
} 
//changeEnough([0, 0, 20, 5], 0.75)

//exercise 7
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList=["banana","orange","apple"]
let totalprice= 0
function myBill() {
	for (i in shoppingList) {
		if (stock[i] > 0) {
			totalprice+= prices[i]
		} else {console.log(stock[i]+ " was not in stock.")}
	}
}console.log(totalprice)
//something is wrong, idk what

