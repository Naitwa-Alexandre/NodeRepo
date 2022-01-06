module.exports = {
  "development": {
    "username": process.env.DB_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
