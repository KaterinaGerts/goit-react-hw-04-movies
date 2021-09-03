import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({movies}) => {
  const location = useLocation();

  return (
    <ul>
     {movies.map(movie => (
       <li key={movie.id}>
         <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
           <img src={movie.poster_path} alt={movie.title} />
            {movie.title}
           
          </Link>
       </li>
     ))}
   </ul>
  )
}

export default MoviesList;


