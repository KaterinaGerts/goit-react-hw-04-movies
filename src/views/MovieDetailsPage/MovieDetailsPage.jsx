import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as moviesApi from 'services/movie-api';
// import { Route } from 'react-router-dom';
// import Cast from '../Cast';
// import Reviews from '../Reviews';

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {    
    moviesApi
    .fetchInfoAboutMovies(movieId)
    .then(data => setMovie(data))
  }, [movieId])
 
  return (
    <div>
      {movie && <>
      <img src={movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>      
      </>}
  
      {/* <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
    </div>
  );
};

export default MovieDetailsPage;
