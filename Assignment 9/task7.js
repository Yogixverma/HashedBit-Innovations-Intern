// QUESTION 07: Area Calculations Function Using Object Argument Attributes
function computeRectangleArea(rectangleDimensions) {
    // Math formula execution matrix: Width * Height
    return rectangleDimensions.width * rectangleDimensions.height;
}

// Target Dimensions Passing Block
const rectangle = {
    width: 12,
    height: 5
};

// Execution
const calculatedArea = computeRectangleArea(rectangle);
console.log(`Rectangle Targets Map: Width=${rectangle.width}, Height=${rectangle.height}`);
console.log("Mathematically Computed Output Area =>", calculatedArea);