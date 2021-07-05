//exercise 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift()//remove banana (first item in the array)
fruits.sort() //sort to abc order
fruits.push("Kiwi")//add kiwi
fruits.splice(0,1)//i dont know any other methods. (remove apple)
fruits.reverse()
console.log(fruits)

//exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])
