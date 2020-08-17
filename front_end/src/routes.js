import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Header from './components/Header';
import Question from './pages/question';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/question" component={Question} />
        </Switch>
    </BrowserRouter>
);

export default Routes;