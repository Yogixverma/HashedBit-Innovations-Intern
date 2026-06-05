// QUESTION 08: Native Object.keys Structure Vector Array Extractor
function extractObjectKeysVector(targetDataModel) {
    return Object.keys(targetDataModel);
}

// Dummy Structural Architecture Object Properties
const academicProfile = {
    rollNumber: "24UADS1059",
    university: "MBM University",
    branch: "Data Science",
    city: "Jodhpur"
};

// Execution Tracker
const mappedKeysArray = extractObjectKeysVector(academicProfile);
console.log("Target Object Blueprints Profile Struct:\n", academicProfile);
console.log("\nReturned Output Array of Keys Vector:\n", mappedKeysArray);