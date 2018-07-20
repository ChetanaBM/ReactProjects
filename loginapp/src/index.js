import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
//import app from './App.js';
import registerServiceWorker from './registerServiceWorker';
//import FormErrors from './FormErrors.js';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
