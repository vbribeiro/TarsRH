const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.listen(8080, () => {
    console.log('Iniciado na porta 8080: localhost:8080');
});