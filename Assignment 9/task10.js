// QUESTION 10: Array Accumulator Reduction Summation Pipeline
function sumElementsReduce(numericArrayVector) {
    // accumulator keeps aggregating the current items values linearly
    return numericArrayVector.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0); // 0 acts as the start base point
}

// Execution Stream Feed
const financialRecords = [10, 20, 30, 40, 50];
const accumulatedTotalSum = sumElementsReduce(financialRecords);

console.log("Linear Number Arrays Records Feed:", financialRecords);
console.log("Array.reduce() Total Final Summation Yield =>", accumulatedTotalSum);