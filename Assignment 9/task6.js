// QUESTION 06: Object Greeting Message String Generator
function logGreetingMessage(personObject) {
    // Using modern template literals string interpolation injection
    return `Hello, my name is ${personObject.name}. I am ${personObject.age} years old and my occupation is ${personObject.occupation}.`;
}

// Custom Person Object Blueprint Setup
const person = {
    name: "Yogesh",
    age: 22,
    occupation: "Full-Stack Developer"
};

// Execution Trigger
const greetingLog = logGreetingMessage(person);
console.log("Object Configuration Base:\n", person);
console.log("\nExecution Output Message Mapping:\n", greetingLog);