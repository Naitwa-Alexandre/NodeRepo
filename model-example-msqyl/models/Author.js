const connection = require('./connection');

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
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );

  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
}