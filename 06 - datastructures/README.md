# Datastrukturer 
är till för att hantera och organisera data. 
Datastrukturer finns i alla moderna språk, dock med olika namn och funktionalitet.
Beroende på dina behov kan du använda olika datastrukturer för att utföra olika operationer och uppgifter.
I Javascript (och node) finns t ex:

### Arrays (Arrayer):
En array, som vi tidigare behandlat, är en ordnad lista med element som du kan komma åt med hjälp av deras position eller index. Det är en vanlig datastruktur för att lagra flera värden i en variabel.

Exempel:
```javascript
const fruits = ['äpple', 'banan', 'apelsin'];
console.log(fruits[0]); // Output: äpple
```


Med arrayer följer många inbyggda funktioner för att arbeta med arrayer. En **stark** rekommendeation är att läsa i dokumentationen för att få kunskap om vilka användbara funktioner det finns.

**length**
Det finns också en viktig *egenskap/attribut* som går att använda i samband med arrayer: **length**.

Med length kan man få reda på antalet element i en array. Mycket användbart när man arbetar med arrayer.

Exempel:
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // Output: 3
```

Vi iteration är length nästa oumbärligt - särskilt om vi inte vet längden på den.

Exempel:

```javascript
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Output:
// 10
// 20
// 30
// 40
// 50
```

För funktioner så är här är några av de mest användbara;

1. push() och pop()
Beskrivning: push() lägger till ett eller flera element i slutet av en array, och pop() tar bort det sista elementet.

```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana"]
```

2. shift() och unshift()
Beskrivning: shift() tar bort det första elementet i en array, medan unshift() lägger till ett eller flera element i början.

```javascript
let animals = ["Dog", "Cat"];
animals.unshift("Lion");
console.log(animals); // Output: ["Lion", "Dog", "Cat"]

animals.shift();
console.log(animals); // Output: ["Dog", "Cat"]
```

3. forEach()
Beskrivning: Itererar över varje element i arrayen och utför en given funktion.

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(num => console.log(num * 2));
```

4. map()
Beskrivning: Skapar en ny array genom att applicera en funktion på varje element i arrayen.

```javascript
let numbers = [1, 2, 3];
let squared = numbers.map(num => num ** 2);
console.log(squared); // Output: [1, 4, 9]
```

5. filter()
Beskrivning: Skapar en ny array med alla element som uppfyller ett visst villkor.
```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

6. find()
Beskrivning: Returnerar det första elementet som uppfyller ett visst villkor.

```javascript
let numbers = [10, 15, 20];
let found = numbers.find(num => num > 12);
console.log(found); // Output: 15
```

7. includes()
Beskrivning: Kontrollerar om ett visst värde finns i arrayen och returnerar true eller false.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.includes("Banana")); // Output: true
console.log(fruits.includes("Mango"));  // Output: false
```

Detta var ett axplock - se i dokumentationen för fler inbyggda funktioner.

Nämnas kan t ex:
- slice() (returnerar en delmängd)
- splice() (lägger till, tar bort e.l ersätter element)
- reduce() (mha en funktione reducera array till ett värde)
- sort() (sortering)
- join()  (slår ihop element till en sträng med en angiven separator)
- reverse() (vänder på ordningen)

### Objekt (object literal):
Ett objekt, eller object literal som är det korrekta namnet i det här sammanhanget, är en samling av nyckel-värde-par, där varje nyckel är unik. Det används för att lagra data i strukturerad form.

Exempel:

```javascript
const person = {
    name: 'Linda',
    age: 30,
    city: 'Örebro'
};
console.log(person.name); // Output: Linda
```

### Listor (Lists):
Listor är vanliga datastrukturer som används för att lagra element i en ordnad sekvens. Du kan använda listor för att bygga en enkel kö eller stack.

Exempel Queue (kö):

```javascript
const queue = [];
queue.push('element1');
queue.push('element2');
const removedElement = queue.shift();
console.log(removedElement); // Output: element1
```

### Stackar (Stacks):
En stack är en datastruktur där elementen läggs till och tas bort i LIFO (Last-In, First-Out) ordning. Detta innebär att det senast tillagda elementet är det första att tas bort.

Exempel:
```javascript
const stack = [];
stack.push('element1');
stack.push('element2');
const poppedElement = stack.pop();
console.log(poppedElement); // Output: element2
```

### Set (Mängder):
Ett set är en samling av unika värden där varje värde förekommer endast en gång. Det används ofta när du behöver hantera en samling unika element.

Exempel:
```javascript
const uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(1); // Ignoreras eftersom 1 redan finns
console.log(uniqueNumbers); // Output: Set { 1, 2 }
```

### Map:
En map är en samling av nyckel-värde-par där nycklarna kan vara av olika datatyper. Den används för att koppla värden till nycklar och möjliggör effektiv sökning.

Exempel:

```javascript
const personer = new Map();
personer.set('Kent', 30);
personer.set('Olaf', 25);
console.log(personer.get('Kent')); // Output: 30
```


# Övningar

### Övning 1: Arrays (Arrayer)
- 1.0 Skapa en array med namn på dina favoritfärger och skriv ut den första färgen.
- 1.1 Summera alla tal: Skapa en array med talen [2, 4, 6, 8, 10]. Använd en for-loop för att summera alla tal i arrayen och skriv ut summan.
- 1.2 Hitta längsta ordet: Givet en array med ord ["apple", "banana", "kiwi", "strawberry"], använd en for-loop för att hitta det längsta ordet i arrayen.
- 1.3: Skapa en ny array med kvadrater: Givet arrayen [1, 2, 3, 4, 5], använd en for-loop för att skapa en ny array där varje tal är kvadraten av det ursprungliga talet.
- 1.4: Filtrera ut jämna tal: Givet arrayen [10, 15, 20, 25, 30], använd en for-loop för att skapa en ny array som endast innehåller de jämna talen.
- 1.5 Skriv ut namn med index: Givet arrayen ["Alice", "Bob", "Charlie", "Diana"], använd en for-loop för att skriva ut varje namn tillsammans med dess index i formatet: Index 0: Alice, Index 1: Bob, och så vidare.


### Övning 2: Objekt (Objects)
Skapa ett objekt som representerar din favoritbok med egenskaper som "titel", "författare" och "årtal".

### Övning 3: Listor (Lists)
Skapa en lista som fungerar som en enkel kö och utför några grundläggande köoperationer.

### Övning 4: Stackar (Stacks)
Skapa en stack som fungerar som en historik för besökta webbsidor och utför några grundläggande stackoperationer.

### Övning 5: Set (Mängder)
Skapa ett set som innehåller unika sporter och försök lägga till en sport som redan finns.

### Övning 6: Map (Kartor)
Skapa en karta som kopplar namnen på några länder till deras huvudstäder och hämta huvudstaden för ett specifikt land.

