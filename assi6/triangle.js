// Function to calculate the area of a triangle given base and height
function calculateAreaBaseHeight(base, height) {
    return 0.5 * base * height;
}


const base = parseFloat(prompt("Enter the base of the triangle:"));
const height = parseFloat(prompt("Enter the height of the triangle:"));

const areaBaseHeight = calculateAreaBaseHeight(base, height);
console.log("The area of the triangle is ${areaBaseHeight}");