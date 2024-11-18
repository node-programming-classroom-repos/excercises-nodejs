Detta är ett exempel på en liten webbapplikation med express - en blog simuleras (utan databas).


Ta en titt i filerna och testkör.

- du behöver installera express och body-parser

den här lilla blogen kan:

- Visa alla inlägg: Hämtas från /posts och visas i webbläsaren.
- Lägg till inlägg: Formuläret skickar en POST-begäran till /posts.
- Se specifikt inlägg: (via API, använd t.ex. en REST-klient).
- Ta bort inlägg: Kan göras med DELETE på /posts/:id (via API).
