//loops!
//  starting point, condition, what to do each loop
//for (let counter=1; counter <=3; counter++){
	//console.log("Hello",counter)
//}
//counter starts at 1, should stop at 3, increase the counter by 1 each loop
//if i don t increase the counter than the loop will run forever.

//exercise 1 w2d3
//for (let counter=0; counter<=15;counter++){
	//if (counter%2==0){
		//console.log(counter+" is an even number.")
	//}else {
		//console.log(counter+" is an odd number.")
	//}
//}

//let prices =[20,12,5,4,2]
//let sum = 0

//for (let i = 0; i<=prices.length - 1; i++) {
	//sum+=prices[i]
	//console.log(sum, prices[i])
//}

//exercises XP

//exercise 1

let colors = ["blue","green","purple"]
let numbers = [1,2,3,4,5,6,7,8,9]
for (let i =0; i<=colors.length - 1; i++) {
	console.log("My number "+ numbers[i]+" choice is " + colors[i])	
}

//exercise 2

let people = ["Greg", "Mary", "Devon", "James"]
people.shift()
people.splice(2,1,"Jason")
people.push("Ralph")
for(let i = 0; i<=people.length - 1; i++) {
	console.log(people[i])
	if (people[i]=="Jason") {
		break
	}
}
//console.log("OUT OF LOOP")

let people2 = people.slice(1,3);//removes the 1st and 3rd index (ralph and mary)
//console.log(people2)
//console.log(people.indexOf("Mary"))//returns 0
//console.log(people2.indexOf("Mary"))//returns -1
//console.log(people.indexOf("Foo"))//returns -1
//console.log(people.indexOf("Foo"))//returns -1
//the output of Foo is -1 because -1 is impossible to get in an array (since it doesnt exist) and Foo doenst exist in the array.
let last=people2[people2.length - 1]
//console.log(last)

//exercise 3

//let nuber = prompt("Enter a number.")
//while (nuber<10) {
	//nuber = prompt("Enter a bigger number.")
//}
//console.log("OUT OF LOOP.")

//exercise 4
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

//let studentName = prompt("Enter your name.")
//let nam = studentName.toLowerCase()
//if (nam in guestList){
	//console.log("Hello, my name is "+ "[NAME]" +" and im from " + guestList[nam]) //FIXX
//} else {
	//console.log("Hello, im a guest.")
//}

//exercise 5

let family = {
	dad : "Adam",
	mom : "Maya",
	son : "Guy",
	daughter : "Sarah"
}

for (key in family) {
	console.log(family[key])
}

//for (key in family) {
	//console.log(family.key) //how do you get keys??
//}

//exercise 6
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
console.log("my " + details["my"] +" is "+ details["is"] +" the "+ details["the"] )

//exercise 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
console.log(names[0][0])
let societyName = ""
for (i in names) {
	societyName=societyName.concat(names[i][0])
}
societyName= societyName.split("").sort().join("")//turn it into an array, sort it, then join it back
console.log(societyName)
