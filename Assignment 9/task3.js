// QUESTION 03: Push and Pop Operational Controller
function modifyArrayPipeline(sourceArray, newElement) {
    console.log("Initial State Array Vector:", sourceArray);
    
    // Step 1: Appending element to the extreme end bounds
    sourceArray.push(newElement);
    console.log(`After .push('${newElement}'):`, sourceArray);
    
    // Step 2: Extracting and removing the last index token
    let poppedItem = sourceArray.pop();
    console.log(`After .pop() [Removed '${poppedItem}']:`, sourceArray);
    
    return sourceArray;
}

// Execution
const baseData = ["X", "Y", "Z"];
const finalArray = modifyArrayPipeline(baseData, "W");
console.log("Final Returned Modified Array:", finalArray);