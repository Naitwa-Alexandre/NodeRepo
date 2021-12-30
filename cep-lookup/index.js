const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong!' });
});


app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));