import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';
import { IMG_URL } from 'constants/constants';

const MoviesList = ({ movies }) => {
  // const {url} = useRouteMatch();
  const location = useLocation();

  return (
    <ul className={s.movieList}>
      {movies.map(({ id, title, poster_path }) => (
        <li className={s.list} key={id}>
          <Link className={s.link} to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            <img src={`${IMG_URL}${poster_path}`} alt={title} width="300" className={s.imageList}/>
            <p className={s.title}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

