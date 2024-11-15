# promises

Promises i JavaScript är ett kraftfullt sätt att hantera asynkron kod, dvs när kod (komponenter, anrop etc) behöver eller ska köras parallellt (eller sekventiellt).
Promises används alltså för att hantera operationer som tar tid, som att läsa från ett externt API eller ladda in en stor fil. 

Särskilt kraftfullt blir också promises eftersom det finns inbyggd funktionalitet för att hantera flera asynkrona operationer;

- **felhantering** - med promises, och då asynkrona operationer, finns inbyggd funktionalitet för felhantering. Hantering av felen kan göras med ```.catch()``` eller om man använder ```async/await``` med ```try/catch```.
- **chaining** - vi kan använda "chaining", dvs att flera asynkrona operationer kan utföras i en "kedja" som sekventiellt utförs.
- **parallella operationer** - inbyggt stöd finns föra att exekvera flera operationer (dvs flera parallella promises) asynkront. För detta används t ex ```Promise.all```eller ```Promise.race```.



> [!IMPORTANT]
> Grundläggande begrepp som är bra att känna till är de olika **state** (tillstånd) som ett promise kan ha:
> 1. **Pending**: Initialt tillstånd – operationen är inte färdig.
> 2. **Fulfilled**: Operationen har lyckats, och ett värde är nu tillgängligt.
> 3. **Rejected**: Operationen har misslyckats, och en anledning (error) är tillgänglig.

Som nämnts innan så är promise användbart för att hantera operationer som kan ta tid eller om vi t ex behöver utföra operaioner asynkront, dvs parallellt.
Om man arbetar med node och t ex utvecklar en webbapp så är det ganska vanligt att promises används, t ex för att göra ett API anrop eller att vi ska vänta tills vi får
ett svar från databasanropet.

---

## Skapa en promise

En Promise skapas med ```new Promise``` och tar en funktion (executor) som argument. 
Denna funktion har två parametrar: resolve (för att uppfylla) och reject (för att avvisa).

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operationen lyckades!");
  } else {
    reject("Operationen misslyckades.");
  }
});

// Användning av Promise
myPromise
  .then((result) => {
    console.log(result); // "Operationen lyckades (fulfilled)!"
  })
  .catch((error) => {
    console.log(error); // Om något gick fel (rejected)
  });

```

---

## Ett första exempel

Vi gör ett exempel; vi simulerar en asynkron operation med den inbyggda funktionen ```setTimeout``` som kan användas för att skapa en tidsmässig timeout.

Exemplet i sig kanske inte är så intressant, men det visar att när ```setTimeout```har exekverats efter 2 sekunder så kommer per automatik raden med ```.then((result)```att köras.
```result```, som är ett objekt, kommer att resultera i att det i konsollen skrivs ut "Klart efter 2 sekunder!".
Alltså exekveras ```.then```om och när operationern lyckas.

Om operationern inte skulle lyckas så skulle raden med ```.catch((error)```exekveras och ett felmeddelande skulle skrivas ut.


```javascript
function delayedOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Klart efter 2 sekunder!");
    }, 2000);
  });
}

delayedOperation()
  .then((result) => console.log(result)) // "Klart efter 2 sekunder!"
  .catch((error) => console.error(error));
```

---


## chaining - exempel

Chaining är alltså ett koncept för att hantera och "kedja" flera operationer sekventiellt med promises.
Praktiskt och konkret så gör vi detta med fler s.k ```.then()```-anrop i källkoden (se sist i källkoden i exemplet och anropet till fetchData).
Med chaining kommer vi alltså att kunna köra flera olika operationer i tur och ordning.

Se nedan exempel, där vi har tre funktioner som är tänkta att simulera operationer som tar tid (vi använder ```setTimeout``` för att simulera tidsåtgång).

Inut varje funktion skapar vi ett promise och i "kroppen" för varje promise så kapslar vi in dom operationer som tar tid.
Det betyder också, när vi gör så här med promises, att funktionerna kan köras asynkront.

Sist, i exemplet nedan, så start vi hela kedjan med att anropa ```fetchData```, som då blir den första funktionen i kedjan.
Vi lägger till flera anrop med ```.then```för att anropa våra funktioner ```processData```och  ```displayData```.

Testa gärna nedan kod och ändra tiden för respektive anrop till setTimeout för att se vad som händer.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data hämtad"), 2000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} bearbetad`), 1000);
  });
}

function displayData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} visas på skärmen`), 1000);
  });
}

fetchData()
  .then((data) => processData(data))
  .then((processedData) => displayData(processedData))
  .then((finalOutput) => console.log(finalOutput)) // "Data hämtad bearbetad visas på skärmen"
  .catch((error) => console.error(error));
```

---

## Promise.all - asynkrona operationer parallellt
När du behöver köra flera asynkrona operationer parallellt och vänta tills alla är färdiga kan du använda ```Promise.all```.

Se exemplet nedan där 3 promises skapas och körs parallellt med anropet ```Promise.all```:

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Ett"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Två"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Tre"), 3000));

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) // ["Ett", "Två", "Tre"]
  .catch((error) => console.error(error));
```

---

## Promise.race - snabbaste resultatet
Med ```Promise.race``` får man resultatet av den operation som är snabbast/först blir färdig.

I detta exempel så kommer bara det första promise ge ett resultat eftersom den är snabbast:

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Snabb"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Långsam"), 3000));

Promise.race([promise1, promise2])
  .then((result) => console.log(result)) // "Snabb"
  .catch((error) => console.error(error));

```

---

## async/await

Med ```async``` och ```await``` kan vi göra koden mer "läsbar" (vilket kanske kan vara en smaksak).
```async``` läggs till som ett keyword i signaturen för funktionen och märker då ut denna som att den ska anropas i ett asynkront kontext.
I exemplet nedan använder funktionen ```main``` ett anrop som är märkt med ```await```. Detta göra att vi måste ange funktionen med ```async``` i dess signatur.


```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data hämtad"), 1000);
  });
}

//måste ange async eftersom await används
async function main() {
  try {
    const data = await fetchData(); //await, dvs en asynkron operation
    console.log(data); // "Data hämtad"
  } catch (error) {
    console.error(error);
  }
}

main();
```

