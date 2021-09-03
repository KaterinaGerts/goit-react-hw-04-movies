import React from 'react';
//import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import moviesApi from 'services/movie-api';

function HomePage() {

  const [movies, setMovies] = useState('');

 
    useEffect(() => {
      if(!movies) return;
        moviesApi
        .fetchMovies(movies)
        .then(setMovies)     
      
    }, [movies]); 
  
  return (
    <div>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {/* <Link to={}></Link> */}
            </li>
          ))}
        </ul>
      )}
      
    </div>
  )
}

export default HomePage;