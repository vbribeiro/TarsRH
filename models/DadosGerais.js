// Importa o arquivo do banco de dados
const bd = require('./bd');

const DadosGerais = bd.sequelize.define('dadosGerais', {
    // id_colaborador: {
    //     type: bd.Sequelize.INTEGER
    // },
    nome: {
        type: bd.Sequelize.STRING
    },
    data_nascimento: {
        type: bd.Sequelize.STRING
    },
    cpf: {
        type: bd.Sequelize.STRING
    },
    email: {
        type: bd.Sequelize.STRING
    },
    endereco: {
        type: bd.Sequelize.STRING
    },
    cep: {
        type: bd.Sequelize.STRING
    },
    complemento: {
        type: bd.Sequelize.STRING
    },
    peso: {
        type: bd.Sequelize.FLOAT
    },
    altura: {
        type: bd.Sequelize.STRING
    },
    dependentes: {
        type: bd.Sequelize.STRING
    },
    meditacao: {
        type: bd.Sequelize.STRING
    },
    data_admissao: {
        type: bd.Sequelize.STRING
    }
});

// Este comando recria a tabela com todos os dados acima.
// DadosGerais.sync({force: true});

module.exports = DadosGerais;