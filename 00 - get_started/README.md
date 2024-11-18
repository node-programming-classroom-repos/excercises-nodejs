# Kom igång med nodejs

### Node.js 
(eller bara node) är en open source-plattform för att utveckla webbapplikationer och för att andra typer av applikationer, till exempel webbservrar, realtidschattprogram och spel.

node har ett antal fördelar, bland annat:
Det är baserat på JavaScript, ett populärt och välkänt språk.
Det är skalbart och kan hantera stora mängder trafik.
Det är asynkront, vilket gör det effektivt för att hantera händelsedrivna interaktioner.

node har också några nackdelar, bland annat:
Det kan vara svårt att lära sig, eftersom det är ett relativt nytt språk.
Det kan vara resurskrävande för vissa applikationer.

Här är några exempel på applikationer som går att göra i node:

- Webbapplikationer: node är ett populärt val för att utveckla webbapplikationer, eftersom det är snabbt, skalbart och enkelt att använda.
- Webbservrar: node kan användas för att skapa webbservrar som kan hantera stora mängder trafik.
- Realtidschattprogram: Node.js är ett bra val för att utveckla realtidschattprogram, eftersom det är asynkront och kan hantera många samtidiga anslutningar.
- Spel: Node.js kan användas för att utveckla spel, eftersom det är snabbt och effektivt.

node är alltså ett kraftfullt verktyg som kan användas för att utveckla en mängd olika applikationer. Det är ett bra val för utvecklare som letar efter en skalbar och effektiv plattform för att utveckla sina applikationer i.

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

    $npm install paketetsNamn
    
Till exempel för att installera paketet/modulen express:

    $npm install express

Detta kommer att installera modulen "express" i ditt projekt.

För att hantera beroenden mellan paket kan du använda NPM:s "dependencies"-attribut i din package.json-fil. Till exempel, om ditt projekt är beroende av Node.js-modulen "express" kan du lägga till följande till din package.json-fil:

    {
    "name": "my-project",
    "version": "1.0.0",
    "dependencies": {
        "express": "^4.17.1"
    }
    }


Detta kommer att berätta för NPM att ditt projekt är beroende av Node.js-modulen "express" i version "4.17.1" eller senare.
Tecknet "^" betyder "eller senare" än version 4.17.1 i det här fallet.
Om man istället använder "*" så betyder det att vilken version som helst gäller.

För att distribuera ditt eget paket till npm-registret kan du använda NPM:s "publish"-kommando. Till exempel, om du har ett paket med namnet "my-package" kan du distribuera det genom att köra följande kommando:

    $npm publish my-package

Detta kommer att publicera ditt paket i npm-registret så att andra utvecklare kan installera det.
Innan du publicerar ditt paket bör du se till att det fungerar korrekt och att du har en bra dokumentation.

NPM är alltså ett verktyg som kan användas för att hantera JavaScript-paket. npm är ett viktigt verktyg för alla som arbetar med node.


# Kom igång med node och VSC
För att komma igång med Node.js i Visual Studio Code (VSC) kan du följa dessa steg:

### Installera Node.js

Först måste du installera Node.js, som är den runtime som kör Node.js-applikationer. Du kan ladda ner Node.js från Node.js-webbplatsen; https://nodejs.org/.
På webbplatsen listas oftast en s.k LTS-version och en version som är current.
Skillnaden är att LTS-versionen underhålls längre och att current vidareutvecklas i snabbare takt. Med andra ord är LTS stabilare.

### Installera VSC

VSC är en populär editor som är utformad för att vara lätt att använda med stöd för extensions (tillägg) beroende på vad du vill göra. 
Du kan ladda ner VSC från https://code.visualstudio.com/

### Skapa ett nytt Node.js-projekt

När du har installerat Node.js och VSC kan du skapa ett nytt Node.js-projekt. I VSC gör du det genom att gå till File > New File och välja Node.js File.

Detta kommer att skapa en ny fil med namnet app.js. Du kan börja skriva din Node.js-kod i den här filen.
Du kan också t ex välja att öppna en mapp och skapa en ny fil i VSC - skapa då en fil med extensionen .js (javasscript).

### Skriv ut text till konsollen

Det enklaste sättet att komma igång med Node.js är att skriva ut text till konsollen. Du kan göra detta genom att använda metoden console.log().

Till exempel, för att skriva ut texten "Hello World" till konsollen kan du använda följande kod:

    console.log('Hello World');


### Exekvera din kod

När du har skrivit din kod kan du köra den genom att trycka på F5 i VSC. Detta kommer att starta en Node.js-terminal och köra din kod.
Du kan också starta en ny terminal i VSC och i den skriva kommandot för att köra ditt script;

    $ node namnetPåDittScript.js

I konsollen ska du då då se utskriften av din kod.

Här är några ytterligare exempel på hur du kan använda console.log() för att skriva ut text till konsollen:

    För att skriva ut ett heltal kan du använda console.log(123).
    För att skriva ut ett sträng kan du använda console.log('Hello World').
    För att skriva ut en array kan du använda console.log([1, 2, 3]).
    För att skriva ut en objekt kan du använda console.log({ name: 'John Doe', age: 25 }).

Du kan också använda console.log() för att skriva ut mer komplexa datastrukturer, till exempel JSON-objekt.

Testa nu själv;

skapa en enkel Node.js-applikation som skriver ut texten "Hello World" till konsollen.

Öppna VSC.
Skapa ett nytt Node.js-projekt.
Lägg till följande kod till filen app.js:

    console.log('Hello World');

 Tryck på F5 för att köra din kod - alternativt välj Run > Run without debugging eller använd terminalen;
     
     $ node app.js

I konsollen ska du se följande utskrift:

    Hello World

Du kan ändra koden för att skriva ut andra texter till konsollen.

Gå vidare nu med att läsa om hur du kommer igång med Jest.
Se i filen jest.md i denna mappen.
