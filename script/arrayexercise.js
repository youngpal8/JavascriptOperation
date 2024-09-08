// 1 findFruitIndex(fruits, fruitName)

// function findFruitIndex(fruits, fruitName) {
//     return fruits.indexOf(fruitName);
// }

// let fruits = ['apple', 'banana', 'cherry'];
// console.log(findFruitIndex(fruits, 'banana'));

// 2 removeFirstElement(array)
// function removeFirstElement(array) {
//     array.shift();
//     return array;
// }

// let fruits = ['apple', 'banana', 'cherry'];
// console.log(removeFirstElement(fruits))


// 3 addElementToBeginning(array, element)
// function addElementToBeginning(array, element) {
//     // Add the element to the beginning of the array using unshift()
//     array.unshift(element);
    
//     // Return the modified array
//     return array;
// }

// let fruits = ['banana', 'cherry'];
// let newFruits = addElementToBeginning(fruits, 'apple');
// console.log(newFruits);  // Output: ['apple', 'banana', 'cherry']

//4 addElementToEnd(array, element)

// function addElementToEnd(array, element) {
//     // Add the element to the end of the array using push()
//     array.push(element);
    
//     // Return the modified array
//     return array;
// }


// let fruits = ['apple', 'banana'];
// console.log(addElementToEnd(fruits, 'cherry'));

//5 sortAndReverse(array)
function sortAndReverse(array) {
    // Sort the array in ascending order
    array.sort(function(a, b) {
        return a - b;
    });
    
    // Reverse the sorted array
    array.reverse();
    
    // Return the modified array
    return array;
}

let numbers = [5, 2, 9, 1, 7];
let sortedAndReversed = sortAndReverse(numbers);
console.log(sortedAndReversed);  // Output: [9, 7, 5, 2, 1]
