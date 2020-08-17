import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';
import { GoQuestion } from 'react-icons/go';
import Button from '../../components/Button';
import ArrowUp from '../../components/ArrowUp';

const Main = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function load() {
            const response = await api.get('/questions');
            setQuestions(response.data);
            return;

        }
        load();
    }, []);

    return (
        <div className="container" id="content-questions">
            <Link to="/question" className="link-question"><Button type="button" displayIconSend="d-none" displayIconView="d-none" className="btn-question" name="Criar Tópico" /></Link>
            {
                questions.map(question => (
                    <div key={question.id} className="card mt-5" id="card-question">
                        <div className="card-header" id="card-question-header"><h5><GoQuestion /> {question.title}</h5></div>
                        <div className="card-body" id="card-question-body">
                            <h5 id="question-description">{question.description}</h5>
                            <form>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" id="input-answer" />
                                </div>
                                <div className="form-group" id="group-btn-view-answer">
                                    <Link to={`/question/${question.id}`} className="link-question"><Button type="button" name="visualizar" className="btn-question" displayIconSend="d-none" displayIconQuestion="d-none" /></Link>
                                    <Button type="button" name="Responder" displayIconView="d-none" displayIconQuestion="d-none" className="btn-question" />
                                </div>
                            </form>
                        </div>
                    </div>
                ))
            }
            <ArrowUp />
        </div>
    )
}
export default Main;