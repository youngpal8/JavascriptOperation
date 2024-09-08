// 1 combining array

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// Example:
console.log(combineArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]


// 2 copying of array

function copyArray(arr) {
    return [...arr];
}

// Example:
console.log(copyArray([5, 10, 15])); // Output: [5, 10, 15]


//3 merging an arrays 
 
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

// Example:
console.log(mergeObjects({a: 1}, {b: 2})); // Output: {a: 1, b: 2}


//4 Concatenating Multiple Arrays

function concatArrays(arr1, arr2, arr3) {
    return [...arr1, ...arr2, ...arr3];
}

// Example:
console.log(concatArrays([1], [2, 3], [4])); // Output: [1, 2, 3, 4]
