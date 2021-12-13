const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

const Authors = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (_req, res) => {
  const authors = await Authors.getAll();

  if (!authors) {
    return res.status(404).json({ message: 'Authors not found' });
  }

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Authors.getById(id);

  if (!author) {
    return res.status(404).json({ message: 'Author not found' });
  }

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Authors.isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Invalida data' });
  }

  await Authors.create(firstName, middleName, lastName);

  res.status(200).json({ message: 'Author sucessfully created' });
});

app.get('/books', async (req, res) => {
  const books = await Books.getAll();

  if (!books.length) {
    return res.status(404).json({ message: 'Books not found' });
  }

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Books.getByAuthorId(id);

  if (!books) {
    return res.status(401).json({ message: 'Author not found' });
  }

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { author_id, title } = req.body;
  
  if (!await Books.isValid(author_id, title)) {
    return res.status(400).json({ message: 'Invalida data' });
  }

  await Books.create(title, author_id);

  res.status(200).json({ message: 'Book sucessfully created' });
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));