function calculateSimpleInterest(principal, rate, time) {
    
    const simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}


const principal = parseFloat(prompt("Enter the principal amount:")); 
const rate = parseFloat(prompt("Enter the rate of interest (in %):")); 
const time = parseFloat(prompt("Enter the time period (in years):")); 

const interest = calculateSimpleInterest(principal, rate, time);

console.log("The simple interest for a principal amount of ${principal}, at an interest rate of ${rate}% over ${time} years is ${interest}.");