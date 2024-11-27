# Moduler i node
används för att organisera och återanvända kod. Moduler är små enheter av kod som innehåller funktioner, objekt eller variabler och som kan exporteras och återanvändas i andra delar av din applikation. De hjälper till att hålla koden organiserad och strukturerad. 
Moduler gör det alltså möjligt att organisera och återanvända kod på ett strukturerat sätt, vilket är särskilt värdefullt när du bygger komplexa applikationer. node erbjuder också inbyggda moduler och möjligheten att skapa egna anpassade moduler för att passa dina specifika behov.


Exempel 1: Skapa en Enkel Modul

Anta att du vill skapa en enkel modul som räknar summan av två tal. Först måste du skapa en modulfil (till exempel summa.js) med följande innehåll:
```javascript
// summa.js

// En enkel funktion som räknar summan av två tal
function add(a, b) {
    return a + b;
}

// Exportera funktionen så att den kan användas i andra filer
module.exports = add;
```

I detta exempel har vi definierat en funktion add i modulen summa.js och exporterat den med hjälp av module.exports. Nu kan vi använda denna modul i en annan fil.

Exempel 2: Använda den Skapade Modulen

Nu kan vi använda den skapade modulen (summa.js) i en annan fil (till exempel main.js):
```javascript
// main.js

// Importera modulen
const addFunction = require('./summa');

// Använd den importerade funktionen
const sum = addFunction(5, 3);
console.log(`Summan är: ${sum}`); // Output: Summan är: 8
```

Här importerar vi summa.js-modulen med require och använder funktionen från modulen för att räkna ut summan av två tal. Modulerna laddas bara en gång, så du kan använda dem i flera delar av din applikation.


### Exempel: Dela Upp En Stor Modul

I större projekt är det bra att dela upp en stor modul i flera mindre moduler för att förbättra läsbarheten och underhållbarheten. Anta att du har en modul som hanterar användarautentisering. Du kan dela upp den i mindre delmoduler för att hantera olika aspekter av autentiseringen, som att generera JWT-token och verifiera lösenord. Här är ett förenklat exempel:

```javascript
// auth.js (huvudmodul)
const generateToken = require('./generateToken');
const verifyPassword = require('./verifyPassword');

// Använd funktioner från de importerade delmodulerna
const token = generateToken(user);
const isValidPassword = verifyPassword(userInput, user.password);
```

### Exempel: Använda Tredjepartsmoduler

node har ett rikt ekosystem av tredjepartsmoduler som du kan använda i dina projekt. Du kan installera och använda dessa moduler med hjälp av Node.js npm-paketverktyg. Här är ett exempel där vi använder 'axios', en populär HTTP-klient, för att göra en GET-förfrågan till en extern API:

```javascript
// Installera axios med npm (npm install axios)
const axios = require('axios');

// Gör en GET-förfrågan till en extern API
axios.get('https://api.example.com/data')
    .then((response) => {
        console.log('Svar från API:', response.data);
    })
    .catch((error) => {
        console.error('Fel vid förfrågan till API:', error);
    });
```

### Exempel: Skapa Egen Modul med Klasser

Du kan också skapa moduler som innehåller klasser. Här är ett exempel där vi skapar en modul person.js som innehåller en Person-klass:

```javascript
// person.js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hej, jag heter ${this.name} och är ${this.age} år gammal.`);
    }
}

module.exports = Person;
```

I en annan fil kan du sedan använda klassen från modulen:

```javascript
// Använd Person-klassen från person.js
const Person = require('./person');

const alice = new Person('Alice', 30);
alice.greet(); // Output: Hej, jag heter Alice och är 30 år gammal.
```

### Exempel med flera exports i samma fil
Ett litet exempel i vilken vi har flera funktioner som vill vill exportera:

mathFunctions.js:

```javascript
// Exportera flera funktioner från samma fil

// Funktion för att räkna ut summan av två tal
function add(a, b) {
    return a + b;
}

// Funktion för att räkna ut produkten av två tal
function multiply(a, b) {
    return a * b;
}

// Exportera funktionerna så att de kan användas i andra filer
module.exports = {
    add,
    multiply
};
```

I detta exempel har vi en modul mathFunctions.js som innehåller två funktioner, add och multiply. Istället för att exportera dem en i taget har vi använt objektnotationen för att exportera båda funktionerna som egenskaper i ett objekt - därav curly braces { } i vilken funktionerna listas. 
Nu kan vi använda detta objekt för att komma åt funktionerna från en annan fil.

main.js:

```javascript
// Importera funktionerna från mathFunctions.js
const mathFunctions = require('./mathFunctions');

// Använd de importerade funktionerna
const sum = mathFunctions.add(5, 3);
console.log(`Summan är: ${sum}`); // Output: Summan är: 8

const product = mathFunctions.multiply(4, 6);
console.log(`Produkten är: ${product}`); // Output: Produkten är: 24
```

I main.js har vi importerat mathFunctions.js och använt objektet mathFunctions för att komma åt och använda både add och multiply-funktionerna från modulen. Detta gör det möjligt att exportera och använda flera funktioner från samma fil.

### Ytterligare exempel med export och import
För sakens skull så tar vi ytterligare exempel.
Denna gång för att också visa att man även kan exportera enstaka variabler.

```javascript
// Exportera variabler och funktioner från en modul

// En variabel
const message = "Hej från modulen!";

// En funktion
function doubleNumber(num) {
    return num * 2;
}

// Exportera variabeln och funktionen så att de kan användas i andra filer
module.exports = {
    message,
    doubleNumber
};
```

I detta exempel exporterar vi både variabeln message och funktionen doubleNumber som egenskaper i ett objekt med hjälp av module.exports.

Nu importerar vi ->
main.js:

```javascript
// Importera variabler och funktioner från exempelModul.js
const { message, doubleNumber } = require('./exempelModul');

// Använd de importerade variablerna och funktionen
console.log(message); // Output: Hej från modulen!

const result = doubleNumber(5);
console.log(`Dubbelt värdet är: ${result}`); // Output: Dubbelt värdet är: 10
```

I main.js importerar vi både variabeln message och funktionen doubleNumber från exempelModul.js med hjälp av objektnotationen. Sedan använder vi de importerade variablerna och funktionen i vår huvudapplikation.

Detta visar hur du kan exportera både variabler och funktioner från en modul i Node.js och sedan importera och använda dem i en annan fil. Detta möjliggör återanvändning av kod och organisering av din kod i separata moduler för bättre struktur.


### Importera moduler i en mapp-struktur
Låt oss säga att du har följande mapp-struktur i ditt projekt:

    projektmapp/
    |- modulA.js
    |- modulB.js
    |- mapp1/
    |    |- fil1.js
    |
    |- mapp2/
        |- fil2.js

Om du vill importera modulA.js i fil1.js och samtidigt importera modulB.js i fil2.js, skulle du använda relativ sökväg som följande:

    

projektmapp/mapp1/fil1.js (inuti fil1.js skriver du alltså):
  
    const modulA = require('../modulA'); // Går upp en nivå till projektmapp/
    console.log(modulA.someFunction());

projektmapp/mapp2/fil2.js (inuti fil2.js skriver du):

    const modulB = require('../modulB'); // Går upp en nivå till projektmapp/
    console.log(modulB.anotherFunction());

förklaringar:

    .. - används för att gå upp en nivå i mappstrukturen.
    require('../modulA') - importerar modulA.js från projektets rotmapp till fil1.js.
    require('../modulB') - importerar modulB.js från projektets rotmapp till fil2.js.

Så, genom att använda relativ sökväg och gå upp och ner i mappstrukturen, kan du importera filer från olika mappar i ditt Node.js-projekt. Detta gör det möjligt att organisera och återanvända kod effektivt, även när den är organiserad i flera olika mappar.



# Övningar

### Övning 1: Skapa en Modul för Grundläggande Beräkningar

Skapa en modul som innehåller funktioner för grundläggande beräkningar som addition, subtraktion, multiplikation och division. Exportera dessa funktioner och använd dem i en huvudfil.
Kopiera nedan kod i en fil som du döper till mathFunctions.js och lägg till så att funktionerna "exporteras".
Importera och använd funktionerna i en fil du döper till main.js

mathFunctions.js:

```javascript
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
```

### Övning 2: Skapa en Modul för Enkla Textoperationer

Skapa en modul som innehåller funktioner för enkla textoperationer som att omvandla en sträng till versaler och omvandla en sträng till gemener. Exportera dessa funktioner och använd dem i en huvudfil.
Använd nedan kod.
Importera och använd funktionerna i en fil du döper till main.js

textOperations.js:

```javascript
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
```
