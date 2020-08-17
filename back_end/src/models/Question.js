const Sequelize = require('sequelize');
const connection = require('./../database/index');

const Question = connection.define('questions', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({ force: false }).then(()=>{
    return ;
}).catch((error)=>{
    return console.log(error);
});

module.exports = Question;