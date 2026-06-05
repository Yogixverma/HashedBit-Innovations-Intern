// QUESTION 01: Scope Engine Analysis Block
function demonstrateScopes() {
    // 1. Functional / Global Scope
    var functionScoped = "I am a standard var variable (Function Scoped).";
    
    if (true) {
        // 2. Block Scope Elements
        let blockScopedLet = "I am a let variable (Block Scoped).";
        const blockScopedConst = "I am a const variable (Block Scoped & Read-Only).";
        
        var nestedVar = "I am a var declared inside an 'if' block.";
        
        console.log("--- Inside Block {} ---");
        console.log(blockScopedLet);
        console.log(blockScopedConst);
    }
    
    console.log("\n--- Outside Block ---");
    console.log(functionScoped);
    console.log(nestedVar); // Accessible because var bypasses block scope!
    
    try {
        console.log(blockScopedLet); // This will crash because let is locked inside block!
    } catch (error) {
        console.log("Let Access Error: blockScopedLet is not defined outside.");
    }
}

// Execution Trigger
demonstrateScopes();