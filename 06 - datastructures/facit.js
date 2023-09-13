//Övning 1: Arrays (Arrayer)
//Skapa en array med namn på dina favoritfärger och skriv ut den första färgen.


const favoriteColors = ['blå', 'röd', 'grön'];
console.log(favoriteColors[0]); // Output: blå

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

