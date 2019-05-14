import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, ShowNoise } from './pages';

class App extends Component {
  render() {
    return(
    <Router>
    <Route exact path='/' component={Home}/>
    <Route path='/show' component={ShowNoise}/>
    </Router>
    )
  }
}

export default App;
