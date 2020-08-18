import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Header from './components/Header';
import Question from './pages/question';
import Answers from './pages/answers';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/question" component={Question} />
            <Route path="/answers/:question_id" component={Answers} />
        </Switch>
    </BrowserRouter>
);

export default Routes;