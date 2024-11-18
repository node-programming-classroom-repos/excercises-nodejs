# promises

Promises i JavaScript är ett kraftfullt sätt att hantera asynkron kod, dvs när kod (komponenter, anrop etc) behöver eller ska köras parallellt (eller sekventiellt).
Promises används alltså för att hantera operationer som tar tid, som att läsa från ett externt API eller ladda in en stor fil. 

Förhoppningsvis ger detta en bättre förståelse för promises och hur det kan användas i olika scenrier.

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


## chaining och reduce - exempel

**Chaining** är alltså ett koncept för att hantera och "kedja" flera operationer sekventiellt med promises.
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
  .then((data) => processData(data))                    //chaining
  .then((processedData) => displayData(processedData))  //chaining
  .then((finalOutput) => console.log(finalOutput)) //chaining - skriver ut "Data hämtad bearbetad visas på skärmen"
  .catch((error) => console.error(error));
```

Likt chaining så finns **reduce** för att hantera ett sekventiellt förlopp med promises. Skillnaden mot chaining är att reduce är inbyggt i promises.
I exemplet nedan använder vi reduce för att utföra uppgifterna (tasks) sekventiellt:

```javascript

//uppgifter
const tasks = [
  () => Promise.resolve("Uppgift 1 klar"),
  () => Promise.resolve("Uppgift 2 klar"),
  () => Promise.resolve("Uppgift 3 klar"),
];

tasks //vi gör ett radbryt för läsabarhetens skull
  .reduce((chain, task) => {
    return chain.then((result) => {
      console.log(result);
      return task();
    });
  }, Promise.resolve()) //när sista operationen i reduce körs -> finalResult
  .then((finalResult) => console.log(finalResult)); // "Uppgift 3 klar"

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


För sakens skull så gör vi ett exempel till - vi vill och ska göra flera anrop till ett externt API parallellt.

Vi använder ```Promise.all``` för att hantera detta:

```javascript
const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
  res.json()
);
const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
  res.json()
);

Promise.all([fetchPost, fetchUser])
  .then(([post, user]) => {
    console.log("Post:", post);
    console.log("User:", user);
  })
  .catch((error) => console.error("Ett fel uppstod:", error));

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

I exemplet nedan använder funktionen ```main``` ett anrop som är märkt med ```await```. 

Detta göra att vi måste ange funktionen med ```async``` i dess signatur.


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

---

## polling - scenario
Vi kan använda promises för att göra s.k **polling**-requests. 
Se det som att vi försöker nå en resurs när denna blir "ledig" och vi frågar (pollar) resursen med ett, i det här fallet, specificerat antal försök försök (kan också göras i oändlgighet om resursen tillåter).
Vi simulerar att vi ska "polla" ett API ett visst antal försök. För varje misslyckat försök (eller poll) så genereras ett s.k ```reject``` och vid lyckat försök ett ```resolve``` (då är vi alltså klara).

```javascript

//parametern interval används för hur länge väntetiden ska vara
//maxAttemps med maxantal för antal försök
function pollServer(url, interval, maxAttempts) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const poll = () => {
      console.log("Kontrollerar status...");
      fetch(url)
        .then((res) => {
          if (res.ok) {
            resolve("Resurs tillgänglig!");
          } else {
            throw new Error("Resurs inte tillgänglig");
          }
        })
        .catch((err) => {
          attempts++;
          if (attempts >= maxAttempts) {
            reject("Max antal försök överskridna");
          } else {
            setTimeout(poll, interval);
          }
        });
    };

    poll();
  });
}

pollServer("https://jsonplaceholder.typicode.com/posts/1", 1000, 5)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
```

---

## progression - scenario
Vi skulle kunna använda Promises för att på något sätt hantera eller meddela om en progression för en operation.

SSkulle kunna tänkas kunna användas i situationer när vi tex vill meddela eller utföra operationer under tiden som en operation håller på att utföras.

Exempelvis om vi har en operation som *vi vet på förhand* tar lång tid, eller om operationen *skulle* ta lång tid.

I exemplet nedan skriver vi ut en text i konsollen, men i realiteten skulle vi kunna te x anropa funktioner eller utföra andra operationer.

```javascript
function simulateLongTask() {
  return new Promise((resolve) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      console.log(`Progress: ${progress}%`);
      if (progress === 100) {
        clearInterval(interval);
        resolve("Uppgift färdig!");
      }
    }, 1000);
  });
}

simulateLongTask().then((message) => console.log(message));

```

Om operationen, progressen, skulle ta för lång tid så kan vi avsluta en promise om den tar för lång tid.

I exemplet nedan gör vi det genom att sätta en egen timeOut:

```javascript
function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout nådd"), timeout)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

```

---

## simulera cache - scenario

Detta är inget som är inbyggt med promises men ibland är det meningsfullt att "simulera" en cache - t ex om vi har flera anrop till ett och samma API
och vi vill undvika att göra samma anrop till samma endpoint (och sannolikt få tillbaka samma data i respons) så kan vi, som i exemplet nedan, simulera en cache.
I exemplet lagrar vi URL:en till endpoint för att undvika att göra samma anrop igen.

```javascript
const cache = {};

function fetchWithCache(url) {
  if (cache[url]) {
    return Promise.resolve(cache[url]);
  }

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      cache[url] = data; // Spara i cache
      return data;
    });
}

fetchWithCache("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Hämtat:", data))
  .catch((error) => console.error(error));

```
