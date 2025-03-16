    /**
 * Calculate the difference in days between two dates.
 * @param {string} date1 - The first date in 'YYYY-MM-DD' format.
 * @param {string} date2 - The second date in 'YYYY-MM-DD' format.
 * @returns {number} The difference in days.
 */
function calculateDateDifference(date1: string, date2: string): number {
    const oneDayInMilliseconds: number = 24 * 60 * 60 * 1000; // Milliseconds in one day
    const firstDate: Date = new Date(date1);
    const secondDate: Date = new Date(date2);
    if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
        throw new Error("Invalid date format. Use 'YYYY-MM-DD'.");
    }
    const diffDays: number = Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDayInMilliseconds);
    return Math.floor(diffDays);
}

// Example usage
const date1: string = "2024-03-19";
const date2: string = "2024-03-21";
console.log(`Task 4: Date Difference = ${calculateDateDifference(date1, date2)}`);