import MoviesList from 'components/MoviesList';
import React from 'react';
//import {Link} from 'react-router-dom';
import Spinner from 'components/Loader';
import { useState, useEffect } from 'react';
import * as moviesApi from 'services/movie-api';
import { Status } from 'constants/constants';

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  useEffect(() => {
  
    const spiner = () => {
      if(!movies) {setStatus(Status.PENDING)} 
      else {setStatus(Status.RESOLVED)}
    }

  moviesApi
      .fetchPopularMovies()
      .then(data => setMovies(data.results), setStatus(Status.RESOLVED))     
      .catch(error => setError(error), setStatus(Status.REJECTED))    
      spiner()
  }, [movies]);

  return (
    <div>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
      {status === Status.REJECTED && <h1>{error}</h1>}
    </div>
  );
}

export default HomePage;
