const express = require('express');
const routes = express.Router();
const QuestionController = require('./controllers/QuestionController');
const AnswerController = require('./controllers/AnswerController');
routes.get('/questions', QuestionController.index);
routes.post('/ask', QuestionController.store);
routes.post('/answer', AnswerController.store);
routes.get('/answers/:question_id', AnswerController.index);
routes.get('/single/:question_id', QuestionController.single);
module.exports = routes;
