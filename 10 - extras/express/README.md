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

## ÖVERBLICK

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

## ROUTING

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

## URL-parametrar och query-parametrar

URL-parametrar och query-parametrar är data som kan skickas med ett request.

För en URL så kan det se ut så här;

- URL parameter: https://example.com/user/45
där parametern är user och värdet 45
- query parameter: https://example.com/search?str='users'
där search är parametern och users värdet (sträng)

Datat kan användas i vår applikation för att utföra specifika operationer, tex hämta viss data beroende och returnera med responset.

```javascript
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


### dynamiska parametrar med ett request

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

### ej definerade query-parametrar

```javascript
app.get('/search', (req, res) => {
  const query = req.query.q; // Hämtar query-parametern "q" i requestet
  res.send(`Söker efter: ${query}`);
});
```
Testa genom att besöka: http://localhost:3000/search?q=express.

### middleware för en route

```javascript
const checkAuth = (req, res, next) => {
  const authorized = req.headers.authorization === '1234'; // vi simulerar autentisering
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

### Med express.Router kan du organisera routes i moduler
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


## MIDDLEWARE

Middleware är funktioner som kan manipulera request och response eller köra logik mellan att en begäran tas emot och ett svar skickas.

Används för att bearbeta begäranden och svar i en kedja innan en begäran når en slutlig route-handler eller skickar ett svar. 

Det finns inbyggda middleware eller om vi vill konstrurera sådana själva.

Rent konkret innebär en middleware att man utför någoting, efter ett request kommit in, tills dess ett response skickas tillbaka.

En middleware-funktion har följande signatur:
```javscript
function middleware(req, res, next) {
  // Logik här
  next(); // Vidare till nästa middleware
}
```

**Typer av Middleware**
- Inbyggd middleware: Levereras med Express (t.ex. express.json).
- 3rd party middleware: Installera med npm (t.ex. morgan).
- Egen middleware: Du skapar själv för anpassad logik.


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

Här är ytterligare ett exmpel där vi 'hittar på' en egen autensiering med en API-nyckel som ska inkluderas i headern i requestet:

```javascript
// vår middleware för enkel autentisering
const authMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === '12345') {
    next(); // Fortsätt om autentiseringen är lyckad
  } else {
    res.status(403).send('Ej auktoriserad');
  }
};

// Använd middleware på en (hemlig/skyddad) route
app.get('/secure', authMiddleware, (req, res) => {
  res.send('Välkommen till den skyddade sidan!');
});

```

Ytterligare ett exempel skulle kunna vara om man vill validera inkommande data för en route/request:

```javascript
const validateData = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).send('Titel och innehåll krävs!');
  }
  next();
};

// Använd middleware på en POST-route
app.post('/posts', express.json(), validateData, (req, res) => {
  const { title, content } = req.body;
  res.send(`Inlägg med titel "${title}" sparat!`);
});
```

---

## middleware för statisk filserver (html, css, js)

Express kan också användas för att tjäna statiska filer som HTML, CSS och JavaScript eftersom det finns en inbyggd 
middleware för att servera statiska filer, t.ex. HTML, CSS, och JavaScript.

```javascript
app.use(express.static('public'));
````

Om du har en mapp public med en index.html, blir den tillgänglig på rot-URL, t ex https://localhost:3000/index.html


---


## middleware för felhantering

Express har stöd för särskilda middleware för att hantera fel - dessa har fyra argument: ```err, req, res, next)```.

Du kan använda ett globalt felhanteringsmiddleware:
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Något gick fel!');
});
````

Om ett fel uppstår i din app, fångar denna middleware det och returnerar ett standardmeddelande.

Felhantering med en fallback kan göras så här:
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

## kombinera middleware med express.Router

Bra att veta kan vara att om man organiserar sina routes med ```express.Router```, kan man använda middleware specifikt för en router.

```javascript
const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('User-router middleware');
  next();
});

userRouter.get('/profile', (req, res) => {
  res.send('Användarprofil');
});

app.use('/users', userRouter);
```

## 3rd party middleware (externa moduler)

Du kan använda tredjepartspaket som redan löser vanligt återkommande "problem". 

Du behöver installera dessa eftersom de är externa moduler.

Här är några exempel:

**morgan** - för loggning

```javascript
const morgan = require('morgan');
app.use(morgan('dev')); // Loggar varje begäran i konsolen
```

**cors** - för cross origin sharing

```javascript
const cors = require('cors');
app.use(cors()); // Tillåter begäranden från andra domäner
```


## global och specifik middleware

Middleware kan tillämpas globalt på ALL routes eller specifikt för enskilda routes.

Skillnaden är ett funktionsanrop: **use** för globala och för specifika så anges middleware för just den routen.

Om vi ska applicera globalt:

```javascript
app.use((req, res, next) => {
  console.log('Detta gäller alla routes!');
  next();
});
```

för en specifik route:

```javascript
app.get('/specific', (req, res, next) => {
  console.log('Specifik route-middleware');
  next();
}, (req, res) => {
  res.send('Middleware färdig, här är svaret!');
});
```

---


