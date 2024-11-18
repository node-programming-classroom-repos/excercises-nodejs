# Input/Output (I/O) i node:

Input/Output (I/O) i nodes hänvisar till hur programmet hanterar inmatning (input) och utmatning (output). nodes har inbyggda funktioner för att interagera med filsystemet, läsa användarinmatning från konsolen och kommunicera med nätverket. 
Dessa funktioner är till för att bygga robusta och interaktiva program.

Här är några grundläggande I/O-aspekter i Node.js:

**Läsning från termkinalen/konsolen:**
Du kan använda **readline** eller t ex process.stdin för att läsa användarinmatning från konsolen. Detta är användbart för att skapa interaktiva kommandoradsgränssnitt.

Readline jämfört med process.stdin är smidigare eftersom process.stdin är mer low level.

Några exempel med readline:


```javascript
// Importera readline-modulen
const readline = require('readline');

// Skapa en readline-interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fråga efter användarens namn
rl.question('Vad heter du? ', (namn) => {
    // Fråga efter användarens ålder
    rl.question('Hur gammal är du? ', (ålder) => {
        // Skriv ut hälsning
        console.log(`Hej ${namn}, du är ${ålder} år gammal.`);
        
        // Stäng readline-interface
        rl.close();
    });
});
```

med en "loop", för kontinuerlig inmatning:

```javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Skriv något (skriv "exit" för att avsluta):');

rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        console.log('Avslutar programmet.');
        rl.close();
    } else {
        console.log(`Du skrev: ${input}`);
    }
});
```

**console.log:**
Du har förmodligen redan sett och använder **console.log()** för att skriva ut meddelanden och resultat till konsolen. Detta hjälper dig att diagnostisera problem och ge feedback till användaren.

Tipset är alltså att använda console-log för en enkel testning och felhantering för att t ex kontinuerligt skriva ut värden på variabler och annat.

**Läsning och skrivning till filer:**

node har funktioner som fs.readFile() och fs.writeFile() för att läsa och skriva data till filer. Detta är användbart för att lagra och bearbeta information på disk.

**Hantering av Asynkron I/O:**

node är särskilt bra på att hantera asynkron I/O-operationer. Detta innebär att programmet kan fortsätta köra andra uppgifter medan I/O-operationer pågår, vilket gör det effektivt och snabbt.

---

## Övningsuppgifter för Input/Output i Node.js:

Här är några övningar som hjälper dig att träna på I/O i Node.js:

### Övning 1.1: Läs från Konsolen
Skriv ett program som frågar användaren efter deras namn och sedan skriver ut en hälsningsfras som "Hej, [Namn]!".

### Övning 1.2 Enkel Inmatning och Utmatning
Skriv ett program som frågar användaren efter sitt födelsedatum och räknar sedan ut och skriver ut deras ålder.

### Övning 1.3: Enkel Kalkylator
Skriv ett program som frågar användaren efter två tal och en operator (+, -, *, /) och utför sedan beräkningen och skriver ut resultatet.

### Övning 2: Skriv till en Fil
Skriv ett program som tar emot en text från användaren och sparar den i en textfil med ett specifikt namn.

### Övning 3: Läs från en Fil
Skriv ett program som läser innehållet i en textfil och skriver ut det på konsolen.

### Övning 4: Kopiera en Fil
Skriv ett program som kopierar innehållet från en befintlig textfil till en annan textfil.

### Övning 5: Lista Filer i en Katalog
Skriv ett program som listar alla filer i en specifik katalog på datorn.


