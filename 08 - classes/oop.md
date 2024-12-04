# Objektorienterad programmering (OOP) 
 

Kortfattat så kan OOP summeras;
Objektorienterad programmering (OOP) är en programmeringsparadigm som bygger på att allt i programmet är objekt som interagerar med varandra. Ett objekt är en instans av en klass, som är en mall för hur objektet ska se ut och fungera. Här är några av de grundläggande koncepten inom OOP:

### Klasser och objekt: 
En klass är en mall för hur ett objekt ska se ut och fungera. Ett objekt är en instans av en klass.

### Arv: 
En klass kan ärva egenskaper och metoder från en annan klass.

### Abstraktion: 
Att separera en del av ett system från resten av systemet för att göra det enklare att förstå och hantera.

### Inkapsling: 
Att "gömma" implementationen av en del av ett system bakom ett gränssnitt, så att användaren bara behöver interagera med gränssnittet och inte behöver veta hur det fungerar under ytan.

### Polymorfism: 
Att använda samma metod på olika objekt och få olika resultat beroende på objektens egenskaper och metoder.

OOP används i många programmeringsspråk, inklusive C++, Java, Python och JavaScript. Det är ett kraftfullt verktyg för att skapa välstrukturerade och lättförståeliga program.





Här är några exempel på OOP-koncept och hur de kan implementeras med Node.js:

### Klasser och objekt (classes, objects)

```javascript
class Person {
constructor(name, age) {
    this.name = name;
    this.age = age;
}

sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}
}
```


const john = new Person('John', 30);
john.sayHello(); // Output: "Hello, my name is John and I'm 30 years old."

I detta exempel definierar vi en Person-klass med en konstruktor som tar ett namn och en ålder som argument. Vi definierar också en sayHello-metod som skriver ut en hälsning med personens namn och ålder. Vi skapar sedan ett nytt Person-objekt med namnet "John" och åldern 30, och anropar sayHello-metoden på det.

### Arv (inheritance)

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}


class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}


const dog = new Dog('Rufus');
dog.speak(); // Output: "Rufus barks."
```

I detta exempel definierar vi en Animal-klass med en konstruktor som tar ett namn som argument och en speak-metod som skriver ut ett ljud. Vi definierar sedan en Dog-klass som ärver från Animal-klassen och överskriver speak-metoden för att skriva ut att hunden skäller istället för att bara göra ett ljud. Vi skapar sedan ett nytt Dog-objekt med namnet "Rufus" och anropar speak-metoden på det.

### Abstraktion (abstraction)


```javascript
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}


// const shape = new Shape(); // Throws an error
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea()); // Output: 200
```

I detta exempel definierar vi en Shape-klass som är abstrakt, vilket betyder att den inte kan instansieras direkt utan måste ärvas av en annan klass. Vi kastar ett fel om någon försöker instansiera Shape direkt. Vi definierar sedan en Rectangle-klass som ärver från Shape-klassen och implementerar getArea-metoden för att beräkna rektangelns area. Vi skapar sedan ett nytt Rectangle-objekt med bredden 10 och höjden 20, och anropar getArea-metoden på det.

### Inkapsling (encapsulation)

```javascript
class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
        throw new Error('Insufficient funds.');
        }
        this._balance -= amount;
    }
}


const account = new BankAccount(1000);
console.log(account.balance); // Output: 1000
account.deposit(500);
console.log(account.balance); // Output: 1500
account.withdraw(200);
console.log(account.balance); // Output: 1300
```

I detta exempel definierar vi en BankAccount-klass med en konstruktor som tar ett saldo som argument. Vi definierar också en balance-getter som returnerar saldot, och deposit- och withdraw-metoder för att sätta in och ta ut pengar från kontot. Vi använder en _balance-variabel med ett understreck för att indikera att den är privat och inte ska ändras direkt från utsidan av klassen. Vi skapar sedan ett nytt BankAccount-objekt med ett saldo på 1000, sätter in 500 och tar ut 200, och skriver ut saldot efter varje transaktion. Dessa exempel visar några av de grundläggande OOP-koncepten och hur de kan implementeras med Node.js. Det finns många fler koncept och tekniker inom OOP som kan användas för att skapa robusta och skalbara program.

### Ytterligare resurser
[MDN Web Docs - JavaScript Object-Oriented Programming Concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
MDN Web Docs är en pålitlig källa för allt som rör webbutveckling, inklusive JavaScript och objektorienterad programmering.

[Node.js Official Documentation - Object-Oriented Programming](https://nodejs.org/api/all.html#all_object_oriented_programming)
Node.js officiella dokumentation innehåller information om hur OOP-koncept tillämpas i Node.js-miljön.

[TutorialsPoint - Node.js Object-Oriented Programming](https://www.tutorialspoint.com/nodejs/nodejs_object_oriented_programming.htm)
TutorialsPoint erbjuder omfattande handledning om objektorienterad programmering med Node.js, inklusive exempel och kodsnuttar.

[Node.js Design Patterns](https://nodejsdesignpatterns.com/)
Denna webbplats fokuserar på designmönster i Node.js, vilket är en viktig del av OOP. Den ger dig insikt i hur man bygger skalbara och underhållbara Node.js-applikationer med OOP-principer.

[JavaScript.info - Object-Oriented Programming](https://javascript.info/class)
JavaScript.info är en resurs med mycket information om JavaScript, inklusive OOP-koncept och hur de används med moderna JavaScript-funktioner som klasser.
