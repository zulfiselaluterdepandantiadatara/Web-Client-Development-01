/**
 * Get uppercase initials from a full name.
 * @param {string} name - The full name (constant).
 * @returns {string} The uppercase initials.
 */
function getInitials(name: string): string {
    if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Name must be a non-empty string.");
    }
    return name
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");
}

// Example usage
const fullName: string = "John Doe";
console.log(`Task 5: Name Initials = ${getInitials(fullName)}`);