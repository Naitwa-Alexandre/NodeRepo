const express = require('express');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', (req, res) => {

});


app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));