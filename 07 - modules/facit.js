//ÖVNING 1
//mathFunctions.js:

// Exportera funktioner för grundläggande beräkningar

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Det går inte att dela med noll.");
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};



//main.js:


// Importera funktionerna från mathFunctions.js
const math = require('./mathFunctions');

// Använd de importerade funktionerna
console.log(math.add(5, 3));      // Output: 8
console.log(math.subtract(8, 2)); // Output: 6
console.log(math.multiply(4, 3)); // Output: 12
console.log(math.divide(10, 2));  // Output: 5


//###########################################################
//############################################################
//ÖVNING 2
//textOperations.js:

// Exportera funktioner för enkla textoperationer

function toUpperCase(text) {
    return text.toUpperCase();
}

function toLowerCase(text) {
    return text.toLowerCase();
}

module.exports = {
    toUpperCase,
    toLowerCase
};

//main.js:


// Importera funktionerna från textOperations.js
const text = require('./textOperations');

// Använd de importerade funktionerna
console.log(text.toUpperCase('Hej!'));    // Output: HEJ!
console.log(text.toLowerCase('VÄRLDEN')); // Output: världen
