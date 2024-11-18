# Grundläggande koncept och begrepp om funktioner i Node.js:
Funktioner är en viktig del av att organisera och strukturera din kod och gör det möjligt att återanvända och underhålla den på ett effektivt sätt.

### Funktioner är block av kod:

I Node.js, precis som i JavaScript, är en funktion en grundläggande byggsten som används för att gruppera och organisera kod.
Funktioner är block av kod som utför en viss uppgift när de anropas.

Exempel:


    function sayHello() {
        console.log("Hej från funktionen!");
    }

    // Anropa funktionen
    sayHello(); // Output: Hej från funktionen!

### Funktioner tar emot argument:

Funktioner kan ta emot argument (parametrar) som används inuti funktionen.
Argumenten gör funktionen mer flexibel genom att tillåta olika värden att skickas in och bearbetas.

Exempel:


    function greet(name) {
        console.log("Hej, " + name + "!");
    }

    greet("Alice"); // Output: Hej, Alice!

### Funktioner returnerar värden:

Funktioner kan returnera ett värde efter att de har utfört sin uppgift.
Det returnerade värdet kan användas eller sparas för senare användning.

Exempel:


    function add(a, b) {
        return a + b;
    }

    const sum = add(3, 5);
    console.log("Summan är: " + sum); // Output: Summan är: 8

### Lokala variabler och scope:

Variabler deklarerade inuti en funktion är "lokal" för den funktionen och är inte tillgängliga utanför den.
Detta skapar en "scope" för variabler, vilket undviker konflikter med variabler i globalt scope.

Exempel:

    function calculateArea(radius) {
        const pi = 3.14159; // Lokal variabel
        const area = pi * radius * radius;
        return area;
    }

    const circleArea = calculateArea(5);
    console.log("Cirkelns area är: " + circleArea); // Output: Cirkelns area är: 78.53975
    // area (och pi) är inte tillgänglig här


___

*Nedan innehåll är att betrakta som 'extra material'. Anonyma funktioner, callbacks, arrow och closures är alla koncept som ligger lite grand utöver 'vanliga' funktioner.*
*Med det sagt - koncentrera dig på innhållet ovan, eftersom det är viktigast, och ta sedan och läs innehållet här nedanför (för kännedom).*

### Anonyma funktioner:

Det är möjligt att definiera och använda funktioner utan att ge dem ett namn, så kallade anonyma funktioner.

Exempel:

    const greet = function(name) {
        console.log("Hej, " + name + "!");
    };

    greet("Bob"); // Output: Hej, Bob!

### Callback-funktioner:

En callback-funktion är en funktion som skickas som argument till en annan funktion och kan anropas vid behov.
Callback-funktioner används ofta för asynkron kod, som hantering av filinläsning eller nätverksanrop.

Exempel:

    function processUserData(userData, callback) {
        // Bearbeta användardata
        const processedData = "Bearbetad data: " + userData;
        
        // Anropa callback-funktionen med resultatet
        callback(processedData);
    }

    function displayResult(result) {
        console.log(result);
    }

    processUserData("Alice", displayResult);
    // Output: Bearbetad data: Alice

### Arrow-funktioner 
(även kända som "fat arrow"-funktioner) är en feature i JavaScript och Node.js som ger en kortare och mer läsbar metod att definiera funktioner. De är särskilt användbara när du behöver en enkel funktion. 

Syntax för Arrow-funktioner:
Arrow-funktioner har en kortare syntax jämfört med vanliga funktioner. Syntaxen är: (parametrar) => uttryck.

Om funktionen har en enda parameter kan du utelämna parenteserna runt parametern.

Exempel:

    const greet = name => {
        console.log(`Hej, ${name}!`);
    };

    greet("Alice"); // Output: Hej, Alice!

Om funktionen utför en enkel uppgift eller har en enkel return-sats kan du använda den kortaste formen av en arrow-funktion.

Exempel:

    const add = (a, b) => a + b;

    const result = add(3, 5);
    console.log(`Summan är: ${result}`); // Output: Summan är: 8

Om funktionen inte tar några parametrar, måste du använda tomma parenteser ().

Exempel:

    const sayHello = () => {
        console.log("Hej från arrow-funktion!");
    };

    sayHello(); // Output: Hej från arrow-funktion!

Om funktionen bara returnerar ett objekt, måste du använda parenteser runt objektet för att undvika att det tolkas som en blockkropp.

Exempel:

    const createPerson = (name, age) => ({ name, age });

    const person = createPerson("Alice", 30);
    console.log(person); // Output: { name: 'Alice', age: 30 }

Arrow-funktioner har en mer kompakt syntax jämfört med vanliga funktioner och de delar även sitt scope (this) med den omgivande koden, vilket kan vara användbart i vissa situationer. Men notera att de inte passar för alla scenarier, särskilt när du behöver använda this på ett mer komplext sätt.

Använd arrow-funktioner när de passar för uppgiften och gör koden mer läsbar och kompakt, men använd vanliga funktioner när du behöver mer kontroll över this eller när du behöver blocks med flera satser.

### Closures 

En "closure" är ett koncept i JavaScript och Node.js som handlar om hur funktioner behåller tillgång till sina omgivande variabler även efter att de har avslutats. Closures är kraftfulla och används ofta för att skapa "privat scope" och skapa funktioner med "minnesförmåga". 

Exempel: 

Anta att vi har en funktion som skapar och returnerar en inre funktion. Den inre funktionen har tillgång till variabeln message, som har ett omgivande scope i den yttre funktionen.

    function outerFunction() {
        const message = 'Hej från outerFunction!';

        function innerFunction() {
            console.log(message);
        }

        return innerFunction;
    }

    const closureExample = outerFunction(); // Här skapas en "closure"
    closureExample(); // När du anropar closureExample, skriver det ut "Hej från outerFunction!"

I detta exempel är innerFunction en inre funktion som skapas inuti outerFunction. När outerFunction körs och innerFunction returneras, bildas en "closure". Det innebär att innerFunction har tillgång till variabeln message, även om outerFunction har avslutats.

När vi senare anropar closureExample, utför den inre funktionen innerFunction fortfarande console.log(message) och skriver ut "Hej från outerFunction!" till konsolen, även om outerFunction redan har avslutats. Detta beror på att innerFunction har en "closure" som behåller referensen till message.


Closures är användbara i olika sammanhang:

Skapa privat "scope": Du kan använda closures för att skapa privata variabler och funktioner som inte är tillgängliga utanför en viss funktion.

Callback-funktioner: Många callback-funktioner i Node.js använder closures för att hålla och använda data från det omgivande omfånget.

Hantering av asynkronitet: Closures är användbara när du arbetar med asynkron kod eftersom de låter dig behålla tillgång till relevanta variabler även när de yttre funktionerna har avslutats.

Skapa "factory functions": Closures kan användas för att skapa factory functions som genererar anpassade funktioner med specifika parametrar.

Closures är en viktig del av JavaScript och kan vara mycket kraftfulla när de används på rätt sätt. De hjälper till att skapa mer modulär och återanvändbar kod.

---

# Övningar funktioner

### Övning 1: Skapa en Funktion
Skriv en funktion som tar två tal som argument och returnerar deras summa.

### Övning 2: Anonyma Funktioner
Skriv en anonym funktion som tar ett namn som argument och skriver ut en hälsningsfras med namnet.

### Övning 3: Återanvändbarhet
Skriv en funktion som tar en radie som argument och returnerar omkretsen av en cirkel med den radien.

### Övning 4: Argument Objekt
Skriv en funktion som tar ett okänt antal argument och returnerar deras summa.

### Övning 5: Scope
Skriv en funktion som deklarerar en variabel inuti sig och försök att komma åt den variabeln utanför funktionen. Förklara varför detta inte fungerar.

### Övning 6: Callback-funktioner
Skriv en funktion doSomething som tar en callback-funktion som argument och anropar den med en hälsning som parameter.

### Övning 7: Funktioner som Returnerar Funktioner
Skriv en funktion greet som tar ett språk som argument och returnerar en funktion som hälsar på användaren på det språket.

### Övning 8: Rekursion
Skriv en rekursiv funktion som beräknar det n:te Fibonacci-talet.
Se t ex här för mer information om Fibonacci: https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/

### Övning 9: Closures
Skriv en funktion counter som returnerar en funktion. Den returnerade funktionen ska räkna upp varje gång den anropas och returnera det aktuella räknevärde.

### Övning 10: Arrow-funktioner
Konvertera några av dina tidigare funktioner till arrow-funktioner och använd dem i ditt program.

