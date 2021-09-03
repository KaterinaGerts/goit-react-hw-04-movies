import React from 'react';
//import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import movieApi from 'services/movie-api';

function HomePage() {

  const [movies, setMovies] = useState([]);

 
    useEffect(() => {
      function getMovies(){
        movieApi
        .fetchMovies(movies)
        .then(setMovies)
       }
       getMovies();
      
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