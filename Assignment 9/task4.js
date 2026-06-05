// QUESTION 04: Map Method Squared Numbers Generator
function computeSquaresMap(numbersStream) {
    // array.map execution creates a new structural array layout
    return numbersStream.map(num => num * num);
}

// Execution Data Vectors
const baseNumbers = [2, 3, 4, 5, 10];
const squaredResults = computeSquaresMap(baseNumbers);

console.log("Source Integer Vectors Array:", baseNumbers);
console.log("Mapped Squared Values Output  :", squaredResults);