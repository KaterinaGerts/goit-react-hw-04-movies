import React from 'react';
import s from './MovieSearch.module.css';
import {IMG_URL} from 'constants/constants';

 const MovieSearch = ({onClick, movies}) => {
  return (
    <ul>
      {movies.map(({id, poster_path, title}) => (
      <li  key={id} className={s.movieList}>
      <img
        src={`${IMG_URL}${poster_path}`}
        alt={title}
        onClick={onClick}
        className={s.movieImg}
        width="300"        
      />
    </li>))}
    </ul>
  )
}

export default MovieSearch;