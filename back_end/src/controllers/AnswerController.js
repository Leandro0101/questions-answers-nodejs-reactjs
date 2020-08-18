const Answer = require('../models/Answer');
const { index } = require('./QuestionController');

module.exports = {
    async store(req, res){
        const answer = await Answer.create(req.body);

        return res.json(answer);
    },
    async index(req, res){
        const { question_id } = req.params;
        const answers = await Answer.findAll({
            where: { question_id },
            order: [
                ['id', 'DESC']
            ]
        });

        return res.json(answers);
    }
}