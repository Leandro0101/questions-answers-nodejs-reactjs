import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiQuestionnaireLine } from 'react-icons/ri';
import './styles.css';

const Header = () => {
    return (
        <nav className="navbar navbar-light fixed-top">
            <Link to="/" id="link">
                <h1><RiQuestionnaireLine id="icon" /></h1> <h5 className="ml-2">Perguntas e respostas</h5>
            </Link>
        </nav>
    )
}

export default Header;