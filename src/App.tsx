import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { CreateAccount } from './components/CreateAccount';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="" component={Login} />
      </Switch>
    </Router>
  );
}
