// Configurações e importações dasframeworks 
const express = require('express');
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');
const dadosGerais = require('./models/DadosGerais');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// carregando os arquivos html, css e js
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));

// rota para a página
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// rota para a página da ocnfirmação
app.get('/confirmacao.handlebars', (req, res) => {
    res.sendFile(__dirname + "/views/confirmacao.handlebars");
});

// método post inserindo os dados através dos names inseridos no html e mandando para o bd
app.post('/confirmacao.handlebars', (req, res) => {
    dadosGerais.create({
        nome: req.body.nome,
        data_nascimento: req.body.dtanascimento,
        cpf: req.body.cpf,
        email: req.body.email,
        endereco: req.body.endereco,
        cep: req.body.cep,
        complemento: req.body.complemento,
        peso: req.body.peso,
        altura: req.body.altura,
        dependentes: req.body.dependentes,
        meditacao: req.body.op1,
    }).then(function (){
        res.send("Cadastro realizado com sucesso!");
    }).catch(function (erro) {
        res.send("Cadastro não realizado com sucesso." + erro);
    });
});

// rodando localhost
app.listen(5001, () => {
    console.log('Iniciado na porta 5001: http://localhost:5001/');
});