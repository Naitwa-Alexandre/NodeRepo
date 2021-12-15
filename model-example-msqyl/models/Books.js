const connection = require('./connection');
const { ObjectId } = require('mongodb');
const Author = require('./Author');

const getAll = () => connection()
  .then((db) => db.collection('books').find({}).toArray());

const getByAuthorId = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const books = await connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)));

  if (!books) return null;

  const { title, author_id } = books;

  return {
    id,
    title,
    authorId: author_id,
  }
}

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!author_id || typeof author_id !== 'number' || !(await Author.findById(author_id))) return false;

  return true;
};

const create = async (title, author_id) => {
  await connection()
  .then((db) => db.collection('books').insertOne({
    title,
    authorId: author_id
  }));
} 

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create,
}