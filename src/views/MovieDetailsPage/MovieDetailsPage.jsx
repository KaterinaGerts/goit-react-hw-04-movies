import React from 'react';
import s from './MovieDetailsPage.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as moviesApi from 'services/movie-api';
// import { Route } from 'react-router-dom';
// import Cast from '../Cast';
// import Reviews from '../Reviews';

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {    
    moviesApi
    .fetchInfoAboutMovies(movieId)
    .then(data => setMovie(data))
  }, [movieId])
 
  return (
    <div className={s.datailsContainer}>
      {movie && <>
      <img src={`${IMG_URL}${ movie.poster_path}`} alt={movie.title} width="250" className={s.movieImage}/>
      <h2>{movie.title}</h2>      
      </>}
  
      {/* <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
    </div>
  );
};

export default MovieDetailsPage;
