/**
 * Calculate the area of a rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} The area of the rectangle.
 */
function calculateRectangleArea(length, width) {
    // Check if inputs are valid numbers and positive
    if (typeof length !== "number" || typeof width !== "number" || length <= 0 || width <= 0) {
        throw new Error("Length and width must be positive numbers.");
    }
    
    return length * width;
}

// Example usage
const length = 5;
const width = 3;
console.log(`Rectangle Area = ${calculateRectangleArea(length, width)}`);