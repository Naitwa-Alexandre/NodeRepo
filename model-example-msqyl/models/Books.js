const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books'
  );

  return books;
}

const getByAuthorId = async (author_id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE author_id=?',
    [author_id]
  );

  if (!books.length) return null;

  return books;
}

module.exports = {
  getAll,
  getByAuthorId,
}