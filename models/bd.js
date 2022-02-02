// Uso do sequelize para o mapeamento do banco
const Sequelize = require("sequelize");

const sequelize = new Sequelize('tarsrh', 'roott', 'roott', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}