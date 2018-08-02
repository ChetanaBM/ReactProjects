import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Account from './Account';

/* App component */
export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route path="/Account" component={Account} />
            </Switch>
        )
    }
}

