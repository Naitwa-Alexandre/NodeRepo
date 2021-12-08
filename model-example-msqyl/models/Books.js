const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books'
  );

  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE id=?',
    [id]
  );

  if (!books.length) return null;

  return books[0];
}

const isValid = (authorId, title) => {

  if (!title || title.length < 3) return false;
  if (!(authorId || author.some(id => id === authorId))) return false;

  return true;
}

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
}