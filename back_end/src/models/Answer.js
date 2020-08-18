const Sequelize = require('sequelize');
const connection = require('../database/index');
const Answer = connection.define('answers', {
    body: {
        type: Sequelize.STRING,
        allowNull: false
    },
    question_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Answer.sync({ force: false });
module.exports = Answer;
