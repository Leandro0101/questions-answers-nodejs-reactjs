const Sequelize = require('sequelize');
const Question = require('../models/Question');

module.exports = {
    async store(req, res){
        const question = await Question.create(req.body);
        return res.json(question);
    },

    async index(req, res){
        const questions = await Question.findAll();

        return res.json(questions);
    }
}