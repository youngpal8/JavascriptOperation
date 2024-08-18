// // exercise one
// let x = 10;

// function multiplyByTwo() {
//     console.log(x * 2);
// }

// multiplyByTwo(); // Expected Output: 20


// exercise two
// function addNumbers() {
//     let a = 5;
//     let b = 7;
//     return a + b;
// }

// console.log(addNumbers()); // Expected Output: 12


//exercise three

// let name = "Hammed";

// function greet() {
//     let greeting = "Hello ";
//     console.log(greeting + name);
// }

// greet(); // Expected Output: "Hello Hammed"


//exercise four
// let counter = 0;

// function incrementCounter() {
//     counter += 1;
//     console.log(counter);
// }

// incrementCounter(); // Expected Output: 1
// incrementCounter(); // Expected Output: 2
// incrementCounter(); // Expected Output: 3


//exercise five
// function createMessage() {
//     let message = "Welcome to JavaScript!";
//     return message;
// }

// console.log(createMessage()); // Expected Output: "Welcome to JavaScript!"


//exerise six
// let score = 50;

// function resetScore() {
//     let score = 0;
//     console.log(score); // Expected Output: 0
// }

// resetScore();
// console.log(score); // Expected Output: 50


// //exercise seven
// function calculateArea() {
//     let radius = 5;
//     let area = Math.PI * radius * radius;
//     return area;
// }

// console.log(calculateArea()); // Expected Output: 78.53981633974483



//exercise eight
// let status = "active";

// function changeStatus() {
//     let status = "inactive";
//     console.log(status); // Expected Output: "inactive"
// }

// changeStatus();
// console.log(status); // Expected Output: "active"


//exercise nine
function outerFunction() {
    let x = 5;

    function innerFunction() {
        console.log(x);
    }

    innerFunction();
}

outerFunction(); // Expected Output: 5






