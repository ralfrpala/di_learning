//99
//take 1 down
//98
//2 down
//96
//3 down
//93
let beers = 99
function beer() {
	let starting = prompt("enter a number")
	for (let i=starting; i<99; i++){
		console.log(beers+" bottles of beer on the wall, "+beers+" bottles of beer")
		beers= beers-i
		if (beers<0) {
			console.log("got to go to the market to get more beer bottles of beer for the wall") //end
			return
		}
		console.log("take "+i+" out")
		if (i==1) {
			console.log("pass it around") //correct grammar
		}else{console.log("pass them around")}
		console.log(beers+" bottles of beer on the wall!")
		console.log(" ") // space

	}
}
beer()
