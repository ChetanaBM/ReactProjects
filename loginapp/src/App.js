// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import Account from './Account';
// //import './styles.css';
// //import FormContainer from './containers/FormContainer';

// /* App component */
// export default class App extends React.Component {
//     render() {
//         return (
//             <Switch>
//                 <Route exact path="/" component={LoginForm} />
//                 <Route path="./Account" component={Account} />
//             </Switch>
//         )
//     }
// }



//New Form
import React, { Component } from 'react';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';
import FormContainer from './containers/FormContainer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>React.js Controlled Form Components</h3>
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}


