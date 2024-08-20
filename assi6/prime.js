function isPrime(number) {
    
    if (number <= 1) {
        return false;
    }
   
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


const userInput = parseInt(prompt("Enter a number:")); 
const result = isPrime(userInput);

if (result) {
    console.log(userInput + " is a prime number.");
} else {
    console.log(userInput + " is not a prime number.");
}