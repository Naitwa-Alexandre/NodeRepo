const express = require('express');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong!' });
});

app.listen(PORT, () => console.log(`App litening on port ${PORT}`));