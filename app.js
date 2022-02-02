// carregando o express
const express = require('express');
const app = express();

// conexão com o banco de dados
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'roott',
    password : 'roott',
    database : 'tarsrh'
});

connection.connect(function(err) {
    if (err) console.error('Erro de conexão com BD: ' + err.stack); return;
});

// carregando os arquivos html, css e js
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));

// rota para a página
app.get('/', async (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// rodando localhost
app.listen(5001, () => {
    console.log('Iniciado na porta 5001: http://localhost:5001/');
});