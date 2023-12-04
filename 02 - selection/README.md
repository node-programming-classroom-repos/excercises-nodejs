# Selektion
i Node.js och andra programmeringsspråk, är ett fundamentalt programmeringskoncept som låter dig styra programflödet baserat på olika villkor. Det låter dig göra beslut i ditt program och utföra olika handlingar beroende på om ett villkor är sant eller falskt. Selektion är nödvändigt för att skapa dynamiska och responsiva program.

I Node.js och JavaScript använder du ofta olika selektionsstrukturer för att uppnå detta:

If-satser: Den mest grundläggande selektionsstrukturen är if-satsen. Du uttrycker ett villkor som ska utvärderas. Om villkoret är sant, utförs viss kod, annars hoppas programmet över den koden eller utför en alternativ kodsnutt med hjälp av else-delen.

   

    if (villkor) {
        // Kod som körs om villkoret är sant
    } else {
        // Alternativ kod som körs om villkoret är falskt
    }

Else If: Om du har flera villkor att testa kan du använda else if efter det ursprungliga if-villkoret. Detta låter dig testa flera villkor i sekvens tills ett av dem är sant.


    if (villkor1) {
        // Kod som körs om villkor1 är sant
    } else if (villkor2) {
        // Kod som körs om villkor2 är sant (om villkor1 är falskt)
    } else {
        // Alternativ kod om inget villkor är sant
    }

Switch-satser: Om du har många möjliga värden att testa kan en switch-sats vara användbar. Du utvärderar en variabel och jämför dess värde med flera alternativ.


    switch (variabel) {
        case värde1:
            // Kod om variabel är lika med värde1
            break;
        case värde2:
            // Kod om variabel är lika med värde2
            break;
        default:
            // Kod om inget av ovanstående är sant
    }

Selektion är användbart för att skapa program som kan agera olika beroende på olika omständigheter. Det ger möjligheten att utföra olika uppgifter, hantera fel och fatta beslut baserat på data och användarinteraktion. I Node.js används selektion i kombination med andra programmeringskoncept som loopar, funktioner och objekt för att bygga kraftfulla och dynamiska program.


# 10 övningsuppgifter för att träna på selektion (villkor) i Node.js:

### Övning 1: Enkel If-sats
Skriv en enkel if-sats som kontrollerar om ett heltal x är större än 10. Om det är sant, skriv ut "x är större än 10" i terminalen.

### Övning 2: If-Else
Skriv en if-else-sats som kontrollerar om ett heltal y är jämnt eller udda. Om det är jämnt, skriv ut "y är ett jämnt tal", annars skriv ut "y är ett udda tal".

### Övning 3: Else-If
Skriv en if-else if-else-sats som kontrollerar om ett heltal z är positivt, negativt eller noll. Skriv ut motsvarande meddelande baserat på resultatet.

### Övning 4: Använd Ternära Operatorn
Använd den ternära operatorn (? :) för att kontrollera om ett heltal a är positivt eller negativt och skriv ut motsvarande meddelande.

### Övning 5: Logiska Operatorer
Skriv en if-sats som kontrollerar om två booleska variabler, isSunny och isWarm, är båda sanna. Om båda är sanna, skriv ut "Det är soligt och varmt!"

### Övning 6: Switch-sats
Använd en switch-sats för att kontrollera värdet på en variabel dayOfWeek och skriv ut motsvarande meddelande baserat på dagen (t.ex. "Måndag", "Tisdag", etc.).

### Övning 7: Använd break (Switch)
Använd en switch-sats med break för att kontrollera värdet på en variabel score och skriv ut betyget (A, B, C, etc.) baserat på poängen.

### Övning 8: Nestlade Villkor
Använd nestlade if-satser för att kontrollera om ett heltal age är under 18 år, mellan 18 och 65 år eller över 65 år. Skriv ut motsvarande meddelande.

### Övning 9: Använd Default (Switch)
Uppdatera övning 6 (switch-satsen) med en default-sektion som skriver ut "Okänt val" om dayOfWeek inte matchar något av de förväntade värdena.

### Övning 10: Använd Logiska Operatorer (Switch)
Uppdatera övning 6 (switch-satsen) så att den kontrollerar om dayOfWeek är antingen "Lördag" eller "Söndag" och skriver ut "Det är helg!" i så fall.

Du kan använda Visual Studio Code för att skapa en JavaScript-fil och testa dessa övningar. Använd console.log() för att skriva ut resultaten i terminalen när du kör filen med Node.js. Övningarna hjälper dig att förstå och träna på selektion och villkor i Node.js och stärka din förmåga att styra programflödet baserat på olika villkor. Lycka till!
