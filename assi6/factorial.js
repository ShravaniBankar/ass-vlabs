function factorial(n) {
    
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer.");
    }
    
    let result = 1;
    
   
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
}


const userInput = parseInt(prompt("Enter a non-negative integer:")); // Prompt user for input
try {
    const result = factorial(userInput);
    console.log("The factorial of", userInput, "is", result);
} catch (error) {
    console.error(error.message);
}