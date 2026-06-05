// QUESTION 09: Object.assign Method Merger Flow
function consolidateObjectsAssign(baseObj1, extendObj2) {
    // Creates a new empty target map pointer and copies items sequence over
    return Object.assign({}, baseObj1, extendObj2);
}

// Data Nodes Setup
const primaryIdentity = { name: "Yogi Verma", department: "Engineering" };
const serverStatus = { clearanceCode: "Delta-1", systemActive: true };

// Execution
const mergedOutputBlock = consolidateObjectsAssign(primaryIdentity, serverStatus);
console.log("Arguments Payload Object 1 Struct:", primaryIdentity);
console.log("Arguments Payload Object 2 Struct:", serverStatus);
console.log("\nConsolidated Final Merged Target Object Data:\n", mergedOutputBlock);