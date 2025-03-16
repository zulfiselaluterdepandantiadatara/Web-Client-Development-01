/**
 * Calculate diameter, circumference, and area of a circle.
 * @param {number} radius - The radius of the circle (constant).
 * @returns {Object} An object containing diameter, circumference, and area.
 */
function calculateCircleProperties(radius: number): { diameter: number, circumference: number, area: number } {
    if (typeof radius !== "number" || radius <= 0) {
        throw new Error("Radius must be a positive number.");
    }
    const diameter: number = 2 * radius;
    const circumference: number = parseFloat((2 * Math.PI * radius).toFixed(4));
    const area: number = parseFloat((Math.PI * radius ** 2).toFixed(4));
    return { diameter, circumference, area };
}

// Example usage
const radius: number = 5;
const circleProps = calculateCircleProperties(radius);
console.log("Task 2: Circle Properties =", circleProps);