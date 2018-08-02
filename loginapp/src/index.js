import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';
import Appp from './LoginForm';
import Account from './Account';

/* App is the entry point to the React code.*/
import App from './App';

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app'));





