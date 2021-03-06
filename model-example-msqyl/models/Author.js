const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

const serialize = ({ id, first_name, middle_name, last_name }) => {
  return {
    id,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name
  }
}

const getAll = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray())
            .then((authors) =>
                authors.map(({ _id, firstName, middleName, lastName }) =>
                getNewAuthor({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}

const getById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id))) 

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db) => db.collection('authors').insertOne({
      firstName,
      middleName,
      lastName
    }));
}

const findById = async (authorId) => {
  const query = 'SELECT * FROM model.example.authors WHERE id=?';

  const author = await connection.execute(query, [authorId]);

  if (!author.length) return true;

  return false;
}

module.exports = {
  getAll,
  getById,
  create,
  isValid,
  findById,
}