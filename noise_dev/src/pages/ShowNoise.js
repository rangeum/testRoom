import React, { Component } from 'react';
import axios from 'axios';
import './shownoise.css';

class ShowNoise extends Component {
  state = {};
  componentDidMount() {
    const _getNoise = () =>
      axios.get('/api/getNoise')
      .then(res => this.setState({username:res.data.username}));
      _getNoise();
     this._interval = window.setInterval(_getNoise, 30);
  }
  render(){
    // const {username} = this.state;
    return(
        <div>
            <h2>현재 소음도 : {this.state.username}</h2>
            {this.state.username ? <NoiseGraph level={this.state.username}/>: "Loading"}
        </div>
    )
  }
}
function NoiseGraph({level}) {
  return(
    <div>
      <h1>level:{level}</h1>
      <div className={level<85?'canvas':'canvas--fill'}></div>
      <div className={level<80?'canvas':'canvas--fill'}></div>
      <div className={level<75?'canvas':'canvas--fill'}></div>
      <div className={level<70?'canvas':'canvas--fill'}></div>
      <div className={level<65?'canvas':'canvas--fill'}></div>
      <div className={level<60?'canvas':'canvas--fill'}></div>
      <div className={level<55?'canvas':'canvas--fill'}></div>
      <div className={level<50?'canvas':'canvas--fill'}></div>
      <div className={level<45?'canvas':'canvas--fill'}></div>
      <div className={level<40?'canvas':'canvas--fill'}></div>
      <div className={level<35?'canvas':'canvas--fill'}></div>
      <div className={level<30?'canvas':'canvas--fill'}></div>
      <div className={level<25?'canvas':'canvas--fill'}></div>
      <div className={level<20?'canvas':'canvas--fill'}></div>
      <div className={level<15?'canvas':'canvas--fill'}></div>
      <div className={level<10?'canvas':'canvas--fill'}></div>
      <div className={level<5?'canvas':'canvas--fill'}></div>
    </div>
  )
}
export default ShowNoise;
