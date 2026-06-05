// QUESTION 02: Return Second Fruit Element Function
function getSecondFruit(fruitsArray) {
    // Index 0 = First, Index 1 = Second element matrix
    return fruitsArray[1]; 
}

// Input Tracks Setup
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];

// Execution
const result = getSecondFruit(fruits);
console.log("Source Array Payload:", fruits);
console.log("Returned Second Fruit Element (Index 1) =>", result);