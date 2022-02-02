const express = require('express');
const app = express();

app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.listen(5001, () => {
    console.log('Iniciado na porta 5001: http://localhost:5001/');
});