# intro till Express.js i Node.js

Express.js är ett snabbt och flexibelt ramverka för webbapplikationer i node. Det används ofta för att skapa webb- och API-appar och består av funktionalitet för att hantera requests och responses via http samt routing, middleware m.m.

Om man vill börja med webbapplikationer för node, så är express bra att starta med.

I mappen [blog](https://github.com/node-programming-classroom-repos/excercises-nodejs/tree/main/10%20-%20extras/express/blog) finns ett litet exempel med en applikation.

## installation
i din mapp installerar du express med:

```bash
npm install express
```

---

Ett grundläggande exempel som startar en server som lyssnar på s.k GET-requests (typ hämta sidor från webbläsaren):

```javascript
const express = require('express'); // Importera Express
const app = express(); // Skapa en Express-app
const port = 3000; // porten

// en route som nås från roten
app.get('/', (req, res) => {
  res.send('Min Express-app!'); //res.send skickar tillbaka till den som ställt requestet. I vårt fall webbläsaren eftersom vi öppnar sidan i webbläsaren.
});

// Starta servern på port 3000
app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});

```

kör scriptet och öppna webbläsaren med länken ```http://localhost:3000```.

---

## routing

Routing innebär att man definiera s.k endpoints (dvs url:er som kan nås via applikationen). 
Till dessa routes lägger vi till logik som hanterar och utför operationer (som är tänkta för resp route).

- **get** en sådan route används för att **hämta** data. T ex en sida som ska visas eller json ska skickas tillbaka.
- **post** en sån route tar emot data som ska behandlas (t ex sparas eller liknande).


```javascript
app.get('/about', (req, res) => {
  res.send('Detta är about-sidan.');
});

app.post('/submit', (req, res) => {
  res.send('Formulär inskickat');
});
```


En **route** består av:
- En **HTTP-metod** (`GET`, `POST`, `PUT`, etc.).
- En **URL-path** eller endpoint.
- En callback-funktion som hanterar begäran.

Exempel:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Root Endpoint');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

### I Express kan du definiera olika HTTP-metoder för samma path.

```javascript
app.get('/items', (req, res) => {
  res.send('Hämtar alla objekt');
});

app.post('/items', (req, res) => {
  res.send('Skapar ett nytt objekt');
});

app.put('/items/:id', (req, res) => {
  res.send(`Uppdaterar objekt med ID ${req.params.id}`);
});

app.delete('/items/:id', (req, res) => {
  res.send(`Tar bort objekt med ID ${req.params.id}`);
});
```

### Med dynamiska parametrar i URL kan du skapa flexibla endpoints.

```javascript
// En dynamisk route som tar emot ett id
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Användar-ID är ${userId}`);
});

// Multipla parametrar
app.get('/user/:id/order/:orderId', (req, res) => {
  const { id, orderId } = req.params;
  res.send(`Användar-ID: ${id}, Order-ID: ${orderId}`);
});
```

Besök /user/123 eller /user/123/order/456 för att testa dessa routes.

### Query-parametrar används för att skicka extra data i en begäran.

```javascript
app.get('/search', (req, res) => {
  const query = req.query.q; // Hämtar query-parametern "q"
  res.send(`Söker efter: ${query}`);
});
```
Testa genom att besöka: http://localhost:3000/search?q=express.

### Du kan lägga till specifik middleware för en route.

```javascript
const checkAuth = (req, res, next) => {
  const authorized = req.headers.authorization === '1234'; // Enkel autentisering
  if (authorized) {
    next(); // Gå vidare till route-handler
  } else {
    res.status(403).send('Ej auktoriserad!');
  }
};

app.get('/secure-data', checkAuth, (req, res) => {
  res.send('Hemlig data!');
});
```

### Med express.Router kan du organisera routes i moduler för bättre struktur.
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Skapa en ny router
const userRouter = express.Router();

// Definiera routes för användare
userRouter.get('/', (req, res) => {
  res.send('Lista över användare');
});

userRouter.get('/:id', (req, res) => {
  res.send(`Användarinformation för ID: ${req.params.id}`);
});

// Använd routern
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

I detta exempel är:

/users => Lista alla användare.
/users/:id => Visa specifik användare.


### route chaining - du kan använda .route() för att hantera flera HTTP-metoder för samma path.
```javascript
app.route('/products')
  .get((req, res) => {
    res.send('Hämtar alla produkter');
  })
  .post((req, res) => {
    res.send('Skapar en ny produkt');
  })
  .put((req, res) => {
    res.send('Uppdaterar en produkt');
  });

```


### wildcard routes med * för att fånga alla paths som inte matchar en route

```javascript
app.get('*', (req, res) => {
  res.status(404).send('Sidan kunde inte hittas');
});

```
---


## middleware

Middleware är funktioner som kan manipulera request och response eller köra logik mellan att en begäran tas emot och ett svar skickas.

Det finns inbyggda middleware eller om vi vill konstrurera sådana själva.

Rent konkret innebär en middleware att man utför någoting, efter ett request kommit in, tills dess ett response skickas tillbaka.

I exemplet nedan: när man skickar en POST-begäran till route ```/data``` med JSON-data, loggas begäran i konsolen tack vare middleware-funktionen.

```javascript
// Inbyggd middleware för att hantera JSON
app.use(express.json());

// Egen middleware för loggning
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Gå vidare till nästa middleware eller route-handler
});

// Exempel-rout
app.post('/data', (req, res) => {
  res.send(`Mottagen data: ${JSON.stringify(req.body)}`);
});

```

---

## statisk filserver (html, css, js)

Express kan också användas för att tjäna statiska filer som HTML, CSS och JavaScript.

```javascript
app.use(express.static('public'));
````

Om du har en mapp public med en index.html, blir den tillgänglig på rot-URL, t ex https://localhost:3000/index.html


---

## parametrar och query-parametrar

För att arbeta med URL-parametrar och query-parametrar.

```javscript
// Parametrar i URL
app.get('/user/:id', (req, res) => {
  res.send(`Användar-ID: ${req.params.id}`);
});

// Query-parametrar
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Du söker efter: ${query}`);
});
```

Besök t.ex. /user/123 eller /search?q=express för att se resultatet.

---

## felhantering

Du kan använda ett globalt felhanteringsmiddleware:
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Något gick fel!');
});
````

Om ett fel uppstår i din app, fångar denna middleware det och returnerar ett standardmeddelande.

Felhantering med en fallback:
```javascript
// Specifik felroute
app.get('/error', (req, res) => {
  throw new Error('Något gick fel!');
});

// Global felhanteringsmiddleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Serverfel!');
});

```

---

## Express router 

Med express inbyggda Router kan vi organisera våra routes i moduler.

```javascript
const router = express.Router();

// Definiera routes i routern
router.get('/profile', (req, res) => {
  res.send('Profil-sidan');
});

router.get('/settings', (req, res) => {
  res.send('Inställningssidan');
});

// Använd routern i appen
app.use('/user', router);
````

När du nu besöker /user/profile eller /user/settings, triggas de respektive handlers.

---
