## Klasser 
inom programmering är detta ett kraftfullt sätt att skapa objektbaserad kod. De används för att definiera blueprints (mallar) för objekt med liknande egenskaper och metoder. 
De mest grundläggande begreppen och koncepten är objekt, konstruktor och metoder.

I filen [oop.md](https://github.com/node-programming-classroom-repos/excercises-nodejs/blob/main/08%20-%20classes/oop.md), i det här repot, finns en mer genomgående beskrivning av konceptet. Läs gärna om du är nybörjare. *
### Exempel: Skapa en Klass för Bilar

Vi kommer att skapa en klass som representerar bilar. En bil har egenskaper som "märke" och "modell" samt metoder som "starta" och "stoppa".


    // Skapa en klass för bilar
    class Car {
        // Konstruktorfunktionen körs när ett nytt objekt skapas
        constructor(brand, model) {
            // Egenskaper (properties) för bilen
            this.brand = brand;
            this.model = model;
            this.isRunning = false; // En standardvärde
        }

        // Metod för att starta bilen
        start() {
            this.isRunning = true;
            console.log(`${this.brand} ${this.model} har startat.`);
        }

        // Metod för att stänga av bilen
        stop() {
            this.isRunning = false;
            console.log(`${this.brand} ${this.model} har stängts av.`);
        }
    }

    // Skapa en ny instans (ett objekt) av klassen Car
    const myCar = new Car("Toyota", "Camry");

    // Använd metoder på objektet
    myCar.start(); // Starta bilen: Toyota Camry har startat.
    myCar.stop();  // Stäng av bilen: Toyota Camry har stängts av.


#### class: 
En klass är en mall som definierar egenskaper och metoder som objekt baseras på. I vårt exempel är Car en klass.

#### object: 
Ett objekt är en instans av en klass. myCar är ett objekt baserat på Car-klassen.

#### constructor: 
En speciell metod som körs när ett nytt objekt skapas från en klass. Den används för att initialisera objektets egenskaper. I exemplet initierar konstruktorn brand och model.

#### properties: 
Variabler som lagrar data om objektet. I exemplet är brand, model och isRunning properties/egenskaper.

#### methods: 
Funktioner som är knutna till objektet och kan utföra åtgärder. I exemplet är start och stop metoder.

#### this: 
this hänvisar till det aktuella objektet. I metoderna start och stop används this för att komma åt och ändra objektets egenskap isRunning.

Klasser är användbara för att organisera och strukturera din kod och gör det möjligt att skapa flera objekt med liknande egenskaper och beteenden.


### Ytterligare exempel

    class Planet {
        
        // Konstruktorn körs när ett nytt objekt skapas
        constructor(name, radius, mass) {
            // Egenskaper för planeten
            this.name = name;
            this.radius = radius; // i kilometer
            this.mass = mass;     // i kilogram
        }

        // Metod för att beräkna densiteten (massa/volym) av planeten
        calculateDensity() {
            const volume = (4 / 3) * Math.PI * Math.pow(this.radius, 3);
            const density = this.mass / volume;
            return density;
        }

        // Metod för att visa information om planeten
        displayInfo() {
            console.log(`Planet: ${this.name}`);
            console.log(`Radie: ${this.radius} km`);
            console.log(`Massa: ${this.mass} kg`);
            console.log(`Densitet: ${this.calculateDensity()} kg/m³`);
        }
    }

    // Skapa nya instanser (objekt) av klassen Planet
    const earth = new Planet("Earth", 6371, 5.972e24);
    const mars = new Planet("Mars", 3389, 6.417e23);

    // Använd metoder på objekten
    earth.displayInfo();
    /*
    Output:
    Planet: Earth
    Radie: 6371 km
    Massa: 5.972e+24 kg
    Densitet: 5515.926601609568 kg/m³
    */

    mars.displayInfo();
    /*
    Output:
    Planet: Mars
    Radie: 3389 km
    Massa: 6.417e+23 kg
    Densitet: 3934.3216268431077 kg/m³
    */

I detta exempel har vi ändrat klassen till Planet, som representerar planeter. Den har egenskaper som "namn," "radie," och "massa." Metoden calculateDensity beräknar densiteten baserat på radie och massa, och metoden displayInfo visar information om planeten.

Vi skapar två instanser av Planet-klassen, earth och mars, och använder sedan deras metoder för att visa information om planeterna. Detta visar på hur du kan använda klasser för att skapa flera objekt med samma struktur och funktionalitet.


# Relationer mellan klasser och objekt
Relationer mellan klasser i objektorienterad programmering är grundläggande för att modellera interaktioner och hierarkier mellan olika komponenter i ett system. Här är några viktiga begrepp och koncept:

**Arv (Inheritance)**:
    Med arv kan man skapa en annan klass baserad på en befintlig klass. Den nya klassen, kallas då subklass, kommer att ärva egenskaper och metoder från den befintliga (superklassen) klassen.

**Komposition (Composition)**:
    Innebär att en klass innehåller en eller flera instanser av en annan klass som en del av sina medlemmar. Gör det möhligt för komplexa objekt.

**Aggregation**:
    Aggregation är där en klass har en relation med en annan klass genom att referera till dess instanser. Skillnaden är att de kan existera oberoende av varandra. Det skapar en "har-en" relation.

**Association**:
    Association representerar en allmän relation mellan två klasser där de kan interagera eller vara beroende av varandra. Det kan vara enkelsidig eller dubbelsidig och kan uttrycka olika nivåer av beroende.

**Implementering (Realization)**:
    Beskriver hur en klass använder ett Interface (gränssnitt). Det används ofta i samband med jist interface och abstrakta klasser för att specificera (måste implementeras) hur en klass ska genomföra vissa metoder.

**Dependency**:
    Dependency indikerar att en klass använder eller är beroende av en annan klass. Det kan vara tillfälligt och är ofta resultatet av att en klass använder en annan klass som en parameter i en metod eller som en del av dess interna logik.

**Multipel arv (Multiple Inheritance)**:
    Multipel arv uppstår när en klass ärver egenskaper och metoder från mer än en superklass. Detta kan leda till komplexa hierarkier och ibland problem pga av ökad komplexitet. Vissa programmeringsspråk stöder inte detta.



Det är bra om man förstår och kan implementera dessa relationer - detta ger mer flexibla och robusta system som kan underhållas och byggas ut mer enkelt. 
Här nedan tas några av dessa typer upp i form av exempel.

Här är ett exempel på några av typerna ovan:
I det här exemplet representerar tre olika klasser olika komponenter i en dator: Computer, CPU och Memory. Låt oss beskriva relationerna mellan dessa klasser:

    Computer har en CPU och Memory:
        I objektorienterad programmering representerar detta en "has-a" relation. En dator "har en" CPU och Memory, vilket innebär att dessa är en del av datorn.

    CPU tillhör Computer:
        CPU-klassen är en del av Computer-klassen. Detta illustrerar att det finns en relation där en CPU tillhör en specifik dator. I detta fall är det genom att Computer-klassen har en egenskap som refererar till en instans av CPU-klassen.

    Memory tillhör Computer:
        På samma sätt tillhör Memory-klassen också Computer-klassen. Detta indikerar att minnet är en del av datorn och återspeglas genom att Computer-klassen har en egenskap som refererar till en instans av Memory-klassen.

    Computer använder CPU och Memory:
        I funktionen start() inom Computer-klassen används CPU och Memory för att utföra operationer. Detta representerar en användningsrelation där Computer använder CPU och Memory för att utföra sina uppgifter.


    
    class CPU {
    constructor(model) {
        this.model = model;
    }

    executeInstruction() {
        console.log(`${this.model} is executing an instruction.`);
    }
    }

    
    class Memory {
    constructor(sizeGB) {
        this.sizeGB = sizeGB;
    }

    readData() {
        console.log(`Reading data from ${this.sizeGB}GB memory.`);
    }
    }

    // Computer-klassen representerar hela datorsystemet och har en relation med CPU och Memory
    class Computer {
    constructor(cpu, memory) {
        this.cpu = cpu;
        this.memory = memory;
    }

    start() {
        console.log(`Computer starting...`);
        this.cpu.executeInstruction();
        this.memory.readData();
        console.log(`Computer started.`);
    }
    }

    // skapa instanser av CPU och Memory
    const myCPU = new CPU('Intel Core i7');
    const myMemory = new Memory(16);

    // Skapa en instans av Computer och tilldela CPU och Memory
    const myComputer = new Computer(myCPU, myMemory);

    // "Starta datorn"
    myComputer.start();


# Arv / Inheritance
Arv är en viktig byggsten i objektorienterad programmering (OOP) och finns även i Node.js. Arv tillåter en klass (kallad "subklass" eller "underklass") att ärva egenskaper och metoder från en annan klass (kallad "superklass" eller "överklass"). Detta gör det möjligt att återanvända kod och skapa hierarkier av klasser med olika nivåer av specialisering. Låt oss förklara arv i Node.js med ett exempel:

### Exempel: Arv med Klasser i Node.js

Antag att vi har en superklass Vehicle som beskriver grundläggande egenskaper och metoder för fordon. Vi kommer sedan att skapa en subklass Car som ärver från Vehicle och lägger till ytterligare egenskaper och metoder som är specifika för bilar.


    // Superklass (överklass)
    class Vehicle {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.isRunning = false;
        }

        start() {
            this.isRunning = true;
            console.log(`${this.make} ${this.model} har startat.`);
        }

        stop() {
            this.isRunning = false;
            console.log(`${this.make} ${this.model} har stängts av.`);
        }
    }

(gärna i en annan fil) ärva från Vehicle:

    // Subklass (underklass) som ärver från Vehicle
    class Car extends Vehicle {
        constructor(make, model, year) {
            super(make, model); // Anropa överklassens konstruktor med super()
            this.year = year;
        }

        // Ytterligare metod specifik för bilar
        honkHorn() {
            console.log("BEEP BEEP!");
        }
    }
att skapa instanser/objekt:

    // Skapa en instans av Car
    const myCar = new Car("Toyota", "Camry", 2023);

    // Använd metoder från både överklass och underklass
    myCar.start();   // Starta bilen: Toyota Camry har startat.
    myCar.honkHorn(); // BEEP BEEP!
    myCar.stop();    // Stäng av bilen: Toyota Camry har stängts av.

I detta exempel:

Vehicle är superklassen som beskriver fordonets grundläggande egenskaper och metoder som start och stop.

Car är en subklass som ärver från Vehicle med hjälp av extends-nyckelordet. Detta innebär att Car har tillgång till alla egenskaper och metoder som är definierade i Vehicle, samt de som är specifika för Car.

super(make, model) används i Car-klassens konstruktor för att anropa superklassens konstruktor och initialisera make och model egenskaper som är ärvt från Vehicle.

honkHorn är en metod som är specifik för bilar och är unik för Car-klassen.

Genom arv kan vi återanvända och bygga vidare på befintlig kodstruktur och skapa hierarkier av klasser som representerar olika typer av objekt. Detta gör koden mer strukturerad, lättare att underhålla och mer flexibel.


# Övning - klasser och arv

### DEL 1

Tillverka en klass, Person.
Person ska ha 2st properties; name och age.
En metod, toString(), ska returnera en sträng; "Person 'name' 'age'"
där properties för name och age ska ingå.

Tillverka klassen Student som ärver ifrån Person.
Student ska ha en egen property; grades[]
Arrayen grades[] ska kunna innehålla betyg i kurser.
Lägg till en metod, addGrade(grade), vars argument är ett betyg som läggs till property grades[].
Lägg till ytterligare en metod: getAverageGrade() som returnerar medelvärdet av samtliga betyg.

Lägg till klassen Teacher som ärver från Person.
Teacher ska ha en egen property - subject, som anger vilket ämne läraren undervisar i.

Skapa nu filen main.js som skapar obekt av alla klasserna.
Skriv ut hela objekten (instanserna) direkt via console.log(dittObjekt).
Anropa getAverageGrade() för ditt/dina student-objekt och skriv ut med console.log().
Ungefär så här skulle utskriften kunna bli:

    output:
    Person John Doe (25)
    Student Jane Doe (20) [90, 80, 70]
    Teacher Sally Smith (30) Math
    73.33333333333333

### DEL 2
Lägg till följande i klasserna;
- Lägg till en metod isAdult() till klassen Person som returnerar true om personen är vuxen (över 18 år) och false annars.
- Lägg till en metod addStudent() till klassen Teacher som tar emot ett objekt av typen Student som argument och lägger till studenten i lärarens klass.
- i main.js och ändra koden så att den gör följande:
    Skapa ett objekt av typen Student med namnet john och betyg 90, 80 och 70.
    Skapa ett objekt av typen Teacher med namnet sally och ämnet Math.
    Lägg till studenten john i lärarens klass.
    Skriv ut information om lärarens klass.

