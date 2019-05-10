import React, {Component } from 'react';

import './App.css';
import Movie from './Movie.js';

// const MovieName = [
//   "Avengers : Endgame",
//   "Avengers : Infinity War",
//   "Avengers : Age of Ultron",
//   "Avengers",
// ]
// const Movieimg = [
//   "https://file.mk.co.kr/meet/neds/2019/04/image_readtop_2019_256311_15560825753723317.jpg",
//   "https://t1.daumcdn.net/cfile/tistory/99CCF64D5AAE12E72C",
//   "https://t1.daumcdn.net/cfile/tistory/2235D0425543734F0E",
//   "https://images-na.ssl-images-amazon.com/images/I/71%2BNoq4xpNL._SY679_.jpg"
// ]


//리액트 라이프사이클

//Render : componentWillMount() -> render() -> componentDidMount()

//update : component WIllReceiveProps() -> shouldComponenetUpdate() ( == true) -> componentWillUpdate -> render() -> componentDidUpdate()




class App extends Component {
  // componentWillMount() {
  //   console.log("will mount");
  // }
componentDidMount() {
  fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  .then(potato => potato.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
}

  state = {
  }
  _renderMovies = () => {
    const moives = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key={index} />
    })
    return moives
  }

  render(){
    console.log("did render");
    return (
      <div className="App">
      {this.state.greeting ? this._renderMovies() : 'Loading..'}
        </div>
    );
  }
}

export default App;
