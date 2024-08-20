function findVowels(inputString) {
    
    const vowels = 'aeiouAEIOU';
    
    let foundVowels = [];

    
    for (let char of inputString) {
        
        if (vowels.includes(char)) {
            foundVowels.push(char);
        }
    }

    
    return foundVowels;
}


const userInput = prompt("Enter a string:"); 
const vowelsInString = findVowels(userInput);

console.log("Vowels in the string:", vowelsInString);