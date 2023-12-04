# Datastrukturer 
är till för att hantera och organisera data. 
Datastrukturer finns i alla moderna språk, dock med olika namn och funktionalitet.
Beroende på dina behov kan du använda olika datastrukturer för att utföra olika operationer och uppgifter.
I Javascript (och node) finns t ex:

### Arrays (Arrayer):
En array, som vi tidigare behandlat, är en ordnad lista med element som du kan komma åt med hjälp av deras position eller index. Det är en vanlig datastruktur för att lagra flera värden i en variabel.

Exempel:

    const fruits = ['äpple', 'banan', 'apelsin'];
    console.log(fruits[0]); // Output: äpple

### Objekt (object literal):
Ett objekt, eller object literal som är det korrekta namnet i det här sammanhanget, är en samling av nyckel-värde-par, där varje nyckel är unik. Det används för att lagra data i strukturerad form.

Exempel:

    const person = {
        namn: 'Alice',
        ålder: 30,
        stad: 'Stockholm'
    };
    console.log(person.namn); // Output: Alice

### Listor (Lists):
Listor är vanliga datastrukturer som används för att lagra element i en ordnad sekvens. Du kan använda listor för att bygga en enkel kö eller stack.

Exempel (Kö):

    const queue = [];
    queue.push('element1');
    queue.push('element2');
    const removedElement = queue.shift();
    console.log(removedElement); // Output: element1

### Stackar (Stacks):
En stack är en datastruktur där elementen läggs till och tas bort i LIFO (Last-In, First-Out) ordning. Detta innebär att det senast tillagda elementet är det första att tas bort.

Exempel:

    const stack = [];
    stack.push('element1');
    stack.push('element2');
    const poppedElement = stack.pop();
    console.log(poppedElement); // Output: element2

### Set (Mängder):
Ett set är en samling av unika värden där varje värde förekommer endast en gång. Det används ofta när du behöver hantera en samling unika element.

Exempel:

    const uniqueNumbers = new Set();
    uniqueNumbers.add(1);
    uniqueNumbers.add(2);
    uniqueNumbers.add(1); // Ignoreras eftersom 1 redan finns
    console.log(uniqueNumbers); // Output: Set { 1, 2 }

### Map:
En map är en samling av nyckel-värde-par där nycklarna kan vara av olika datatyper. Den används för att koppla värden till nycklar och möjliggör effektiv sökning.

Exempel:

    const personer = new Map();
    personer.set('Alice', 30);
    personer.set('Bob', 25);
    console.log(personer.get('Alice')); // Output: 30



# Övningar

### Övning 1: Arrays (Arrayer)
Skapa en array med namn på dina favoritfärger och skriv ut den första färgen.



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

