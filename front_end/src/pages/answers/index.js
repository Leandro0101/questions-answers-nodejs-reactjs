import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';
import { GoQuestion } from 'react-icons/go';
import { RiMessage2Line } from 'react-icons/ri';
const Answers = (props) => {

    const [question, setQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const question_id = props.match.params.question_id;
    useEffect(() => {
        const loadAnswers = async () => {
            const response = await api.get(`answers/${question_id}`);
            setAnswers(response.data);
        }
        loadAnswers();
    }, [question_id]);

    useEffect(() => {
        const loadQuestion = async () => {
            const response = await api.get(`single/${question_id}`);
            const { description, title } = response.data;
            setQuestion({ description, title });
        }
        loadQuestion();
    }, [question_id]);

    return (
        <div className="container content-questions-answers" id="content-questions">
            <div className="card card-question-header" id="card-question-header">
                <div className="card-header" id="card-question-header"><h5><GoQuestion/> {question.title}</h5></div>
                <div className="card-body" id="card-question-body"><h5>{question.description}</h5></div>
            </div>
            {

                answers.map((answer, index) => (
                    <div key={index} className="card mt-4" id="card-answer">
                        <div className="card-body" id="card-body-answer">
                            <h5 className="answer-text">{answer.body}</h5>
                            <h5><RiMessage2Line /></h5>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Answers;