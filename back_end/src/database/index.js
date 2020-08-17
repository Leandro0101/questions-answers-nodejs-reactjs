const Sequelize = require("sequelize");
const connection = new Sequelize('questions_answers2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;