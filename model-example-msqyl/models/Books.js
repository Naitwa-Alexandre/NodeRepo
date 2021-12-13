const connection = require('./connection');
const Author = require('./Author');

const getAll = () => connection()
  .then((db) => db.collection('books').find({}).toArray());

const getByAuthorId = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const create = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, author_id],
  );

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create,
}