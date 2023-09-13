# Kom igång med nodejs

### Node.js 
(eller bara node) är en open source-plattform för att köra JavaScript utanför webbläsaren. Det är en populär plattform för att utveckla webbapplikationer, men kan också användas för att utveckla andra typer av applikationer, till exempel webbservrar, realtidschattprogram och spel.

Node.js har ett antal fördelar, bland annat:
Det är baserat på JavaScript, ett populärt och välkänt språk.
Det är skalbart och kan hantera stora mängder trafik.
Det är asynkront, vilket gör det effektivt för att hantera händelsedrivna interaktioner.

Node.js har också några nackdelar, bland annat:
Det kan vara svårt att lära sig, eftersom det är ett relativt nytt språk.
Det kan vara resurskrävande för vissa applikationer.

Här är några exempel på applikationer som går att göra i node:
Webbapplikationer: Node.js är ett populärt val för att utveckla webbapplikationer, eftersom det är snabbt, skalbart och enkelt att använda.
Webbservrar: Node.js kan användas för att skapa webbservrar som kan hantera stora mängder trafik.
Realtidschattprogram: Node.js är ett bra val för att utveckla realtidschattprogram, eftersom det är asynkront och kan hantera många samtidiga anslutningar.
Spel: Node.js kan användas för att utveckla spel, eftersom det är snabbt och effektivt.

Node.js är ett kraftfullt verktyg som kan användas för att utveckla en mängd olika applikationer. Det är ett bra val för utvecklare som letar efter en skalbar och effektiv plattform för att utveckla sina applikationer.

### Bra att veta
När man startar ett node-projekt så skapas en s.k "package.json"-fil. Det är en fil som används för att beskriva ett Node.js-paket. Den innehåller information om paketets namn, version, beroenden och andra metadata.

Package.json-filen finns i varje Node.js-projekt. Den används för att installera och hantera paket, till exempel Node.js-moduler och andra paket som finns i npm-registret.

Package.json-filen innehåller följande information:

    Namn: Namnet på paketet.
    Version: Versionen av paketet.
    Beroenden: En lista över paket som paketet är beroende av.
    Inställningar: En lista över inställningar för paketet.

Package.json-filen kan skapas manuellt eller genereras av ett verktyg som npm.

Här är ett exempel på en enkel package.json-fil:
   
    {
    "name": "my-package",
    "version": "1.0.0",
    "dependencies": {
        "express": "^4.17.1"
    }
    }


Denna fil beskriver ett paket med namnet "my-package" och versionen "1.0.0". Paketet är beroende av Node.js-modulen "express" i versionen "4.17.1".

Package.json-filen är ett viktigt verktyg för att utveckla Node.js-paket. Den gör det möjligt för utvecklare att installera och hantera paket enkelt och effektivt.

När du installerar paket via t ex npm så sparas information om dessa i package.json.

# NPM
NPM, eller Node Package Manager, är ett verktyg för att installera, hantera och distribuera JavaScript-paket. Det är ett standardverktyg för Node.js och är ett av de mest populära pakethanterarna för JavaScript.

NPM används för att installera paket från npm-registret, som är en onlinedatabas med JavaScript-paket. Det kan också användas för att hantera beroenden mellan paket och för att distribuera egna paket till npm-registret.

För att använda NPM måste du först installera det. Du kan göra detta genom att köra följande kommando i din terminal:

    $npm install -g npm

När NPM är installerat kan du börja använda det genom att köra följande kommando:

    $npm help

Detta kommer att ge dig en lista över alla NPM-kommandon och deras användning.


För att installera ett paket från npm-registret kan du köra följande kommando:

    $npm install express

Detta kommer att installera Node.js-modulen "express" i ditt projekt.

För att hantera beroenden mellan paket kan du använda NPM:s "dependencies"-attribut i din package.json-fil. Till exempel, om ditt projekt är beroende av Node.js-modulen "express" kan du lägga till följande till din package.json-fil:

    {
    "name": "my-project",
    "version": "1.0.0",
    "dependencies": {
        "express": "^4.17.1"
    }
    }

Use code with caution. Learn more

Detta kommer att berätta för NPM att ditt projekt är beroende av Node.js-modulen "express" i version "4.17.1" eller senare.

För att distribuera ditt eget paket till npm-registret kan du använda NPM:s "publish"-kommando. Till exempel, om du har ett paket med namnet "my-package" kan du distribuera det genom att köra följande kommando:

    $npm publish my-package

Detta kommer att publicera ditt paket i npm-registret så att andra utvecklare kan installera det.

NPM är ett kraftfullt verktyg som kan användas för att hantera JavaScript-paket. Det är ett viktigt verktyg för alla utvecklare som arbetar med Node.js.


# Kom igång med node och VSC
För att komma igång med Node.js i Visual Studio Code (VSC) kan du följa dessa steg:

### Installera Node.js

Först måste du installera Node.js, som är den runtime som kör Node.js-applikationer. Du kan ladda ner Node.js från Node.js-webbplatsen.

### Installera VSC

Visual Studio Code är en populär kodredigerare som är utformad för att vara lätt att använda och anpassningsbar. Du kan ladda ner Visual Studio Code från Visual Studio Code-webbplatsen.

### Skapa ett nytt Node.js-projekt

När du har installerat Node.js och Visual Studio Code kan du skapa ett nytt Node.js-projekt. I Visual Studio Code kan du göra detta genom att gå till File > New File och välja Node.js File.

Detta kommer att skapa en ny fil med namnet app.js. Du kan börja skriva din Node.js-kod i den här filen.

### Skriv ut text till konsollen

Det enklaste sättet att komma igång med Node.js är att skriva ut text till konsollen. Du kan göra detta genom att använda metoden console.log().

Till exempel, för att skriva ut texten "Hello World" till konsollen kan du använda följande kod:

    console.log('Hello World');


### Exekvera din kod

När du har skrivit din kod kan du köra den genom att trycka på F5 i Visual Studio Code. Detta kommer att starta en Node.js-terminal och köra din kod.

I konsollen ska du se utskriften av din kod.

Här är några ytterligare exempel på hur du kan använda console.log() för att skriva ut text till konsollen:

    För att skriva ut ett heltal kan du använda console.log(123).
    För att skriva ut ett sträng kan du använda console.log('Hello World').
    För att skriva ut en array kan du använda console.log([1, 2, 3]).
    För att skriva ut en objekt kan du använda console.log({ name: 'John Doe', age: 25 }).

Du kan också använda console.log() för att skriva ut mer komplexa datastrukturer, till exempel JSON-objekt.

Testa nu själv för att se att du är redo;

skapa en enkel Node.js-applikation som skriver ut texten "Hello World" till konsollen.

Öppna Visual Studio Code.
Skapa ett nytt Node.js-projekt.
Lägg till följande kod till filen app.js:

    console.log('Hello World');

 Tryck på F5 för att köra din kod - alternativt välj Run > Run without debugging eller använd terminalen;
     
     $ node app.js

I konsollen ska du se följande utskrift:

    Hello World

Du kan ändra koden för att skriva ut andra texter till konsollen.