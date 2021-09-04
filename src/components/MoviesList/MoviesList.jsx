import React from 'react';
import { Link, useRouteMatch} from 'react-router-dom';

const MoviesList = ({movies}) => {
  const {url} = useRouteMatch();
 
  return (
    <ul>
     {movies.map(({id, title, poster_path}) => (
       <li key={id}><Link to={`${url}/${id}`}>
       {title}</Link>
       <img src={poster_path} alt={title} />                      
       </li>
     ))}
   </ul>
  )
}

export default MoviesList;


