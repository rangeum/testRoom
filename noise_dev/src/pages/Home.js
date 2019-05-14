import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class Home extends Component {

    state = { username: null };

    componentDidMount() {
      const _getNoise = () =>
        axios.get('/api/getNoise')
        .then(res => this.setState({username:res.data.username}));
        _getNoise();
       // this._interval = window.setInterval(_getNoise, 300);
    }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("App getSnapshotBeforeUpdate()");
  //   console.log(prevProps +", "+prevState);
  // return 1;
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(prevProps +", "+prevState+", "+snapshot);
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   axios.get('/api/getNoise')
  //   .then(res=>console.log(res.data.username))
  // }
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
              {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          </div>
      </div>
    );
  }
}

export default Home;
