// import React, { Component } from 'react';
import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

// class Movie extends Component {
// //yarn add prop-types
//   static propTypes = {
//     title:PropTypes.string,
//     poster:PropTypes.string
//   }
//
//   render() {
//     console.log(this.props);
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

// class MoviePoster extends Component {
//
//   static propTypes = {
//     poster:PropTypes.string
//   }
//
//   render() {
//     return(
//       <img src={this.props.poster} />
//     )
//   }
// }
function Movie({title, poster,genres, synopsis}) {
  return(
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__genres">
          {genres.map((genre,index) => <MovieGenre genre = {genre} key={index} />)}
        </div>
        <p className="Movie__synopsis">
          {synopsis}
        </p>
      </div>
    </div>
    )
}
function MovieGenre({genre}){
  return(
    <span className="Movie__genre">{genre} </span>
  )
}

function MoviePoster({poster, alt}) {
  return(
    <img src={poster} alt={alt} className="Movie__Poster"/>
  )
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis:PropTypes.string.isRequired
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
