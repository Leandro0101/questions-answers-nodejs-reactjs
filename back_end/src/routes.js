const express = require('express');
const routes = express.Router();
const QuestionController = require('./controllers/QuestionController');

routes.get('/questions', QuestionController.index);
routes.post('/ask', QuestionController.store);

module.exports = routes;
