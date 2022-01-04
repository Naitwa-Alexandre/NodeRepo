const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const foo = "bar";
    const bar = "baz";
    const one = 1;
    const two = 2;
    const three = 2;
    const five = two + three;

    res.send('2 + 3 = ' + five);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});