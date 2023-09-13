# Grundläggande koncept och begrepp om funktioner i Node.js:
Funktioner är en viktig del av att organisera och strukturera din kod och gör det möjligt att återanvända och underhålla den på ett effektivt sätt.

1. Funktioner är block av kod:

    I Node.js, precis som i JavaScript, är en funktion en grundläggande byggsten som används för att gruppera och organisera kod.
    Funktioner är block av kod som utför en viss uppgift när de anropas.

Exempel:


    function sayHello() {
        console.log("Hej från funktionen!");
    }

    // Anropa funktionen
    sayHello(); // Output: Hej från funktionen!

2. Funktioner tar emot argument:

    Funktioner kan ta emot argument (parametrar) som används inuti funktionen.
    Argumenten gör funktionen mer flexibel genom att tillåta olika värden att skickas in och bearbetas.

Exempel:


    function greet(name) {
        console.log("Hej, " + name + "!");
    }

    greet("Alice"); // Output: Hej, Alice!

3. Funktioner returnerar värden:

    Funktioner kan returnera ett värde efter att de har utfört sin uppgift.
    Det returnerade värdet kan användas eller sparas för senare användning.

Exempel:


    function add(a, b) {
        return a + b;
    }

    const sum = add(3, 5);
    console.log("Summan är: " + sum); // Output: Summan är: 8

4. Lokala variabler och scope:

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
    // pi är inte tillgänglig här

5. Anonyma funktioner:

    Det är möjligt att definiera och använda funktioner utan att ge dem ett namn, så kallade anonyma funktioner.

Exempel:

    const greet = function(name) {
        console.log("Hej, " + name + "!");
    };

    greet("Bob"); // Output: Hej, Bob!

6. Callback-funktioner:

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

### Övning 9: Closures
Skriv en funktion counter som returnerar en funktion. Den returnerade funktionen ska räkna upp varje gång den anropas och returnera det aktuella räknevärde.

### Övning 10: Arrow-funktioner
Konvertera några av dina tidigare funktioner till arrow-funktioner och använd dem i ditt program.

