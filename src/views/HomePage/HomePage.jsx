import MoviesList from 'components/MoviesList';
import React from 'react';
//import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesApi from 'services/movie-api';

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {    
    
    moviesApi
    .fetchPopularMovies()
    .then(data => setMovies( data.results));
  }, []);

  return <div>
    {movies && <MoviesList movies={movies}/>}
    </div>;
}

export default HomePage;
