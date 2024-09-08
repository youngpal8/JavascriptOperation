// Creating an array called fruits
let fruits = ["apple", "banana", "mango", "orange"];


// Accessing the first and last elements of the array
console.log("First element:", fruits[0]); // apple
console.log("Last element:", fruits[fruits.length - 1]); // orange

// Adding "grape" to the end of the fruits array
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "mango", "orange", "grape"]


// Removing the first element from the fruits array
fruits.shift();
console.log(fruits); // ["banana", "mango", "orange", "grape"]


// Printing the length of the fruits array
console.log("Length of the array:", fruits.length); // 4


// Using a for loop to iterate through the fruits array and print each fruit
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Reversing the order of elements in the fruits array
fruits.reverse();
console.log(fruits);


function findFruitIndex(fruits, fruitName) {
    return fruits.indexOf(fruitName);
    console.log(fruits);
}
