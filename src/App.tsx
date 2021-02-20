import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { NavBar } from './components/NavBar';
import { Login } from './components/Login';
import { MainPage } from './components/MainPage';



export default function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/account" component={Login} />
      </Switch>
    </Router>
  );
}
