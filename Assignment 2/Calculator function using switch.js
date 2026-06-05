function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

console.log(calculator(10, 5, "add"));       // 15
console.log(calculator(10, 5, "subtract"));  // 5
console.log(calculator(10, 5, "multiply"));  // 50
console.log(calculator(10, 5, "divide"));    // 2
