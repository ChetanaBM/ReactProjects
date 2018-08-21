import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
//import { BrowserRouter } from 'react-router-dom';
//import PropType from 'prop-types'

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//     , document.getElementById('app'));

  
   //New Form 
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
=======

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app'));



>>>>>>> 5f9689891c375fcd2b50250c8c574e1e0e76aa74


