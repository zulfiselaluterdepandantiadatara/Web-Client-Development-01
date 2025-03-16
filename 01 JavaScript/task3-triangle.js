/**
 * Calculate the third angle of a triangle given two angles.
 * @param {number} a - The first angle of the triangle (constant).
 * @param {number} b - The second angle of the triangle (constant).
 * @returns {number} The third angle of the triangle.
 */
function calculateThirdAngle(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Angles must be numbers.");
    }
    if (a + b >= 180) {
        throw new Error("Sum of angles must be less than 180 degrees.");
    }
    return 180 - (a + b);
}

// Example usage
const angleA = 80;
const angleB = 65;
console.log(`Task 3: Third Angle = ${calculateThirdAngle(angleA, angleB)}`);