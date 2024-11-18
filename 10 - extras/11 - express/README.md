# intro till Express.js i Node.js

Detta är ett snabbt intro till express.js i node.

Express.js är ett snabbt och flexibelt ramverka för webbapplikationer i node. Det används ofta för att skapa webb- och API-appar och består av funktionalitet för att hantera requests och responses via http samt routing, middleware m.m.

Om man vill börja med webbapplikationer för node, så är express bra att starta med.


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
