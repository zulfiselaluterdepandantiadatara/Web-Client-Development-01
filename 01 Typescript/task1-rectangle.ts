/**
 * Calculate the area of a rectangle.
 * @param {number} length - The length of the rectangle (constant).
 * @param {number} width - The width of the rectangle (constant).
 * @returns {number} The area of the rectangle.
 */
function calculateRectangleArea(length: number, width: number): number {
    if (typeof length !== "number" || typeof width !== "number") {
        throw new Error("Length and width must be numbers.");
    }
    return length * width;
}

// Example usage
const length: number = 5; // Use `const` because the value doesn't change
const width: number = 3;
console.log(`Task 1: Rectangle Area = ${calculateRectangleArea(length, width)}`);