const express = require('express');

const app = express();
require('dotenv').config();
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middleware/error');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', Cep.findAdressByCep);

app.use(errorMiddleware);


app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));