const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory "database" för blogginlägg
let blogPosts = [
  { id: 1, title: 'Första inlägget', content: 'Detta är innehållet i det första inlägget.' },
  { id: 2, title: 'Andra inlägget', content: 'Detta är innehållet i det andra inlägget.' },
];

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // För statiska filer

// Startsidans route - Visa alla inlägg
app.get('/posts', (req, res) => {
  res.json(blogPosts);
});

// Visa ett specifikt inlägg
app.get('/posts/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Inlägget hittades inte.');
  res.json(post);
});

// Skapa ett nytt inlägg
app.post('/posts', (req, res) => {
  const newPost = {
    id: blogPosts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// Ta bort ett inlägg
app.delete('/posts/:id', (req, res) => {
  const postIndex = blogPosts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send('Inlägget hittades inte.');
  const deletedPost = blogPosts.splice(postIndex, 1);
  res.json(deletedPost);
});

// Server startar
app.listen(port, () => {
  console.log(`Blogg-applikationen körs på http://localhost:${port}`);
});
