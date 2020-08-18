const Sequelize = require('sequelize');
const Question = require('../models/Question');

module.exports = {
    async index(req, res) {
        const questions = await Question.findAll({
            order: [
                ['id', 'DESC']
            ]
        });

        return res.json(questions);
    },
    async store(req, res) {
        const question = await Question.create(req.body);
        return res.json(question);
    },
    async single(req, res){
        const { question_id } = req.params;
        const question = await Question.findByPk(question_id);

        return res.json(question);
    }
}