const express = require('express');

const app = express();

const PORT = 3000;

const Authors = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (_req, res) => {
  const authors = await Authors.getAll();

  if (!authors) {
    return res.status(404).json({ message: 'Authors not found'});
  }

  return res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  if (!books) {
    return res.status(404).json({ message: 'Book not found '});
  }

  return res.status(200).json(books);
});

app.get('/books/:author_id', async (req, res) => {
  const { author_id } = req.params;

  const books = await Books.getByAuthorId(author_id);

  if (!books) {
    return res.status(401).json({ message: 'Author not found'});
  }

  return res.status(200).json(books);
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));