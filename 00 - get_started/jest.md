## Om Testning - vad är testning?

Först och främst - i kursens uppgifter behöver du ha kännedom om testraamverket "Jest".
Om din uppgift klarar testet så uppfyller den alla krav och du kan få bedömningen godkänt.
Längst ned visas hur du kommer igång med Jest, men först lite teori om begreppet "Testning" i vilket Jest ingår.

 

Testning är en process inom systemutveckling som hjälper till att förbättra kodens kvalitet, underlätta buggfixning och gör det möjligt att göra ändringar i koden med ökad säkerhet. Det är en central del av utvecklingsprocessen och hjälper till att skapa pålitlig och robust programvara.
För node finns det ett flertal olika ramverk som hjälper till med just testning och underlättar testning av källkoden.
Ett av de största ramverken är Jest.

Se Jest:s webbplats: Jest - Delightful JavaScript Testing

Links to an external site..

Jest är som sagt ett populärt testramverk som används för att skapa och köra tester i nodeprojekt. Jest erbjuder en omfattande uppsättning verktyg och funktioner som gör det enkelt att skriva och köra tester för din källkod. Det är utvecklat och underhållet av Facebook och är särskilt vanligt i samband med React-projekt, men det kan användas för att testa kod i olika projekt och miljöer.

Några av de funktioner som Jest erbjuder:

    Automatisk upptäckt av tester: Jest kan automatiskt upptäcka testfiler baserat på en konventionell mappstruktur.

    Inbyggda assertions och förväntade resultat: Jest innehåller en mängd inbyggda assertions och förväntade resultat som gör det enkelt att verifiera att din kod fungerar som förväntat.

    Mocking och tracing: Jest gör det enkelt att skapa och använda mockobjekt för att testa kod som har externa beroenden, som API-anrop eller databasinteraktioner.

    Snapshottesting: Jest möjliggör snapshottestning, vilket innebär att du kan spara en "snäppbild" av koden och sedan jämföra den med senare versioner för att upptäcka förändringar.

    Paralleliserade tester: Jest kan köra tester parallellt för att spara tid och öka prestanda.

Testning är alltså en process där du systematiskt utvärderar och verifierar att din källkod fungerar som den är  tänkt att göra. Testning används för att upptäcka och förebygga buggar och fel i din kod och helt enkelt säkerställa att din programvara är stabil. Det finns olika typer av tester, inklusive enhetstester, integrationstester och acceptanstester.

    Unit tester: Enhetstester fokuserar på att testa enskilda komponenter eller funktioner av din programvara. De syftar till att säkerställa att varje del av koden fungerar korrekt.

    Integration tester: Integrationstester testar hur olika komponenter i din programvara samverkar med varandra. De är användbara för att upptäcka problem som kan uppstå när olika delar av koden kommunicerar.

    Acceptance tester: Acceptanstester testar din programvara ur användarens perspektiv och verifierar att den uppfyller de specifikationer och krav som ställs på den.

 
## Använda och komma igång med Jest

Det finns flera sätt att komma igång med Jest. Nedan beskriver jag två sätt att konfigurera och använda Jest i ditt projekt.

### Ett exempel med package.json:

1. Skapa en mapp för ditt projekt och navigera till den i terminalen eller öppna en terminal med VSC.
Notera att om du redan gjort ett node-projekt med "npm init", så har du redan en package.json.

kör följande kommando för att skapa en ny node-projektmapp med en package.json-fil:


    $ npm init -y

Installera Jest genom att köra följande kommando:


    $ npm install --save-dev jest

 

2. Lägg till en test-skript i din package.json-fil. Öppna package.json i VSC och uppdatera  så att det ser ut så här:



    ```
   {
       "name": "mitt-projekt",
   
        "version": "1.0.0",
   
        "description": "Beskrivning av mitt projekt",
   
       "main": "index.js",
   
       "scripts": {
   
                            "test": "jest"
   
       },
   
     "devDependencies": {
   
           "jest": "^27.0.6"
   
        }
   
    }
   ```

 

4. Skapa en enkel JavaScript-fil som innehåller den funktion du vill testa. Till exempel kan du s
skapa en fil som heter mathFunctions.js:


      ```
      function add(a, b) {
        return a + b;
      }
      module.exports = { add, };
      ```
 

5. Skapa en testfil som innehåller dina Jest-test. Skapa en fil som heter mathFunctions.test.js:

    ```
      const { add } = require('./mathFunctions');
      test('adds 1 + 2 to equal 3', () => {
         expect(add(1, 2)).toBe(3);
      });
    ```

6. Nu kan du köra dina tester genom att använda följande kommando:


      $ npm test


Detta kommer att köra ditt tester med Jest. Du borde se att ditt test passerar och att resultatet är något i stil med "Test Suites: 1 passed".


### Ett exempel med en jest.config.js

Skapa en mapp för ditt projekt och navigera till den i terminalen eller öppna en terminal i mappen med VSC.
Kör följande kommando för att skapa ett projekt med en package.json-fil


    $ npm init -y

2. Installera Jest genom att köra följande kommando:


      $ npm install --save-dev jest

3. Skapa exakt samma filer som i exemplet ovan (mathFunctions.js och mathFunctions.test.js ovan).
4. Skapa en jest.config.js-fil i rotmappen för testet:


    ```
      module.exports = {
        testEnvironment: 'node',
      };
    ```


5. Nu kan du köra dina tester genom att använda följande kommando:


      $ npx jest


Ditt test körs och resultatet blir något i stil med "Test Suites: 1 passed".
