import React from 'react';
import { Link} from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({movies}) => {
  // const {url} = useRouteMatch();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
 
  return (
    <ul className={s.movieList}>
     {movies.map(({id, title, poster_path}) => (
       <li className={s.list} key={id}><Link to={`/movies/${id}`}>
       <img src={`${IMG_URL}${poster_path}`} alt={title} width="300" /></Link>   
       <Link to={`/movies/${id}`} className={s.title}>{title}</Link>                          
       </li>
     ))}
   </ul>
  )
}

export default MoviesList;


