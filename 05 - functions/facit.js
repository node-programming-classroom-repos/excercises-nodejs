//Övning 1: Skapa en Funktion

function add(a, b) {
    return a + b;
}

//Övning 2: Anonyma Funktioner

const greeting = function (name) {
    console.log('Hej, ' + name + '!');
};

//Övning 3: Återanvändbarhet

function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

//Övning 4: Argument Objekt

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

//Övning 5: Scope
//Försök att komma åt x här kommer att resultera i ett fel.
function scopeDemo() {
    let x = 10;
    console.log(x);
}


//Övning 6: Callback-funktioner

function doSomething(callback) {
    const message = 'Hej från doSomething!';
    callback(message);
}

function printMessage(message) {
    console.log(message);
}

doSomething(printMessage);

//Övning 7: Funktioner som Returnerar Funktioner

function greet(language) {
    return function (name) {
        if (language === 'svenska') {
            console.log('Hej, ' + name + '!');
        } else if (language === 'english') {
            console.log('Hello, ' + name + '!');
        }
    };
}

const greetSwedish = greet('svenska');
const greetEnglish = greet('english');
greetSwedish('Alice');
greetEnglish('Bob');

//Övning 8: Rekursion

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//Övning 9: Closures

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log('Räknare: ' + count);
    };
}

const increment = counter();
increment(); // Räknare: 1
increment(); // Räknare: 2

/**
Övning 10: Arrow-funktioner
I övning 10, konvertera funktionerna till arrow-funktioner enligt ditt val.
*/