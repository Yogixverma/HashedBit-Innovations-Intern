// QUESTION 05: Array Filter Out Even Elements (Isolate Odds)
function isolateOddsFilter(numbersArray) {
    // array.filter passes elements that return true to conditional test queries
    return numbersArray.filter(num => num % 2 !== 0);
}

// Execution Input Matrices
const mixedDataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersOutput = isolateOddsFilter(mixedDataset);

console.log("Original Input Mixed Numbers Set:", mixedDataset);
console.log("Filtered Output Array (Only Odds):", oddNumbersOutput);