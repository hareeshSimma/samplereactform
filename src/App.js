import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Route } from 'react-router-dom';
import { HashRouter as Router, Route,withRouter } from "react-router-dom";
import RegisterationForm from "./components/register/registrationForm";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div className="childRoutes">
          <Route exact path="/" component={RegisterationForm}></Route>
          
        </div>
      </Router>
    </div>

    );
  }
}

export default withRouter(App);
