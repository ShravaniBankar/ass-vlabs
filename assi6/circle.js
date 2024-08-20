function calculateCircleArea(radius) {
    if (radius <= 0) {
        throw new Error("Radius must be a positive number.");
    }
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}


const radius = 5; 
console.log("Area of the circle with radius", radius, "is", calculateCircleArea(radius));