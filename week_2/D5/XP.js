let guess=0
let computerNumber=0
function playTheGame() {
	let con = confirm("Would you like to play a game?")
	if (con=false) {
		alert("Ok. Goodbye!")
		return
	} else {
		guess = prompt("enter a number between 0 and 10")
	}
	if (isNaN(guess)) {
		alert("Not a good number.")
		return
	}else if (guess>10 || guess<0) {
		alert("Not a good number")
		return
	} else {
		console.log("good number")
		computerNumber = Math.floor(Math.random() * 10)
		console.log(guess+" "+computerNumber)
	}
}
function testNumbers(userNumber=guess,pcNumber=computerNumber) {
	if (userNumber==pcNumber) {
		alert("WINNER! YOU GUESSED THE CORRECT NUMBER!")
	} else if (userNumber>pcNumber) {
		//prompt("your number is too big guess again") // how do i connect it to the function?
	}else if (userNumber<pcNumber){
		//prompt("number too small try again")
	}
}
//how do i see how many times the player guessed? 
//maybe a loop?
//if player guess is not correct ask again. chance+1
//ask again chance+1
//ask again chance +1
//if chance=3, alert(out of chances)
