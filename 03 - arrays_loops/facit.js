//Övning 1: Skapa en Array

let colors = ['röd', 'blå', 'grön'];
console.log(colors);

//Övning 2: Hämta Element från en Array

let secondColor = colors[1];
console.log(secondColor);

//Övning 3: Lägga till Element i en Array

colors.push('gul');
console.log(colors);

//Övning 4: Ta bort Element från en Array


colors.shift();
console.log(colors);

//Övning 5: Längd av en Array

let numberOfColors = colors.length;
console.log('Antal färger i arrayen: ' + numberOfColors);

//Övning 6: Loopa med for-loop

for (let i = 0; i < colors.length; i++) {
    console.log('Färg ' + (i + 1) + ': ' + colors[i]);
}

//Övning 7: Loopa med for...of

for (let color of colors) {
    console.log('Färg: ' + color);
}

//Övning 8: Loopa med while-loop

let i = 0;
while (i < colors.length) {
    console.log('Färg ' + (i + 1) + ': ' + colors[i]);
    i++;
}

//Övning 9: Sök i en Array

if (colors.includes('grön')) {
    console.log('Grön finns i arrayen.');
} else {
    console.log('Grön finns inte i arrayen.');
}

//Övning 10: Skapa en tom Array

let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);

//Övning 11: Summa av Element i en Array

let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log('Summan av talen i arrayen är: ' + sum);

//Övning 12: Dubblera Element i en Array

let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log('Dubblade tal i arrayen: ' + doubledNumbers);

//Övning 13: Filtera Element i en Array

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log('Jämna tal i arrayen: ' + evenNumbers);

//Övning 14: Använd forEach

numbers.forEach(function(number) {
    console.log('Tal: ' + number);
});

//Övning 15: Använd map

let uppercaseColors = colors.map(function(color) {
    return color.toUpperCase();
});
console.log('Färger i versaler: ' + uppercaseColors);

//Övning 16: Använd filter

let shortWords = colors.filter(function(color) {
    return color.length < 5;
});
console.log('Färger med färre än 5 bokstäver: ' + shortWords);

//Övning 17: Använd reduce

let sumOfNumbers = numbers.reduce(function(acc, current) {
    return acc + current;
}, 0);
console.log('Summan av talen i arrayen är: ' + sumOfNumbers);

//Övning 18: Använd includes

if (colors.includes('svart')) {
    console.log('Svart finns i arrayen.');
} else {
    console.log('Svart finns inte i arrayen.');
}

//Övning 19: Kombinera Arrayer


let combinedArray = colors.concat(numbers);
console.log('Kombinerad array: ' + combinedArray);

//Övning 20: Skapa en Multi-Dimensionell Array


let multiDimensionalArray = [
    ['röd', 'blå', 'grön'],
    ['svart', 'vit', 'grå'],
    ['gul', 'orange', 'brun']
];
console.log('En färg från den multi-dimensionella arrayen: ' + multiDimensionalArray[1][2]);
