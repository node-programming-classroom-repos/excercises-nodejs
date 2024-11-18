//Övning 1: Arrays (Arrayer)
//Skapa en array med namn på dina favoritfärger och skriv ut den första färgen.

//1.0
const favoriteColors = ['blå', 'röd', 'grön'];
console.log(favoriteColors[0]); // Output: blå

//1.1
let numbers = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); // Output: 30

//1.2
let words = ["apple", "banana", "kiwi", "strawberry"];
let longestWord = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log(longestWord); // Output: "strawberry"


//1.3
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    squaredNumbers.push(numbers[i] ** 2);
}

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


//1.4
let numbers = [10, 15, 20, 25, 30];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers); // Output: [10, 20, 30]

//1.5
let names = ["Alice", "Bob", "Charlie", "Diana"];

for (let i = 0; i < names.length; i++) {
    console.log(`Index ${i}: ${names[i]}`);
}

// Output:
// Index 0: Alice
// Index 1: Bob
// Index 2: Charlie
// Index 3: Diana


// Övning 2: Objekt (Objects)
//Skapa ett objekt som representerar din favoritbok med egenskaper som "titel", "författare" och "årtal".

const favoriteBook = {
    titel: 'Harry Potter and the Sorcerer\'s Stone',
    författare: 'J.K. Rowling',
    årtal: 1997
};
console.log(favoriteBook.titel); // Output: Harry Potter and the Sorcerer's Stone

// Övning 3: Listor (Lists)
//Skapa en lista som fungerar som en enkel kö och utför några grundläggande köoperationer.

const queue = [];
queue.push('kund1');
queue.push('kund2');
const servedCustomer = queue.shift();
console.log(servedCustomer); // Output: kund1

// Övning 4: Stackar (Stacks)
//Skapa en stack som fungerar som en historik för besökta webbsidor och utför några grundläggande stackoperationer.

const historyStack = [];
historyStack.push('google.com');
historyStack.push('facebook.com');
const lastVisitedPage = historyStack.pop();
console.log(lastVisitedPage); // Output: facebook.com

// Övning 5: Set (Mängder)
//Skapa ett set som innehåller unika sporter och försök lägga till en sport som redan finns.

const uniqueSports = new Set();
uniqueSports.add('fotboll');
uniqueSports.add('tennis');
uniqueSports.add('fotboll'); // Ignoreras eftersom fotboll redan finns
console.log(uniqueSports); // Output: Set { 'fotboll', 'tennis' }

// Övning 6: Map (Kartor)
//Skapa en karta som kopplar namnen på några länder till deras huvudstäder och hämta huvudstaden för ett specifikt land.

const countriesAndCapitals = new Map();
countriesAndCapitals.set('Sverige', 'Stockholm');
countriesAndCapitals.set('Frankrike', 'Paris');
const capitalOfSweden = countriesAndCapitals.get('Sverige');
console.log(capitalOfSweden); // Output: Stockholm

